import React, { FC } from "react";
import { DivProps } from "react-html-props";

export const Spacer = React.forwardRef<any, DivProps>((props, ref) => {
  const { className, ...rest } = props;
  return <div className={"flex-1 " + (className || "")} {...rest} ref={ref} />;
});

Spacer.displayName = "Spacer";
