import { on } from 'events'
import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { GROUND_BASE } from '../presets/ground'
import { SF } from '../presets/cl'
import { LED_ON, led } from '../presets/led'
import { COLOR_BLUEPURPLE, COLOR_ORANGE, COLOR_ORANGE1, COLOR_RED } from '../presets/colors'



export const sinkan: Sequence[] = [
    {
        note: 'OHANASHI',
        steps: [
            {
                id: 'OHANASHI',
                position: 60 * 1,
                render(d, t,a = 45 * 2.25,b = 30 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, b))
            },
            extends: [
                COLOR_ORANGE
            ]
            },
        ],
        
    },
    {
        note: '客入れ',
        steps: [
            {
                id: '暗転',
                position: 60 * 0,
            },
            {
                id: '客入れ',
                position: 60 * 1,
                render(d, t,a = 60 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '暗転',
                position: 60 * 60,
                fade:1
            },

        ],
        
    },

    {
        note: 'シーン１',
        steps: [
            {
                id: '乃愛・陽人・壮太が立ち位置についた後',
                position: 60 * 0,
                fade:2,
                render(d, t,a = 65 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '小百合もおはようのすぐあとM1のギターin',
                position: 60 * 1,
                fade:2,
                render(d, t,a = 75 * 2.25,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '手繋いで引っ張るところ相思相愛言い終わったらへん',
                position: 60 * 3,
                fade:8,
                render(d, t,a = 65 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '晶「/え、うそでしょ」',
                position: 60 * 4,
                fade:5.5,
                render(d, t,a = 55 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '乃愛、陽人、壮太「//えっ！」',
                position: 60 * 5,
                render(d, t,a = 75 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '全員退場後',
                position: 60 * 6,
                fade:2,
                render(d, t,a = 75 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, b))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            // },
            // {
            //     id: '10回目の足音SEを聞いたら',
            //     position: 60 * 1,
            //     fade:1,
            //     render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
            //         d.set(UNIVERSE, addrs.SUS_1A, a)
            //         d.set(UNIVERSE, addrs.SUS_1B, a)
            //         d.set(UNIVERSE, addrs.SUS_2B, c)
            //         d.set(UNIVERSE, addrs.SUS_3B, a)
            //         d.set(UNIVERSE, addrs.SUS_3C, a / 1.5)
            //         d.merge(renderPreset(SF, t, b))
            //       },
            // },
        ]      
    },
    {
        note: 'シーン2',
        steps: [
            {
                id: '前のシーン',
                position: 60 * 0,
                render(d, t,a = 75 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, b))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '私が来た時にはすぐあと晶in',
                fade:1,
                position: 60 * 1,
                render(d, t,a = 65 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '小百合「/どうしたの?」',
                fade:76,
                position: 60 * 2,
                render(d, t,a = 35 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: 'のああわてた後そろそろ授業始まるよ！」一泊/',
                fade:5,
                position: 60 * 4,
                render(d, t,a = 35 * 2.25,b = 20 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
                extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE
                ]
            },
            {
                id: 'アンサンブル三人「//さっき話してた」',
                fade:1.6,
                position: 60 * 6,
                render(d, t,a = 35 * 2.25,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: 'M2out',
                position: 60 * 8,
                render(d, t,a = 35 * 2.25,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: '暗転',
                fade:1,
                position: 60 * 8 + 2,
            },
        ],
        
    },
    {
        note: 'シーン3',
        steps: [
            {
                id: '上手パネル合図',
                position: 60 * 0 + 10,
                fade:1.5,
                render(d, t,a = 65 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '凛「/そ/ういうことね」',
                position: 60 * 2,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            {
                id: '小百合真ん中立った後晶in',
                position: 60 * 4,
                fade:1.2,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
            },
            {
                id: '/Ba/-ba-da-ba,',
                position: 60 * 6,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
            },
            {
                id: 'せーのさんはい/We/ wish you a happy birthday',
                position: 60 * 7,
                render(d, t,a = 100 * 2.25,b = 80 * 2.25,c = 80 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
            },
            {
                id: '笑顔でいようぜ後のドラム最後のキメ//',
                position: 60 * 8,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
            },
            {
                id: '小百合誕生日おめでとう/We/ wish you a happy birthday',
                position: 60 * 9,
                render(d, t,a = 80 * 2.25,b = 80 * 2.25,c = 80 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
        },
            {
                id: '手拍子の後/つ/らいこと',
                position: 60 * 10,
                render(d, t,a = 30 * 2.25,b = 0 * 2.25,c = 30 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
            },
            {
                id: 'たのしいこ/と/',
                position: 60 * 11,
                render(d, t,a = 100 * 2.25,b = 80 * 2.25,c = 80 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE1
            ]
            },
            {
                id: '光を浴びての後チャンチャンの５泊目',
                position: 60 * 12,
                render(d, t,a = 100 * 2.25,b = 100 * 2.25,c = 100 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE1
            ]
            },
            {
                id: 'M4outの2s後',
                position: 60 * 13,
                render(d, t,a = 100 * 2.25,b = 100 * 2.25,c = 100 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE1
            ]
            },
            {
                id: '↓',
                position: 60 * 13 + 2,
                fade:2
            },
            {
                id: 'カテコBGMinの/3小節目の頭から4小節目の終わり/までで',
                position: 60 * 14,
                fade:3.81,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_ORANGE
            ]
            },
            {
                id: '全員はけたら',
                position: 60 * 16,
                fade:4.1
            },
            {
                id: '舞監口上in',
                position: 60 * 18,
                fade:2,
                render(d, t,a = 45 * 2.25,b = 30 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
            },
            },
            
        ],
        
    },
]