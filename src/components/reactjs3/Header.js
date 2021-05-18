import React from "react";

function Header({ children,name }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "gray",
          padding: "30px",
          alignItems: "center",
        }}
      >
        <label style={{ fontSize: "40px" }}>{name}</label>
        <img
          style={{ height: "40px", width: "40px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png"
          alt="icon"
        ></img>
      </div>
    </div>
  );
}

export default Header;
