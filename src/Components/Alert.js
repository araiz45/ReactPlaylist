import React from "react";

export default function Alert(props) {
  const capitailize = () => {
    let newType = props.alert.type;
    let newTyping = newType[0].toUpperCase() + newType.slice(1).toLowerCase();
    return newTyping;
  };
  return (
    <div style={{height: '50px'}}>
      {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitailize()}</strong> : {props.alert.msg}
      </div>}
    </div>
  );
}
