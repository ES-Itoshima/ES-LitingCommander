<template lang="pug">
div.sequence-wrap
  div.status
    div.time
      span(v-if="currentTimePosition")
        | {{ ('00' + Math.floor(currentTimePosition/60)).slice(-2) }}:{{ ('00' + Math.floor(currentTimePosition % 60)).slice(-2) }}:{{ Math.floor(currentTimePosition % 1 * 10) }}
      span(v-else)
        | --:--:--
    div.cycle
      span(:class="{'is-overriden': cycleOverride}") {{ Math.floor(cycle * 100) / 100 }}s ({{ Math.round(60 / cycle) }}bpm)
      span.override(v-if="cycleOverride") {{ cycleOverride }}s ({{ Math.floor(60 / cycleOverride) }}bpm)
  div.list
    div.sequence(
      v-for="(sequence, i) in sequences"
      @click="jumpToSequence(i)"
      :class="{ 'is-active': currentSequenceIndex === i }"
    )
      div.note {{ sequence.note || '(Unnamed)' }}
      div.step(
        v-for="(step, j) in sequence.steps"
        @click.stop="jumpToStep(i, j)"
        :class="{ 'is-active': currentSequenceIndex === i && currentStepIndex >= j }"
      )
        div.position {{ ('00' + Math.floor(step.position/60)).slice(-2) }}:{{ ('00' + Math.floor(step.position % 60)).slice(-2) }}
        div.id {{ step.id }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      now: 0,
    }
  },
  computed: {
    currentStepIndex() {
      const now = this.now
      const sequence = this.sequences[this.currentSequenceIndex]
      const startTime = this.startTimes[this.currentSequenceIndex]
      const current = now - startTime
      for (let j = sequence.steps.length - 1; j >= 0; j--) {
        const step = sequence.steps[j]
        if (!startTime || startTime < 0 || current < 0) continue
        else if (current < step.position) continue
        else {
          return j
        }
      }
      return 0
    },
    currentSequenceIndex() {
      let k,
        s = 0
      for (let i = 0; i < this.startTimes.length; i++) {
        if (s <= this.startTimes[i]) {
          ;(s = this.startTimes[i]), (k = i)
        }
      }
      return k
    },
    currentSequence() {
      return this.sequences[this.currentSequenceIndex]
    },
    currentStep() {
      return this.currentSequence?.steps[this.currentStepIndex]
    },
    currentTimePosition() {
      return this.now - this.startTimes[this.currentSequenceIndex]
    },
    cycleOverride() {
      return this.currentStep?.cycle || this.currentSequence?.cycle
        ? this.currentStep.cycle || this.currentSequence.cycle
        : 0
    },
    ...mapState({
      sequences: state => state.sequences.sequences,
      startTimes: state => state.sequences.startTimes,
      cycle: state => state.sequences.cycle,
    }),
  },
  mounted() {
    const tick = () => {
      if (!this._destroyed) setTimeout(() => tick(), 100)
      this.now = Date.now() / 1000
    }
    setTimeout(() => tick(), 100)

    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') this.go()
    })
  },
  methods: {
    jumpToSequence(i) {
      const x = new Array(i + 1).fill(-1)
      x[i] = Date.now() / 1000
      this.$store.dispatch('setStartTimes', x)
    },
    jumpToStep(i, j) {
      const x = new Array(i + 1).fill(-1)
      x[i] = Date.now() / 1000 - this.sequences[i].steps[j].position
      this.$store.dispatch('setStartTimes', x)
    },
    go() {
      const i = this.currentSequenceIndex
      if (i + 1 >= this.sequences.length) return
      const x = [...this.startTimes]
      x[i + 1] = Date.now() / 1000
      this.$store.dispatch('setStartTimes', x)
    },
  },
}
</script>

<style lang="sass" scoped>
.sequence-wrap
  margin: 10px 15px
  height: 100vh
  display: grid
  grid-template-rows: auto 1fr
  gap: 0.5em

  .cycle
    display: grid
    grid-template-columns: auto auto
    gap: 1em

    .is-overriden
      text-decoration: line-through

    .override
      color: #000
      background-color: #fff

  .list
    overflow-y: auto
    .sequence
      padding-left: 10px
      font-size: 14px
      cursor: pointer
      &.is-active
        background-color: #222

      .step
        display: grid
        grid-template-columns: 50px 1fr
        padding-left: 10px

        &.is-active
          background-color: #288
        &:hover
          background-color: #b2b
</style>
