export type StateProps = {
  lightMode: boolean;
};

export type ActionsMap = {
  DARK: StateProps;
  LIGHT: StateProps;
  TOGGLE: StateProps;
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
  };
}[keyof ActionsMap];

const LightModeReducer = (state: StateProps, action: Actions) => {
  switch (action.type) {
    case 'DARK': {
      return {
        lightMode: false,
      };
    }
    case 'LIGHT': {
      return {
        lightMode: true,
      };
    }
    case 'TOGGLE': {
      return {
        lightMode: !state.lightMode,
      };
    }

    default:
      return state;
  }
};

export default LightModeReducer;
