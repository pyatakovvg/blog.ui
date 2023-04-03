
import * as consts from "./constants";


const button = {
  font_family: consts.FONT_FAMILY_COMMON,
  border_radius: consts.BORDER_RADIUS_SMALL,
  default: {
    disabled: {
      color: consts.COLOR_GRAY_DARK,
      background: consts.COLOR_SMOKE,
    },
    mode: {
      primary: {
        default: {
          color: consts.COLOR_WHITE,
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
      success: {
        default: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_SUCCESS,
        },
        hover: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_SUCCESS_LIGHT,
        },
        active: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_SUCCESS_DARK,
        },
      },
      danger: {
        default: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_DANGER,
        },
        hover: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_DANGER_LIGHT,
        },
        active: {
          color: consts.COLOR_WHITE,
          background: consts.COLOR_DANGER_DARK,
        },
      },
    },
  },
  context: {
    disabled: {
      color: consts.COLOR_GRAY_DARK,
    },
    mode: {
      primary: {
        default: {
          color: consts.COLOR_PRIMARY,
        },
        hover: {
          color: consts.COLOR_PRIMARY_LIGHT,
        },
        active: {
          color: consts.COLOR_PRIMARY_DARK,
        },
      },
      success: {
        default: {
          color: consts.COLOR_SUCCESS,
        },
        hover: {
          color: consts.COLOR_SUCCESS_LIGHT,
        },
        active: {
          color: consts.COLOR_SUCCESS_DARK,
        },
      },
      danger: {
        default: {
          color: consts.COLOR_DANGER,
        },
        hover: {
          color: consts.COLOR_DANGER_LIGHT,
        },
        active: {
          color: consts.COLOR_DANGER_DARK,
        },
      },
    },
  },
  size: {
    small: {
      font_size: '14px',
      padding: '14px 16px 13px',
      font_weight: consts.FONT_WEIGHT_LIGHT,
    },
    middle: {
      font_size: '16px',
      padding: '18px 30px 17px',
      font_weight: consts.FONT_WEIGHT_BOLD,
    },
    large: {
      font_size: '1.8rem',
      padding: '1.6rem 2.4rem 1.4rem',
      font_weight: consts.FONT_WEIGHT_MEDIUM,
    },
  },
};

export default button;