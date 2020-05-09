import React from "react";

export const Loading = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Loading.defaultProps ={
message: "Loading ..."
};