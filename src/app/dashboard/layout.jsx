import React from "react";
import Sidebar from "./components/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed h-screen bg-white shadow-lg">
        <Sidebar />
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
};

export default layout;
