import React from "react";

export function Button1(props) {
  return <button className="assets-btn Buttons-btn">{props.BtnText}</button>;
}
export function Button2(props) {
  return (
    <button className="assets1-btn Buttons-btn">
      {props.BtnText1}
      <div>{props.BtnText2}</div>
    </button>
  );
}
