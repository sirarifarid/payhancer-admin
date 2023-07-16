import React, { FC } from "react";
import { DivProps } from "react-html-props";

export const Stack = React.forwardRef<any, DivProps & { direction?: "row" }>(
  (props, ref) => {
    const { className, direction, ...rest } = props;
    return (
      <div
        className={
          `flex ${direction === "row" ? "flex-row" : "flex-col"} ` +
          (className || "")
        }
        {...rest}
        ref={ref}
      />
    );
  }
);

Stack.displayName = "Stack";
