
import * as consts from './constants';


export default {
  transition_duration: consts.TRANSITION_DURATION,
  background_color_level_1: consts.COLOR_SUCCESS,
  button: {
    border_radius: consts.BORDER_RADIUS_SMALL,
    mode: {
      primary: {
        default: {
          color: consts.COLOR_BLACK,
          background: consts.COLOR_PRIMARY,
        },
        hover: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_PRIMARY_LIGHT,
        },
        active: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_PRIMARY_DARK,
        },
      },
    },
    size: {
      small: {
        font_size: '11px',
        padding: '8px 12px',
        font_weight: consts.FONT_WEIGHT_LIGHT,
      },
      middle: {
        font_size: '13px',
        padding: '10px 14px',
        font_weight: consts.FONT_WEIGHT_LIGHT,
      },
      large: {
        font_size: '14px',
        padding: '12px 14px',
        font_weight: consts.FONT_WEIGHT_MEDIUM,
      },
    }
  }
} as any;
