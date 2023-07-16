import React from "react";
import { Center } from "../layout/Center";
import { Button } from "../Buttons/Buttons";

const WithdrawalCard = () => {
  return (
    <div className="grid grid-cols-8 grid-flow-row-dense gap-4 bg-white rounded-lg p-6">
      <Center direction="col" className="gap-2">
        <p className="text-body2">
          <b>Name</b>
        </p>
        <p className="text-body1">Arif arid</p>
      </Center>
      <Center direction="col" className="gap-2">
        <p className="text-body2">
          <b>Amount</b>
        </p>
        <p className="text-body1">$ 102</p>
      </Center>
      <Center direction="col" className="gap-2 col-span-2">
        <p className="text-body2 ">
          <b>Withdrawal ID</b>
        </p>
        <p className="text-body1">01SDJDFSJDHFDJFHG</p>
      </Center>
      <Center direction="col" className="gap-2  col-span-2">
        <p className="text-body2">
          <b>Paypal</b>
        </p>
        <p className="text-body1">arifmp40@gmail.com</p>
      </Center>
      <Center className="col-span-2 gap-4">
        <Button variant="error" className="h-8">
          Failed
        </Button>
        <Button className="h-8">Completed</Button>
      </Center>
    </div>
  );
};

export default WithdrawalCard;
