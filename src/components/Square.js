import React from "react";

const Square = props => {
  //(props)is simply the handleClick func being passed from board only invoked when clicked;
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
