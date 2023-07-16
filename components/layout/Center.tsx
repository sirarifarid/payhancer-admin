import React, { FC } from "react";
import { DivProps } from "react-html-props";

export const Center = React.forwardRef<any, DivProps & { direction?: "col" }>(
  (props, ref) => {
    const { className, direction, ...rest } = props;
    return (
      <div
        className={
          `flex justify-center items-center ${
            direction === "col" ? "flex-col" : "flex-row"
          } ` + (className || "")
        }
        {...rest}
        ref={ref}
      />
    );
  }
);

Center.displayName = "Center";
