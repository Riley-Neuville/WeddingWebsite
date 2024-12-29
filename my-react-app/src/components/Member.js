import React, { useState } from "react";
import "../Member.css";

function Member(props) {
  return (
    <>
      <div className="member">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default Member;
