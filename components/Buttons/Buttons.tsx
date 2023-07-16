"use client";
import React, { FC, useMemo, useState } from "react";
import { ButtonProps } from "react-html-props";
import classnames from "classnames";
export const Button = React.forwardRef<
  any,
  ButtonProps & {
    icon?: any;
    fullWidth?: boolean;
    variant?: "error" | "pending" | "primary" | "success";
  }
>((props, ref) => {
  let {
    icon,
    children,
    className,
    fullWidth,
    onMouseDown,
    onMouseUp,
    variant = "primary",
    ...rest
  } = props;
  const [effect, setEffect] = useState(false);
  const bg = useMemo(() => `bg-${variant} `, [variant]);
  return (
    <button
      {...rest}
      ref={ref}
      className={classnames(
        "inline-flex items-center justify-center px-4 py-1 transition-all rounded text-white",
        fullWidth ? "w-full" : "",

        bg,
        className
      )}
      onMouseDown={(e) => {
        setEffect(true);
        onMouseDown && onMouseDown(e);
      }}
      onMouseUp={(e) => {
        setEffect(false);
        onMouseUp && onMouseUp(e);
      }}
      onMouseLeave={() => {
        effect && setEffect(false);
      }}
    >
      <span
        className={classnames(
          effect ? "scale-[0.85]" : "scale-100",
          "transition-all"
        )}
      >
        {icon}

        {children}
      </span>
    </button>
  );
});

Button.displayName = "Button";
