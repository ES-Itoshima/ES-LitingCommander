import { Sequence } from '.'
import { COLOR_BLUEPURPLE_D, COLOR_BLUEPURPLE_O, COLOR_BLUE_D, COLOR_BLUE_O, COLOR_GREENYELLOW_D, COLOR_GREENYELLOW_O, COLOR_GREEN_D, COLOR_GREEN_O, COLOR_LIGHTBLUE_D, COLOR_LIGHTBLUE_O, COLOR_ORANGE_D, COLOR_ORANGE_O, COLOR_PINK_D, COLOR_PINK_O, COLOR_REDPURPLE_D, COLOR_REDPURPLE_O, COLOR_REDYELLOW_D, COLOR_REDYELLOW_O,  COLOR_RED_D, COLOR_RED_O, COLOR_WHITE_D, COLOR_WHITE_O, COLOR_YELLOWGREEN_D, COLOR_YELLOWGREEN_O } from '../presets/colors'
import { LED_20_D, LED_30_D, LED_30_O, LED_50_D, LED_60_D, LED_60_O, LED_70_D, LED_70_O, LED_75_D, LED_75_O, LED_80_D, LED_80_O, LED_90_D, LED_90_O, LED_ON_D, LED_ON_O } from '../presets/led'


export const first: Sequence[] = [
    {
        note: 'グッドニュース',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: '魔法使いと私',
        steps: [
            {
                id: '「ああ、ミス・エルファバ！/」',
                position: 60 * 0,
                fade: 3.5,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_WHITE_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「受け取るわ 贈り物/」',
                position: 60 * 2,
                fade: 3.41,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_GREEN_O,
                    COLOR_GREEN_D
                ]
            },
            {
                id: '「自分の力 信じるわ/」～「彼は言うのよ/」',
                position: 60 * 4,
                fade: 4.5,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_GREENYELLOW_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '「生まれ変わる 私が/」',
                position: 60 * 6,
                fade: 4.0,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O
                ]
            },
            {
                id: '「その日が/ 来た」',
                position: 60 * 7,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_GREEN_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: 'うそつきは魔法の始まり',
        steps: [
            {
                id: '曲in',
                position: 60 * 0,
            },
            {
                id: '指パッチンSE',
                position: 60 * 0 + 30,//10
                extends:[
                    COLOR_GREEN_O,
                    COLOR_GREEN_D,
                    LED_ON_D,
                    LED_ON_O,
                ]
            },
            {
                id: 'もういいだろう 真実はこんなもんさ/',
                position: 60 * 2 + 30,//40
            },
            {
                id: 'いいえまばゆい輝き放つオズの魔法使い/',
                position: 60 * 3,
                extends:[
                    COLOR_GREEN_O,
                    COLOR_GREEN_D,
                    LED_ON_D,
                    LED_ON_O,
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 8,
                fade:3
            },
        ],
        
    },
    {
        note: '素敵な友達',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'ALL ASK OF YOU',
        steps: [
            {
                id: '曲In',
                fade: 4,
                position: 60 * 0,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_BLUEPURPLE_D,
                    COLOR_REDYELLOW_O
                ]
            },
        ],
        
    },
    {
        note: '終演MC',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
                fade:3
            },
        ],
        
    },
    {
        note: '二公演目Brand New Days',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'あなたを失いたくない',
        steps: [
            {
                id: '蛍光灯OUT',
                fade:2.3,
                position: 60 * 0,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_BLUEPURPLE_D,
                    COLOR_BLUEPURPLE_O
                ]
            },
        ],
        
    },
    {
        note: '曲間MC',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
                fade:3
            },
        ],
        
    },
    {
        note: 'Hail Holy Queen,ダンスはやめられない,時が来た',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: '第三回公演、Be Our Guest,生まれて初めて',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'リメンバーミー',
        steps: [
            {
                id: '曲in//',
                position: 60 * 0,
                fade: 1.35,
                extends: [
                    COLOR_LIGHTBLUE_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_60_O
                ]
            },
            {
                id: '二回目リ//メンバー・ミー遠く聞こえる',
                position: 60 * 1,
                fade: 1.35,
                extends: [
                    COLOR_LIGHTBLUE_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_90_O
                ]
            },
            {
                id: '三回目「/リメ/ンバー・ミー 忘れはしない」',
                position: 60 * 3,
                fade: 1.35,
                extends: [
                    COLOR_GREENYELLOW_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_60_O
                ]
            },
            {
                id: '「信じ続けようリメンバー・ミー」三小節と二拍から十泊で',
                position: 60 * 7,
                fade: 7.06,
                extends: [
                    COLOR_ORANGE_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_80_O
                ]
            },
            {
                id: '曲間mc',
                position: 60 * 10,
                fade:3
            },
            
        ],
        
    },
    {
        note: 'A Whole New World',
        steps: [
            {
                id: '曲In',
                position: 60 * 0,
                fade:3.5,
                extends:[
                    COLOR_REDYELLOW_D,
                    COLOR_BLUEPURPLE_O,
                    LED_60_O,
                    LED_50_D
                ]
            },
            {
                id: 'アラジン「/見せてあげる/」',
                position: 60 * 1,
                fade:2.65,
                extends:[
                    COLOR_REDYELLOW_D,
                    LED_50_D,
                    COLOR_REDYELLOW_O,
                    LED_80_O
                ]
            },
            {
                id: 'アラジン「/自由さ/」',
                position: 60 * 2,
                fade:3.0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_ON_D,
                    COLOR_REDPURPLE_O,
                    LED_70_O
                ]
            },
            {
                id: 'ジャスミン「/自由よ/」',
                position: 60 * 3,
                fade:3.0,
                extends:[
                    COLOR_REDPURPLE_D,
                    LED_70_D,
                    COLOR_BLUEPURPLE_O,
                    LED_ON_O
                ]
            },
            {
                id: 'アラジン「/今君と二人で/」',
                position: 60 * 4,
                fade:3.85,
                extends:[
                    COLOR_WHITE_D,
                    LED_ON_D,
                    COLOR_REDYELLOW_O,
                    LED_80_O
                ]
            },
            {
                id: 'アラジン(ジャスミン)「/自由さ/(何を見ても)」',
                position: 60 * 5,
                fade:3.0,
                extends:[
                    COLOR_REDYELLOW_D,
                    LED_80_D,
                    COLOR_BLUEPURPLE_O,
                    LED_70_O
                ]
            },
            {
                id: '二人「夢のようなこの時いつまでも二人で」 後8×2で',
                position: 60 * 6,
                fade:7.61,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_70_D,
                    COLOR_BLUEPURPLE_O,
                    LED_70_O
                ]
            },
            {
                id: '間奏後ジャスミン(アラジン)「/自由よ/（目を開いて）」',
                position: 60 * 7,
                fade:3.0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_70_D,
                    COLOR_BLUEPURPLE_O,
                    LED_ON_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: '不幸せな魂',
        steps: [
            {
                id: '曲in',
                position: 60 * 0,
                fade:3,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '1サビ「/迷える人たちにの」',
                position: 60 * 1,
                fade:2.9,
                extends:[
                    COLOR_LIGHTBLUE_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '１サビ直後「/お代払わ/ず踏み倒す」',
                position: 60 * 2,
                fade:1.7,
                extends:[
                    COLOR_GREEN_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「気の毒な子には//」後の8拍',
                position: 60 * 3,
                fade:3,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_LIGHTBLUE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '２サビ「/迷える/小魚」',
                position: 60 * 4,
                fade:2.73,
                extends:[
                    COLOR_BLUE_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '終演MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: '第四回公演トゥモロー',
        steps: [
            {
                id: '曲In',
                position: 60 * 0,
                fade:3.4,
                extends:[
                    COLOR_ORANGE_D,
                    COLOR_ORANGE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「胸張って/うの/」',
                position: 60 * 1,
                fade:2.7,
                extends:[
                    COLOR_GREENYELLOW_D,
                    COLOR_GREENYELLOW_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「明日は幸せ四泊」',
                position: 60 * 2,
                fade:2.1,
                extends:[
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「/さみしくて/憂鬱な日には',
                position: 60 * 3,
                fade:1,
                extends:[
                    COLOR_GREENYELLOW_D,
                    COLOR_GREENYELLOW_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「ラスさび明日は幸//せ後奏in',
                position: 60 * 4 ,
                fade:2.53,
                extends:[
                    COLOR_REDYELLOW_O,
                    COLOR_REDYELLOW_D,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: 'Free Free,時が来た',
        steps: [
            {
                id: 'ニュートラル',
                position: 60 * 0,
            },
        ],
        
    },
    {
        note: 'マキャビティ',
        steps: [
            {
                id: '曲In',
                position: 60 * 0,
                fade:3,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「殺しの現場に/マキャヴィティノットゼア」',
                position: 60 * 1,
                extends:[
                    COLOR_REDPURPLE_D,
                    COLOR_RED_O,
                    LED_75_D,
                    LED_75_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 1 + 2.2,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「犯罪の現場に/マキャヴィティノットゼア」',
                position: 60 * 2,
                extends:[
                    COLOR_REDPURPLE_D,
                    COLOR_RED_O,
                    LED_75_D,
                    LED_75_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 2 + 2.2,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「だが殺されたとき/マキャヴィティノットゼア」',
                position: 60 * 4,
                extends:[
                    COLOR_REDPURPLE_D,
                    COLOR_RED_O,
                    LED_75_D,
                    LED_75_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 4+2.2,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「次は倉庫だ/」',
                position: 60 * 5,
                extends:[
                    COLOR_REDPURPLE_D,
                    COLOR_WHITE_O,
                    LED_30_D,
                    LED_ON_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 5+2.2,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「犬が一匹/」',
                position: 60 * 6,
                extends:[
                    COLOR_RED_D,
                    COLOR_RED_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '「↓おさな！！！」',
                position: 60 * 6 +2.65,
                fade:1.58,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「駆けつけてみると/マキャヴィティノットゼア」',
                position: 60 * 7,
                extends:[
                    COLOR_REDPURPLE_D,
                    COLOR_RED_O,
                    LED_75_D,
                    LED_75_O
                ]
            },
            {
                id: '「↓」',
                position: 60 * 7 + 2.9,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「事件の現場には/マキャヴィティノットゼア」',
                position: 60 * 8,
                extends:[
                    COLOR_REDPURPLE_D,
                    COLOR_RED_O,
                    LED_75_D,
                    LED_75_O
                ]
            },
            {
                id: '「↓」',
                position: 60 *  8 + 2.2,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_REDPURPLE_D,
                    LED_30_D,
                    LED_30_O
                ]
            },
            {
                id: '「ナポレオン of プライム/」',
                position: 60 * 9,
                extends:[
                    COLOR_REDPURPLE_O,
                    LED_30_O
                ]
            },
            {
                id: '2人「ナポレオン of プライム/」後の間奏最後のッタタタタタッタタタタタ ジャン 2人 「マ/キャヴィティ」',
                position: 60 * 9+0.1,
                fade:5.9,
                extends:[
                    COLOR_REDPURPLE_O,
                    COLOR_RED_D,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: '2人「殺しの現場にマキャヴィティ ノット ゼア/」',
                position: 60 * 10,
            },
        ],
        
    },
    {
        note: '私が生きてこなかった人生',
        steps: [
            {
                id: '曲In前',
                fade:3.4,
                position: 60 * 0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    COLOR_WHITE_O,
                    LED_70_D,
                    LED_80_O
                ]
            },
            {
                id: '「口に出さない心を/抱えた/ままで」',
                fade:1,
                position: 60 * 2,
                extends:[
                    COLOR_WHITE_D,
                    COLOR_WHITE_O,
                    LED_20_D,
                    LED_90_O
                ]
            },
            {
                id: '「私のつまらない人生」の後の4小節',
                fade:2.8,
                position: 60 * 3,
                extends:[
                    COLOR_WHITE_O,
                    LED_90_O
                ]
            },
            {
                id: '「空っぽな人生/でも/あなたが気づかせてくれた」',
                fade:1.8,
                position: 60 * 4,
                extends:[
                    COLOR_WHITE_O,
                    COLOR_WHITE_D,
                    LED_50_D,
                    LED_90_O
                ]
            },
            {
                id: '「しらないふりはもうできない助けて」の後の4小節で',
                fade:2.8,
                position: 60 * 5,
                extends:[
                    COLOR_WHITE_O,
                    LED_75_O
                ]
            },
            {
                id: '「例え傷ついても/扉は目の前で/私を待ってる」',
                fade:3.5,
                position: 60 * 6,
                extends:[
                    COLOR_WHITE_O,
                    COLOR_REDYELLOW_D,
                    LED_80_O,
                    LED_80_D
                ]
            },
            {
                id: '終演MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: 'A Whole New World',
        steps: [
            {
                id: '曲In',
                position: 60 * 0,
                fade:3.5,
                extends:[
                    COLOR_REDYELLOW_D,
                    COLOR_BLUEPURPLE_O,
                    LED_60_O,
                    LED_50_D
                ]
            },
            {
                id: 'アラジン「/見せてあげる/」',
                position: 60 * 1,
                fade:2.65,
                extends:[
                    COLOR_REDYELLOW_D,
                    LED_50_D,
                    COLOR_REDYELLOW_O,
                    LED_80_O
                ]
            },
            {
                id: 'アラジン「/自由さ/」',
                position: 60 * 2,
                fade:3.0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_ON_D,
                    COLOR_REDPURPLE_O,
                    LED_70_O
                ]
            },
            {
                id: 'ジャスミン「/自由よ/」',
                position: 60 * 3,
                fade:3.0,
                extends:[
                    COLOR_REDPURPLE_D,
                    LED_70_D,
                    COLOR_BLUEPURPLE_O,
                    LED_ON_O
                ]
            },
            {
                id: 'アラジン「/今君と二人で/」',
                position: 60 * 4,
                fade:3.85,
                extends:[
                    COLOR_WHITE_D,
                    LED_ON_D,
                    COLOR_REDYELLOW_O,
                    LED_80_O
                ]
            },
            {
                id: 'アラジン(ジャスミン)「/自由さ/(何を見ても)」',
                position: 60 * 5,
                fade:3.0,
                extends:[
                    COLOR_REDYELLOW_D,
                    LED_80_D,
                    COLOR_BLUEPURPLE_O,
                    LED_70_O
                ]
            },
            {
                id: '二人「夢のようなこの時いつまでも二人で」 後8×2で',
                position: 60 * 6,
                fade:7.61,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_70_D,
                    COLOR_BLUEPURPLE_O,
                    LED_70_O
                ]
            },
            {
                id: '間奏後ジャスミン(アラジン)「/自由よ/（目を開いて）」',
                position: 60 * 7,
                fade:3.0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_70_D,
                    COLOR_BLUEPURPLE_O,
                    LED_ON_O
                ]
            },
            {
                id: '曲間MC',
                position: 60 * 10,
                fade:3
            },
        ],
        
    },
    {
        note: 'Space Between',
        steps: [
            {
                id: '前の曲',
                position: 60 * 0,
                extends:[
                    COLOR_BLUEPURPLE_D,
                    LED_ON_D,
                    COLOR_BLUEPURPLE_O,
                    LED_ON_O
                ]
            },
            {
                id: "謳いだし「/I/ didn't know what you」",
                position: 60 * 1,
                fade:1.8,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_BLUE_O,
                    COLOR_BLUE_D
                ]
            },
            {
                id: "二人目「/I/ didn't wanna let you down」",
                position: 60 * 2,
                fade:1.8,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_PINK_D,
                    COLOR_PINK_O
                ]
            },
            {
                id: "曲調変わってすぐ「I really had to go」の前、指パッチンの時",
                position: 60 * 3,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_WHITE_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: "曲調変化から一泊「/there are no words 」～「you can find~」",
                position: 60 * 4,
                cycle:60/77,
                extends:[
                    COLOR_PINK_D,
                    COLOR_BLUE_O,
                    LED_ON_D,
                    LED_ON_O
                ]
            },
            {
                id: "yeahで落ちた後「/you can find me in the space between」",
                position: 60 * 5,
                extends: [
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_WHITE_O,
                    COLOR_WHITE_D
                ]
            },
            {
                id: "↓",
                position: 60 * 5 +1.65,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_PINK_D,
                    COLOR_BLUE_O
                ]
            },
            {
                id: "曲間MC",
                position: 60 * 10,
                fade:3
            },
        ], 
    },
    {
        note: 'this is me',
        steps: [
            {
                id: '曲In',
                position: 60 * 0,
                fade:2.5,
                extends:[
                    LED_60_D,
                    LED_ON_O,
                    COLOR_LIGHTBLUE_O,
                    COLOR_BLUEPURPLE_D
                ]
            },
            {
                id: '/But/ I won`t let them break me down ',
                position: 60 * 2,
                fade: 4.5,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_LIGHTBLUE_O,
                    COLOR_BLUEPURPLE_D
                ]
            },
            {
                id: 'for your grourious /次の小説頭',
                position: 60 * 3,
                fade:2.61,
                extends:[
                    LED_60_D,
                    LED_60_O,
                    COLOR_ORANGE_D,
                    COLOR_ORANGE_O
                ]
            },
            {
                id: '「(/this  is me) Look out cause here I come 」の一拍前のジャン',
                position: 60 * 4,
                extends:[
                    LED_90_D,
                    LED_90_O,
                    COLOR_YELLOWGREEN_D,
                    COLOR_YELLOWGREEN_O
                ]
            },
            {
                id: '/Oh-oh-oh-oh Oh-oh/-oh-oh （最初の）',
                position: 60 * 5,
                fade:3.2,
                extends:[
                    LED_80_D,
                    LED_80_O,
                    COLOR_ORANGE_D,
                    COLOR_ORANGE_O
                ]
            },
            {
                id: '一泊前/When/ the shapest words wanna cut me down ',
                position: 60 * 8,
                extends:[
                    LED_ON_D,
                    LED_ON_O,
                    COLOR_LIGHTBLUE_D,
                    COLOR_LIGHTBLUE_O
                ]
            },
            {
                id: 'this is me の後の靴の音',
                position: 60 * 9,
            },
            {
                id: '↓',
                position: 60 * 9 +1.00,
                extends:[
                    LED_70_D,
                    LED_70_O,
                    COLOR_WHITE_D,
                    COLOR_WHITE_O
                ]
            },
            {
                id: '曲間MC,ダンスはやめられない、ワンデイモア',
                position: 60 * 15,
                fade:3
            },
        ],
        
    },
]
