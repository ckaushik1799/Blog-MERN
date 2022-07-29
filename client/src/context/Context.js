import { useEffect, useReducer } from "react";
import { createContext } from "react";
import Reducer from "./Reducer";

// ******************** intial state ************
const Initial_state = {
  user: null || JSON.parse(localStorage.getItem("user")), // set the initial state according to the user stored in local storage.
  isFetching: false,
  error: false,
};

export const Context = createContext(Initial_state);

// ********************* context provider ********************

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, Initial_state);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user)); // update the local storage user everytime the state.user changes , ie everytime new user loged in, otherwise on every reload user state should be maintained
  }, [state.user]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
