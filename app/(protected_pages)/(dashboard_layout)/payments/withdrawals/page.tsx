import { Button } from "@/components/Buttons/Buttons";
import { Center } from "@/components/layout/Center";
import { Spacer } from "@/components/layout/Spacer";
import { Stack } from "@/components/layout/Stack";
import React from "react";

import type { Metadata } from "next";
import WithdrawalCard from "@/components/(withdrawals)/WithdrawalCard";

export const metadata: Metadata = {
  title: "Withdrawals",
  description: "",
};

const Page = () => {
  return (
    <Stack className="gap-4">
      <WithdrawalCard />
    </Stack>
  );
};

export default Page;
