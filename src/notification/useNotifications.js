import { useContext } from "react";
import { NotificationContext } from "./NotificationContext.jsx";

const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  const { state, dispatch } = context;
  // provide stub for add, markAsRead, dismiss
  return {
    notifications: state.notifications,
    add: () => {},
    markAsRead: () => {},
    dismiss: () => {}
  };
};

export default useNotifications;
