"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { Metadata } from "next";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/Buttons/Buttons";
import { Center } from "@/components/layout/Center";
import { useAppState } from "@/hooks/useAppState";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { fakerEN_CA as faker } from "@faker-js/faker";
const Page = () => {
  const initial = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "@payhancer.com",
      username: "",
    }),
    []
  );
  const [payload, setPayload] = useState(initial);
  const { mutate, data, error } = useMutation<any, any>({
    mutationFn: () => api.post("/users/create", payload),
    onSuccess(data, variables, context) {
      setPayload(initial);
    },
  });
  useQuery({
    queryKey: ["fake-accounts"],
    queryFn: () => api.post("/users/get-fake-user"),
    retry: false,
  });
  const [fake_user] = useAppState("fake-accounts");

  return (
    <Stack className="gap-4">
      <h5>Create fake user</h5>
      <Center className="gap-4">
        <div className="flex-1">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <input
            className="block flex-1 bg-gray-200 w-fill text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={payload.firstName}
            name="firstName"
            onChange={(e) =>
              setPayload((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
            placeholder="John"
          />
        </div>
        <button
          onClick={() => {
            const a = faker.person.firstName();
            setPayload((p) => ({
              ...p,
              firstName: a,
              email: (a + "_" + p.lastName + "@payhancer.com").toLowerCase(),
              username: (a + "_" + p.lastName).toLowerCase(),
            }));
          }}
          className="p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"
            />
          </svg>
        </button>
        <div className="flex-1">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            className="block flex-1 bg-gray-200 w-fill text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Doe"
            value={payload.lastName}
            name="lastName"
            onChange={(e) =>
              setPayload((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        </div>
        <button
          onClick={() => {
            const a = faker.person.lastName();
            setPayload((p) => ({
              ...p,
              lastName: a,
              email: (p.firstName + "_" + a + "@payhancer.com").toLowerCase(),
              username: (p.firstName + "_" + a).toLowerCase(),
            }));
          }}
          className="p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"
            />
          </svg>
        </button>
      </Center>
      <Center className="gap-4">
        <div className="flex-1">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            className="block flex-1 bg-gray-200 w-fill text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            placeholder="Email"
            value={payload.email}
            name="email"
            onChange={(e) =>
              setPayload((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        </div>

        <div className="flex-1">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Username
          </label>
          <input
            className="block flex-1 bg-gray-200 w-fill text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            placeholder="Username"
            value={payload.username}
            name="username"
            onChange={(e) =>
              setPayload((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        </div>
      </Center>

      {(data?.data || error) && (
        <p className={data?.data ? "text-success" : "text-red-500"}>
          {error?.response?.data.server || "Created successfully"}
        </p>
      )}
      <Button
        onClick={() => {
          mutate();
        }}
        className="h-8 w-32 mx-auto"
      >
        Submit
      </Button>

      <h4>Users</h4>
    </Stack>
  );
};

export default Page;
