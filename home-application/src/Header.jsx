import React from "react";

const Header = ({app}) => {
  return (
    <div
      style={{
        padding: 5,
        background: "blue",
        color: "white",
        fontSize: 25,
        fontStyle: "italic",
        marginBottom: 10
      }}
    >
      Dream Cars | {app.name}
    </div>
  );
};

export default Header;
