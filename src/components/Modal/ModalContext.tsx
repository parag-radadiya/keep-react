import type { ReactNode } from "react";
import { createContext, useContext } from "react";

type ModalContext = {
  icon?: ReactNode;
  onClose?: () => void;
};

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export function useModalContext(): ModalContext {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext should be used within the ModalContext provider!"
    );
  }

  return context;
}
