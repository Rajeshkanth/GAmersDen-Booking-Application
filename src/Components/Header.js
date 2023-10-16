import React, { memo } from "react";

function Header() {
  const header = {
    header: {
      backgroundColor: "#054765",
      height: "3rem",
      padding: ".1rem",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      color: "whitesmoke",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
    h2: {
      margin: "0 0 0 5rem",
    },
  };
  return (
    <>
      <div style={header.header} className="header">
        <h1>
          <span>G</span>amers<span>D</span>en
        </h1>
        <div style={header.flex}>
          <h2>Okkiyampet</h2>
          <h2 style={header.h2}>Contact</h2>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
