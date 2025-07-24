import React from "react";
import NotificationBadge from "./notification/NotificationBadge.jsx";
import NotificationList from "./notification/NotificationList.jsx";

const App = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Project Dashboard</h1>
        <NotificationBadge />
      </header>
      <main className="main-content">
        <NotificationList />
        {/* Additional main dashboard content here */}
      </main>
    </div>
  );
};

export default App;
