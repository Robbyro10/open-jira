import { FC, PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({
      type: "UI - Open Sidebar",
    });
  };

  const closeSidemenu = () => {
    dispatch({
      type: "UI - Close Sidebar",
    });
  };

  const startDragging = () => {
    dispatch({
      type: "Ui - Start Dragging",
    });
  };

  const endDragging = () => {
    dispatch({
      type: "Ui - End Dragging",
    });
  };

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: "Ui - Toggle Adding", payload: isAddingEntry });
  };

  return (
    <UIContext.Provider
      value={{
        //*Properties
        ...state,

        //* Methods
        openSidemenu,
        closeSidemenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
