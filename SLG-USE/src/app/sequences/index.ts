import { Preset, renderPresetObject } from '../presets'
import { DmxFrame } from '@nandenjin/alien-core'

import { second } from './01_second'

/** シーケンスの内包するステップ
 *
 * - プリセットのプロパティに加え、シーケンス内でのフェードインの時間や再生開始時刻のプロパティを持つ
 */
export interface SequenceStep extends Preset {
  /** フェードインの時間（秒） */
  fade?: number

  /** シーケンスの先頭を基準とした再生開始時刻（秒） */
  position: number

  /** ビートの周期（秒） */
  cycle?: number
}

/**
 * プリセットとその再生タイミングの列からなるシーケンス
 *
 * - 例えば、演目中の曲や映像に対応する。これらの再生時間と同期して、シーケンスも自動的に再生される
 */
export interface Sequence {
  /** シーケンスを構成するステップの配列 */
  steps: SequenceStep[]

  /** UIに表示されるシーケンスの名前 */
  note?: string

  /** ビートの周期（秒） */
  cycle?: number
}

/** プロジェクトに存在するシーケンスのリスト */
const sequences: Sequence[] = [
  ...second
]

export default sequences

/**
 * シーケンスのIDを指定してレンダリングする
 * @param d レンダリング先のフレーム。出力はここを参照して書き出される
 * @param sequences シーケンスの配列
 * @param startTimes 個々のシーケンスの開始時刻の配列（UnixTime, ms）
 * @param cycle 曲のテンポ周期
 * @param base ベースになるフレーム。`d` はこれに対して加算される
 */
export function render(
  d: DmxFrame,
  sequences: Sequence[],
  startTimes: number[],
  cycleFromArg = 1,
  base?: DmxFrame
): void {
  const now = Date.now() / 1000

  for (let i = 0; i < sequences.length; i++) {
    const sequence = sequences[i]
    const startTime = startTimes[i]

    if (!sequence || !startTime || startTime < 0) continue

    const { steps, cycle: cycleFromSequence } = sequence

    /** シーケンス開始からの経過時間 */
    const timeInSequence = now - startTime

    for (let j = 0; j < steps.length; j++) {
      const step = steps[j]

      // フェード時間の読み取り
      let { fade } = step
      fade = fade || 0

      // ビートの周期の読み取り
      const { position, cycle: cycleFromStep } = step

      /** ビートの周期 */
      const cycle = cycleFromStep || cycleFromSequence || cycleFromArg

      /** 次のステップ */
      let nextStep: SequenceStep | null = null,
        /** 次のステップのフェード時間（秒） */
        fadeOfNextStep = 0,
        /** 次のステップ内での経過時間（秒） */
        timeInNextStep = 0

      /** シーケンス開始からの経過時間（ビートの間隔を1とする相対値） */
      const timeScaledByCycle = timeInSequence / cycle

      // ひとつ先のステップが同じシーケンス内にある場合
      if (j + 1 < steps.length) {
        if (steps[j + 1].position <= timeInSequence) {
          nextStep = steps[j + 1]
          timeInNextStep = timeInSequence - nextStep.position
        } else {
          nextStep = null
        }
      }
      // ひとつ先のステップが次のシーケンスの先頭にある場合
      else if (j + 1 === steps.length && sequences[i + 1]) {
        /** 次のシーケンスの再生開始時刻 */
        const nextStartTime = startTimes[i + 1]

        // 次のシーケンスの再生がすでに開始されている場合
        if (nextStartTime > 0 || nextStartTime <= now) {
          nextStep = sequences[i + 1].steps[0]
          timeInNextStep = now - nextStartTime
        }
        // 次のシーケンスがまだ再生されていない場合
        else {
          nextStep = null
        }
      }

      if (nextStep) {
        fadeOfNextStep = nextStep.fade || 0
      }

      if (position <= timeInSequence) {
        /** 現在のステップ内での経過時間 */
        const timeInStep = timeInSequence - position

        /** フェードインのための係数
         *
         * ステップの先頭でフェードイン時間に合わせ0->1へ変化する
         */
        const fadeIn = fade ? Math.min(timeInStep / fade, 1) : 1

        /**
         * フェードアウトのための係数
         *
         * 次のステップの先頭でフェードアウト時間に合わせ1->0へ変化する
         */
        const fadeOut = nextStep
          ? fadeOfNextStep
            ? Math.min(timeInNextStep / fadeOfNextStep, 1)
            : 1
          : 0

        // ステップがフェードイン前またはフェードアウト後の場合はレンダリングをスキップ
        if (fadeIn * (1 - fadeOut) === 0) continue

        // 指定されたステップをレンダリング
        let rendered = renderPresetObject(step, timeScaledByCycle)

        // ベースフレームが指定されている場合は、そこに加算する
        if (base) rendered = base.clone().merge(rendered)

        // フェードイン・アウトを適用して書き出す
        d.add(rendered.scale(fadeIn * (1 - fadeOut)))
      }
    }
  }
}
