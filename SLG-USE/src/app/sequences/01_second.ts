import { on } from 'events'
import { Sequence } from '.'
import { renderPreset } from '..'
import { UNIVERSE, addrs } from '../consts'
import { SF } from '../presets/cl'
import { COLOR_BLUE, COLOR_BLUEPURPLE, COLOR_M14_1, COLOR_M14_2, COLOR_M14_3, COLOR_M14_4, COLOR_M14_5, COLOR_ORANGE1, COLOR_ORANGE2, COLOR_PURPLE, COLOR_RED, COLOR_REDANDPURPLE, COLOR_SKY, COLOR_USUPINK, COLOR_WHITE, COLOR_YELLOW } from '../presets/colors'
import { GROUND_1, GROUND_2, GROUND_3, GROUND_BASE } from '../presets/ground'
import { LED_CHASE_M7, LED_ON, LED_ON_B } from '../presets/led'



export const second: Sequence[] = [
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
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
            },
            {
                id: '暗転',
                position: 60 * 30,
            },

        ],
        
    },

    {
        note: 'シーン１',
        steps: [
            {
                id: '10回目の足音SEを聞いたら',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.set(UNIVERSE, addrs.SUS_1B, a)
                    d.set(UNIVERSE, addrs.SUS_2B, c)
                    d.set(UNIVERSE, addrs.SUS_3B, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a / 1.5)
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '探偵団登場',
                position: 60 * 5,
                render(d, t,a = 60 * 2.25,b = 70 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, b))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'M1in',
                position: 60 * 8,
                fade:1,
                render(d, t,a = 40 * 2.25,b = 70 * 2.25,c = 75 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, b))
                  },
                extends:[
                    COLOR_YELLOW
                ]
            },
            {
                id: 'ともに先へ進もう ジャ/ジャッ/',
                position: 60 * 10,
                render(d, t,a = 40 * 2.25,b = 60 * 2.25,c = 75 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '過去はかん//ごくじゃない',
                position: 60 * 12,
                render(d, t,a = 40 * 2.25,b = 60 * 2.25,c = 75 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, b))
                  },
                extends:[
                    COLOR_WHITE
                ]
            },
            {
                id: 'M1後5s',
                position: 60 * 15,
                fade:2,
                render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1E, a)
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '江雪in',
                position: 60 * 17,
                render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1E, a)
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '梨沙out',
                position: 60 * 20,
                render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '江雪前キワ',
                position: 60 * 25,
                render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(SF, t, b))
                  },
            },

        ],
        
    },

   
    {
        note: 'シーン２',
        steps: [
            {
                id: '江雪out2s後',
                position: 60 * 0,
                render(d, t,a = 30 * 2.25,b = 20 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
            },
            {
                id: 'M2',
                position: 60 * 5,
                fade:1,
                render(d, t,a = 65 * 2.25,b = 50 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(LED_ON, t, c))
            },
                extends:[
                    COLOR_SKY
                ]
            },
            {
                id: '/分からない辛い',
                position: 60 * 7,
                fade:1,
                render(d, t,a = 45 * 2.25,b = 30 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(LED_ON, t, c))
            },
                extends:[
                    COLOR_ORANGE1
                ]
            },
            {
                id: '//happy suns!',
                position: 60 * 8,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
                extends:[
                    COLOR_YELLOW,
                    LED_ON
                ]
            },
            {
                id: '誠「/彼女たちなりに/元気を出してもらおうと思ってるんですよ」',
                position: 60 * 10,
                fade:2,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
            },


        ],
        
    },

    {
        note: 'シーン３',
        steps: [
            {
                id: 'M3',
                position: 60 * 0,
                render(d, t,a = 70 * 2.25,b = 80 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, b))
            },
            extends:[
                LED_ON,
                COLOR_WHITE
            ]
            },
            {
                id: 'M3後',
                fade:2,
                position: 60 * 3,
                render(d, t,a = 70 * 2.25,b = 80 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_WHITE
            ]
            },
            {
                id: 'アナウンス',
                fade:1,
                position: 60 * 6,
                render(d, t,a = 40 * 2.25,b = 30 * 2.25,c = 10 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
            },
            extends:[
                COLOR_WHITE
            ]
            },
            {
                id: 'アナウンス後',
                position: 60 * 8,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 70 * 2.25,c = 10 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(LED_ON, t, b))
            },
            extends:[
                COLOR_WHITE
            ]
            },
            {
                id: 'クルミout後',
                position: 60 * 10,
                fade:1,
                render(d, t,a = 65 * 2.25,b = 70 * 2.25,c = 10 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
            },


        ],
        
    },

    {
        note: 'シーン４',
        steps: [
            {
                id: 'M4in',
                position: 60 * 0,
                render(d, t,a = 65 * 2.25,b = 70 * 2.25,c = 10 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
            },
            {
                id: '↓',
                position: 60 * 0,
                fade:2.5,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                  },
            },
            {
                id: '真理はけ後',
                position: 60 * 5,
                fade:1,
                render(d, t,a = 70 * 2.25,b = 30 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            }}
        ],},
    {
        note: 'シーン５',
        steps: [
            {
                id: 'M5in',
                position: 60 * 0,
                render(d, t,a = 70 * 2.25,b = 30 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            }},
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 40 * 2.25,c = 70 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1C, a)
                  },
                extends:[
                    COLOR_WHITE,
                    LED_ON_B
                ]
            },
            {
                id: 'M5歌in',
                position: 60 * 1,
                fade:1,
                extends:[
                   LED_ON,
                   COLOR_WHITE
                ]
            },
            {
                id: '誠in',
                position: 60 * 4,
                render(d, t,a = 40 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_BASE, t, c))
                  },
            }
            


        ],
        
    },

    {
        note: 'シーン６',
        steps: [
            {
                id: 'M6最初のevrybody',
                position: 60 * 0,
                render(d, t,a = 40 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_BASE, t, c))
                  },
            },
            {
                id: '↓',
                position: 60 * 0,
                fade:0.5,
                render(d, t,a = 55 * 2.25,b = 40 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(LED_ON, t, c))
                  },
                extends:[
                    COLOR_YELLOW
                ]
            },
            {
                id: 'M6最後のみんなでsayyeah',
                position: 60 * 3,
                fade:3,
                render(d, t,a = 55 * 2.25,b = 40 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            }
        ],
        
    },

    
    {
        note: 'シーン7',
        steps: [
            {
                id: '迅話出し',
                position: 60 * 0,
                fade:3,
                render(d, t,a = 55 * 2.25,b = 40 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            },
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 60 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            },
            {
                id: '江雪なあお前たち',
                position: 60 * 6,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, a))
                  },
                  extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE
                  ]
            },
            {
                id: '江雪罰を受けなきゃ',
                fade:1,
                position: 60 * 9,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                  },
                  extends:[
                    LED_ON,
                    COLOR_BLUEPURPLE
                  ]
            },
            {
                id: '前奏のドラムin',
                position: 60 * 11,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                  },
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: '俺たちのアクション届け/(ダダダダッダダダダッ)/ここを繰り返す',
                position: 60 * 12,
                cycle:60/(450),
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: '↓0.38秒後',
                position: 60 * 12 + 0.1,
                extends:[
                    COLOR_RED
                ]
            },
            {
                id: 'sonoato',
                position: 60 * 13,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                  },
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: 'Hi!/間奏/そびえたつ ここを繰り返す',
                position: 60 * 14,
                extends:[
                    COLOR_RED,
                    LED_ON
                ]
            },
            // {
            //     id: '↓0.38秒後',
            //     position: 60 * 14 + 0.38,
            //     extends:[
            //         COLOR_RED,
            //     ]
            // },
            // {
            //     id: '↓0.38秒後',
            //     position: 60 * 14 + 0.76,
            //     extends:[
            //         COLOR_PURPLE,
            //         LED_ON
            //     ]
            // },
            // {
            //     id: '↓0.38秒後',
            //     position: 60 * 14 + 1.14,
            //     extends:[
            //         COLOR_RED,
            //     ]
            // },
            {
                id: 'sonoato',
                position: 60 * 15,
                render(d, t,a = 50 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, a))
                  },
                extends:[
                    LED_ON,
                    COLOR_RED
                ]
            },
            {
                id: '/限/界点',
                position: 60 * 16,
                extends:[
                    COLOR_RED,
                    LED_ON
                ]
            },
            {
                id: '江雪「俺たちはもう止まらない!」後の江雪の高笑いから3sでF.O.',
                position: 60 * 17   ,
                fade:2,
            },
            {
                id: '客電',
                position: 60 * 18,
                render(d, t,a = 70 * 2.25,b = 50 * 2.25,c = 20 * 2.25) {
                    d.merge(renderPreset(SF, t, b))
                    d.merge(renderPreset(GROUND_BASE, t, a))
            },
            },
        ],
        
    },

    {
        note: 'シーン8',
        steps: [
            {
                id: '暗転',
                position: 60 * 0,
                fade:1,
            },
            {
                id: 'アナウンス2s後',
                position: 60 * 1,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },

            },
            {
                id: 'M8in',
                position: 60 * 3,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
                  extends:[
                    COLOR_USUPINK,
                    LED_ON
                  ],
            },
            {
                id: 'はー糸ソロ',
                position: 60 * 4,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
                  extends:[
                    COLOR_SKY,
                    LED_ON
                  ],
            },
            {
                id: 'サビ',
                position: 60 * 5,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
                  extends:[
                    COLOR_YELLOW,
                    LED_ON
                  ],
            },
            {
                id: 'ラスサビ',
                position: 60 * 6,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
                  extends:[
                    COLOR_ORANGE2,
                    LED_ON
                  ],
            },
            {
                id: 'M8後',
                position: 60 * 7,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            },

           
        ],
        
    },

    {
        note: 'シーン９',
        steps: [
            {
                id: '梨沙in',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 30 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, c))
                    d.merge(renderPreset(SF, t, c))
                  },
            },
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 45 * 2.25,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'M9in',
                position: 60 * 5,
                fade:2,
                render(d, t,a = 75 * 2.25,b = 20 * 2.25) {
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'M9out',
                position: 60 * 10,
                fade:1,
                render(d, t,b = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, b))
                    d.merge(renderPreset(SF, t, b))
                  },
            },
            {
                id: '梨沙崩れ落ちる',
                position: 60 * 11,
                fade:1,
                render(d, t,a = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン10',
        steps: [
            {
                id: 'M10in',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 50 * 2.25) {
                    d.merge(renderPreset(GROUND_2, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 60 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(LED_ON, t, c))
                    d.merge(renderPreset(SF, t, a))
                  },
                extends:[
                    COLOR_USUPINK
                ]
            },
            {
                id: 'M10out1s後',
                position: 60 * 3,
                fade:1,
                render(d, t,a = 80 * 2.25) {
                    d.merge(renderPreset(GROUND_BASE, t, a))
                    d.merge(renderPreset(SF, t, a))
                  },
            },
            {
                id: 'かな誠ハケ後',
                position: 60 * 15,
                fade:1,
                render(d, t,a = 80 * 2.25, b = 20*2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン11',
        steps: [
            {
                id: 'M11in',
                position: 60 * 0,
                fade:1,
                render(d, t,a = 80 * 2.25, b = 20*2.25) {
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                  },
            },
            {
                id: '↓',
                position: 60 * 0,
                render(d, t,a = 30 * 2.25, b = 40 * 2.25,c = 70 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_3B, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a / 1.5)
                    d.merge(renderPreset(LED_ON, t, b))
                    d.merge(renderPreset(SF, t, c))
                  },
                extends:[
                    COLOR_WHITE
                ]
            },
            {
                id: '俺たちの経験',
                position: 60 * 2,
                fade:1,
                render(d, t,a = 30 * 2.25,c = 70 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_3B, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a / 1.5)
                    d.merge(renderPreset(SF, t, c))
                  },
                extends:[
                    COLOR_WHITE,
                    LED_ON
                ]
            },
            {
                id: 'できないことなんてない',
                position: 60 * 4,
                fade:1,
                render(d, t,a = 50 * 2.25,b = 10 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                    d.merge(renderPreset(GROUND_3, t, b))
                  },
                extends:[
                    COLOR_WHITE,
                    LED_ON
                ]
            },
            {
                id: 'M11out',
                position: 60 * 6,
                fade:1,
                render(d, t,a = 80 * 2.25,b = 20 * 2.25,c = 70 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_1, t, a))
                    d.merge(renderPreset(GROUND_2, t, b))
                  },
            },
            {
                id: '江雪殺すなよ',
                position: 60 * 9,
                fade:1,
                render(d, t,a = 50 * 2.25,c = 50 * 2.25) {
                    d.merge(renderPreset(SF, t, c))
                    d.merge(renderPreset(GROUND_BASE, t, a))
                  },
            }
           
        ],
        
    },

    {
        note: 'シーン12',
        steps: [{
            id: 'M12in',
            position: 60 * 0,
            fade:1,
            render(d, t,a = 50 * 2.25,c = 50 * 2.25) {
                d.merge(renderPreset(SF, t, c))
                d.merge(renderPreset(GROUND_BASE, t, a))
              },
        },
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                  },
                extends:[
                    COLOR_ORANGE1
                ]
            },
            {
                id: '皆で奴らを捕まえろ',
                fade:1,
                position: 60 * 1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                  },
            },
            {
                id: 'どんな相手でも（ペアのとこ）',
                position: 60 * 2,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 67.5))
                  },
                extends:[
                    COLOR_RED,
                    LED_ON
                ]
            },
            {
                id: 'M12out',
                position: 60 * 3,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                  },
            },
            {
                id: 'AJハケ後',
                position: 60 * 4,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.set(UNIVERSE, addrs.SUS_1E, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a / 1.5)
                  },
            },
            {
                id: '誠銃声合わせ',
                position: 60 * 8,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.set(UNIVERSE, addrs.SUS_3A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a / 1.5)
                  },
            },
            {
                id: '↓',
                position: 60 * 9,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)
                    d.set(UNIVERSE, addrs.SUS_3C, a)
                  },
            },
            {
                id: '↓',
                position: 60 * 10,
                render(d, t,a = 50 * 2.25) {
                    d.set(UNIVERSE, addrs.SUS_1A, a)                  },
            },
            {
                id: '照明アウト',
                position: 60 * 11,
            }
           
           
        ],
        
    },

    {
        note: 'シーン13',
        steps: [
            {
                id: '江雪、来路in',
                position: 60 * 0,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
            },
            {
                id: 'M13in',
                position: 60 * 5,
                fade:2,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_PURPLE,
                ]
            },
            {
                id: '/あ/なたの本当の優しさは',
                position: 60 * 7,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_RED
                ]
            },
            {
                id: '/お/前になんか何が分かる',
                position: 60 * 8,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_PURPLE
                ]
            },
            {
                id: '/大/事な明日を手に入れると',
                position: 60 * 9,
                fade:1,
                render(d, t,a =101.25) {
                    d.merge(renderPreset(GROUND_BASE, t, 22.5))
                    d.merge(renderPreset(SF, t, 101.25))
                    d.merge(renderPreset(LED_ON, t, 157.5))
                    d.set(UNIVERSE, addrs.SUS_2B, a)
                  },
                extends:[
                    COLOR_REDANDPURPLE
                ]
            }
            
        ],
        
    },

    {
        note: 'シーン14',
        steps: [{
            id: '/かな誠in',
            position: 60 * 0,
            fade:1,
            render(d, t,a =101.25) {
                d.merge(renderPreset(GROUND_BASE, t, 22.5))
                d.merge(renderPreset(SF, t, 101.25))
                d.merge(renderPreset(LED_ON, t, 157.5))
                d.set(UNIVERSE, addrs.SUS_2B, a)
              },
            extends:[
                COLOR_REDANDPURPLE
            ]
        },
            {
                id: '↓',
                position: 60 * 0,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 112.5))
                    d.merge(renderPreset(SF, t, 112.5))
                  },
            },
            {
                id: 'くるみ「２人が助けに」',
                position: 60 * 7,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 157.5))
                    d.merge(renderPreset(SF, t, 157.5))
                  },
            },
            {
                id: 'M14in',
                position: 60 * 10,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_1,
                    LED_ON
                ]
            },
            {
                id: '蒼紫・迅in',
                position: 60 * 11,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_2,
                    LED_ON
                ]
            },
            {
                id: '/流れる/星々が(楓in)',
                position: 60 * 12,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_3,
                    LED_ON
                ]
            },
            {
                id: '/星の下で見た景色/',
                position: 60 * 13,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_4,
                    LED_ON
                ]
            },
            {
                id: '/乗り越えていくたびに/',
                position: 60 * 16,
                fade:3,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
                extends:[
                    COLOR_M14_5,
                    LED_ON
                ]
            },
            {
                id: 'ダンスタイム終わり～歌い始め',
                position: 60 * 18,
                fade:1,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                    d.merge(renderPreset(SF, t, 191.25))
                  },
            },
          
            {
                id: '/願いを叶えてく/',
                position: 60 * 20,
                fade:3,
                render(d, t) {
                    d.merge(renderPreset(GROUND_BASE, t, 191.25))
                  },
                  extends:[
                    SF
                  ]
            }
           
        ],
        
    },

    {
        note: 'キャストハケ後',
        steps: [
            {
                id: '暗転(最終日はこのキューいらない）',
                position: 60 * 0,
            },
            {
                id: '客電',
                fade:1,
                position: 60 * 2,
                extends:[
                    GROUND_BASE,
                    SF
                ]
            }
  
           
        ],
        
    }






    
]