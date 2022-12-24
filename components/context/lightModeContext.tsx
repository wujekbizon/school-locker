import { createContext, useReducer, Dispatch } from 'react';
import LightModeReducer, {
  Actions,
  ActionsMap,
  StateProps,
} from './lightModeReducer';

type Props = {
  children: React.ReactNode;
};

const INITIAL_STATE = {
  lightMode: false,
};

export const LightModeContext = createContext<{
  state: StateProps;
  dispatch: Dispatch<Actions>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const LightModeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(LightModeReducer, INITIAL_STATE);

  return (
    <LightModeContext.Provider value={{ state, dispatch }}>
      {children}
    </LightModeContext.Provider>
  );
};
