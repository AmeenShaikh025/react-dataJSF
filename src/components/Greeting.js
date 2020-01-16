import React from "react";

export default function Greeting({ username }) {
  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h2>Greeting from {username}</h2>
    </div>
  );
}
