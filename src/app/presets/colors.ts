import { Preset } from '.'
import { UNIVERSE as U, addrs, } from '../consts'

export const   
COLOR_ORANGE = 'ORANGE',
COLOR_ORANGE1 = 'ORANGE1',
COLOR_BLUEPURPLE = 'bluepurple',
COLOR_RED = 'red',
COLOR_ORANGEWHITE = 'orangeandwhite'





// COLOR_WHITE = 'color.white',
// COLOR_RED = 'color.red',
// COLOR_BLUE = 'color.blue',
// COLOR_GREEN = 'color.green',
// COLOR_PURPLE = 'color.purple',
// COLOR_PINK = 'color.pink',
// COLOR_YELLOW = 'color.yellow',
// COLOR_ORANGE = 'color.orange',
// COLOR_CYAN = 'color.cyan',
// COLOR_CHASE_ROBOT = 'color.chase.robot'
// COLOR_WHITE_MH = 'color.white.mh'


export const colors: Preset[] = [
{
    id: COLOR_ORANGE,
    render(d, _,a = 243, b = 154, c =56) {
      d.set(U, addrs.LED_LF_R, a)
      d.set(U, addrs.LED_LF_G, b)
      d.set(U, addrs.LED_LF_B, c)
      d.set(U, addrs.LED_RF_R, a)
      d.set(U, addrs.LED_RF_G, b)
      d.set(U, addrs.LED_RF_B, c)
      d.set(U, addrs.LED_LB_R, a)
      d.set(U, addrs.LED_LB_G, b)
      d.set(U, addrs.LED_LB_B, c)
      d.set(U, addrs.LED_RB_R, a)
      d.set(U, addrs.LED_RB_G, b)
      d.set(U, addrs.LED_RB_B, c)
      
    },
  },
  {
    id: COLOR_ORANGE1,
    render(d, _,a = 237, b = 126, c =0) {
      d.set(U, addrs.LED_LF_R, a)
      d.set(U, addrs.LED_LF_G, b)
      d.set(U, addrs.LED_LF_B, c)
      d.set(U, addrs.LED_RF_R, a)
      d.set(U, addrs.LED_RF_G, b)
      d.set(U, addrs.LED_RF_B, c)
      d.set(U, addrs.LED_LB_R, a)
      d.set(U, addrs.LED_LB_G, b)
      d.set(U, addrs.LED_LB_B, c)
      d.set(U, addrs.LED_RB_R, a)
      d.set(U, addrs.LED_RB_G, b)
      d.set(U, addrs.LED_RB_B, c)
      
    },
  },
  {
    id: COLOR_BLUEPURPLE,
    render(d, _,a = 127, b = 255) {
      d.set(U, addrs.LED_LF_R, a)
      d.set(U, addrs.LED_LF_B, b)
      d.set(U, addrs.LED_RF_R, a) 
      d.set(U, addrs.LED_RF_B, b)
      d.set(U, addrs.LED_LB_R, a) 
      d.set(U, addrs.LED_LB_B, b)
      d.set(U, addrs.LED_RB_R, a)  
      d.set(U, addrs.LED_RB_B, b)
      
    },
  },
  {
    id: COLOR_RED,
    render(d, _,a = 255) {
      d.set(U, addrs.LED_LF_R, a)
      d.set(U, addrs.LED_RF_R, a)
      d.set(U, addrs.LED_LB_R, a)
      d.set(U, addrs.LED_RB_R, a)
    },
  },
  {
    id: COLOR_ORANGEWHITE,
    render(d, _,a = 243, b = 154, c =56 ,e=255) {
      d.set(U, addrs.LED_LF_R, a)
      d.set(U, addrs.LED_LF_G, b)
      d.set(U, addrs.LED_LF_B, c)
      d.set(U, addrs.LED_RF_R, a)
      d.set(U, addrs.LED_RF_G, b)
      d.set(U, addrs.LED_RF_B, c)
      // d.set(U, addrs.LED_LB_R, e)
      // d.set(U, addrs.LED_LB_G, e)
      // d.set(U, addrs.LED_LB_B, e)
      // d.set(U, addrs.LED_RB_R, e)
      // d.set(U, addrs.LED_RB_G, e)
      // d.set(U, addrs.LED_RB_B, e)
      
    },
  },
  // {
  //   id: COLOR_WHITE_MH,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_W)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_W)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_W)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_W)
  //   },
  // },
  // {
  //   id: COLOR_WHITE,
  //   extends: [COLOR_WHITE_MH],
  //   render(d) {
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_RED,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_R)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_R)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //   },
  // },
  // {
  //   id: COLOR_BLUE,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_GREEN,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_G)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_G)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_G)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_G)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //   },
  // },
  // {
  //   id: COLOR_PURPLE,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PURPLE)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PURPLE)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PURPLE)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PURPLE)
  //     d.set(U, addrs.LED_1_R, 200)
  //     d.set(U, addrs.LED_2_R, 200)
  //     d.set(U, addrs.LED_3_R, 200)
  //     d.set(U, addrs.LED_4_R, 200)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_PINK,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_PINK)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_PINK)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_PINK)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_PINK)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 127)
  //     d.set(U, addrs.LED_2_G, 127)
  //     d.set(U, addrs.LED_3_G, 127)
  //     d.set(U, addrs.LED_4_G, 127)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //   },
  // },
  // {
  //   id: COLOR_YELLOW,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_Y)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_Y)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_Y)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_Y)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //   },
  // },
  // {
  //   id: COLOR_ORANGE,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_R)
  //     d.set(U, addrs.MARTIN_L_COLOR_2, vals.MARTIN_COLOR2_Y)
  //     d.set(U, addrs.MARTIN_R_COLOR_2, vals.MARTIN_COLOR2_Y)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_A)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_A)
  //     d.set(U, addrs.LED_1_R, 255)
  //     d.set(U, addrs.LED_2_R, 255)
  //     d.set(U, addrs.LED_3_R, 255)
  //     d.set(U, addrs.LED_4_R, 255)
  //     d.set(U, addrs.LED_1_G, 127)
  //     d.set(U, addrs.LED_2_G, 127)
  //     d.set(U, addrs.LED_3_G, 127)
  //     d.set(U, addrs.LED_4_G, 127)
  //   },
  // },
  // {
  //   id: COLOR_CYAN,
  //   render(d) {
  //     d.set(U, addrs.MARTIN_L_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.MARTIN_R_COLOR_1, vals.MARTIN_COLOR_B)
  //     d.set(U, addrs.GT15_L_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.GT15_R_COLOR, vals.GT15_COLOR_B)
  //     d.set(U, addrs.LED_1_B, 255)
  //     d.set(U, addrs.LED_2_B, 255)
  //     d.set(U, addrs.LED_3_B, 255)
  //     d.set(U, addrs.LED_4_B, 255)
  //     d.set(U, addrs.LED_1_G, 255)
  //     d.set(U, addrs.LED_2_G, 255)
  //     d.set(U, addrs.LED_3_G, 255)
  //     d.set(U, addrs.LED_4_G, 255)
  //   },
  // },
  //   {
  //     id: COLOR_CHASE_ROBOT,
  // render(d, t, n = 1) {

  //   const nt = (o: number) => (((t * n) / 2 + o) % 4 < 1 ? 255 : 0)
  //       d.set(U, addrs.LED_LF_R, nt(0 / 4))
  //       d.set(U, addrs.LED_RF_R, 0)
  //       d.set(U, addrs.LED_LR_R, 0)
  //       d.set(U, addrs.LED_RR_R, 0)
  //       d.set(U, addrs.LED_LF_G, 0)
  //       d.set(U, addrs.LED_RF_G, 0)
  //       d.set(U, addrs.LED_LR_G, 0)
  //       d.set(U, addrs.LED_RR_G, 0)
  //       d.set(U, addrs.LED_LF_B, 0)
  //       d.set(U, addrs.LED_RF_B, 0)
  //       d.set(U, addrs.LED_LR_B, 0)
  //       d.set(U, addrs.LED_RR_B, 0)
  //     },
  // },
]
