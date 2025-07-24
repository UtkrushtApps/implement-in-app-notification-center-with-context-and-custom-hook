import React, { useState } from "react";
import useNotifications from "./useNotifications.js";

const NotificationBadge = () => {
  const [open, setOpen] = useState(false);
  const { notifications } = useNotifications();
  // Calculation for unread count should be implemented
  const unreadCount = 0;

  return (
    <div className="notification-badge">
      <button onClick={() => setOpen(!open)}>
        Notifications
        {unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
      </button>
      {open && (
        <div className="notification-dropdown">
          {/* NotificationList would be toggled here */}
        </div>
      )}
    </div>
  );
};

export default NotificationBadge;
