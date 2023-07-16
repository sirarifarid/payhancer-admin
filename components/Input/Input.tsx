"use client";

import React, { FC } from "react";
import { InputProps } from "react-html-props";

export const Input = React.forwardRef<any, InputProps>((props, ref) => {
  const { className, placeholder, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <input
        placeholder={placeholder || props.title}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
          className
        }
        id={props.name}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";
