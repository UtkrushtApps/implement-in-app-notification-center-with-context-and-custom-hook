import React, { createContext, useReducer } from "react";

const NotificationContext = createContext();

const initialState = {
  notifications: []
};

function notificationReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);
  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
