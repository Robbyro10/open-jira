import { createContext } from "react";

interface ContextProps {
  //* Properties
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //* Methods
  openSidemenu: () => void;
  closeSidemenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
