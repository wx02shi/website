import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  const [eventOpen, setEventOpen] = useState(null);

  return (
    <EventContext.Provider value={{ eventOpen, setEventOpen }}>
      {children}
    </EventContext.Provider>
  );
};
