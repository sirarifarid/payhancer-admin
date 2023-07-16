"use client";
import {
  AccordionContent,
  AccordionTrigger,
} from "@/components/Accordion/Accordion";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";

const Page = () => {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger className="w-full bg-white p-4 flex flex-col gap-2 items-start">
          <p className="text-body2">
            <b>Subject: Hello fuck you</b>
          </p>
          <p>
            Type: <b>Arif arid</b>
          </p>
          <p>
            Name: <b>Arif arid</b>
          </p>
          <p>
            User id: <b>Arif arid</b>
          </p>
          <p>
            Withdrawal ID: <b>Arif arid</b>
          </p>
          <p>Message: Arif arid</p>
        </AccordionTrigger>
        <AccordionContent className="p-4 bg-opacity-40 bg-white flex items-center justify-center gap-4"></AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Page;
