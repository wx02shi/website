import { createContext, useContext, useState, useCallback, useRef } from "react";

const AccordionContext = createContext(null);

export const EventContextProvider = ({ children, debounceMs = 150 }) => {
  const [openId, setOpenId] = useState(null);
  const lastClickTime = useRef(0);

  const toggle = useCallback(
    (id) => {
      const now = Date.now();
      if (now - lastClickTime.current < debounceMs) {
        return;
      }
      lastClickTime.current = now;
      setOpenId((current) => (current === id ? null : id));
    },
    [debounceMs]
  );

  const open = useCallback(
    (id) => {
      const now = Date.now();
      if (now - lastClickTime.current < debounceMs) return;
      lastClickTime.current = now;
      setOpenId(id);
    },
    [debounceMs]
  );

  const close = useCallback(() => {
    setOpenId(null);
  }, []);

  const isOpen = useCallback((id) => openId === id, [openId]);

  return (
    <AccordionContext.Provider value={{ openId, toggle, open, close, isOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within EventContextProvider");
  }
  return context;
}
