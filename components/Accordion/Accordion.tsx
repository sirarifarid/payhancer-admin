import {
  AccordionContentProps,
  AccordionTriggerProps,
  Content,
  Header,
  Trigger,
} from "@radix-ui/react-accordion";
import React from "react";
import classNames from "classnames";

export const AccordionTrigger = React.forwardRef<any, AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={ref}
    >
      {children}
    </Trigger>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<any, AccordionContentProps>(
  ({ children, className, ...props }, ref) => (
    <Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={ref}
    >
      {children}
    </Content>
  )
);
AccordionContent.displayName = "AccordionContent";
