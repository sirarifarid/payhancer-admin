"use client";
import { Button } from "@/components/Buttons/Buttons";
import { Center } from "@/components/layout/Center";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { Input } from "@/components/Input/Input";
import { useCookies } from "react-cookie";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in",
  description: "",
};

const Page = () => {
  const [cookies, setCookies] = useCookies(["_sc_adm"]);
  const router = useRouter();
  const [payload, setPayload] = useState({
    user: "",
    password: "",
  });
  const { error, data, mutate } = useMutation({
    mutationFn: () => api.post("/auth/login", payload),
    onSuccess(data, variables, context) {
      setCookies("_sc_adm", data.data.sc_tkn);
      router.replace("/");
    },
  });
  return (
    <section className="bg-gray-900">
      <Center className="px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>

            <Input
              name="user"
              title="Username / E-mail"
              onChange={(e) => {
                setPayload((p) => ({
                  ...p,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
            <Input
              name="password"
              title="Password"
              onChange={(e) => {
                setPayload((p) => ({
                  ...p,
                  [e.target.name]: e.target.value,
                }));
              }}
              type="password"
            />

            <Button className="h-8" fullWidth onClick={() => mutate()}>
              Submit
            </Button>
          </div>
        </div>
      </Center>
    </section>
  );
};

export default Page;
