import React from "react";

const Content = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-92px)] max-h-[calc(100vh-92px)] border-[1px] shadow-md rounded-sm p-[10px] overflow-y-auto">
      {children}
    </div>
  );
};

export default Content;
