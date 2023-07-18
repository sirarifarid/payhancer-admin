import React, { FC, useState } from "react";
import { Spacer } from "../layout/Spacer";
import { Button } from "../Buttons/Buttons";
import { T_User } from "@/@types/@user";
import { Center } from "../layout/Center";
import { useMutation } from "@tanstack/react-query";
import { J_fake_user } from "@/store/atoms";
import { useAtom } from "jotai";
import api from "@/lib/api";

export const seller_rank: { [props: number]: string[] } = {
  1: ["seller-level-1", "Seller Level 1"],
  2: ["seller-level-2", "Seller Level 2"],
  3: ["seller-level-3", "Seller Level 3"],
  4: ["seller-level-4", "Seller Level 4"],
  5: ["seller-level-5", "Seller Level 5"],
  6: ["seller-level-6", "Seller Level 6"],
  7: ["seller-level-7", "Seller Level 7"],
  8: ["seller-level-8", "Seller Level 8"],
  9: ["seller-level-9", "Seller Level 9"],
  10: ["seller-level-10", "Seller Level 10"],
  11: ["seller-level-11", "Seller Level 11"],
};
export const buyer_rank: { [props: number]: string[] } = {
  1: ["buyer-level-1", "Buyer Level 1"],
  2: ["buyer-level-2", "Buyer Level 2"],
  3: ["buyer-level-3", "Buyer Level 3"],
  4: ["buyer-level-4", "Buyer Level 4"],
  5: ["buyer-level-5", "Buyer Level 5"],
  6: ["buyer-level-6", "Buyer Level 6"],
  7: ["buyer-level-7", "Buyer Level 7"],
  8: ["buyer-level-8", "Buyer Level 8"],
  9: ["buyer-level-9", "Buyer Level 9"],
};
const UserCard: FC<{ value: Partial<T_User> }> = ({ value }) => {
  const [fake_user, setFake_user] = useAtom(J_fake_user);

  const [payload, setPayload] = useState<Partial<T_User>>({
    selling_reputation: value.selling_reputation,
    buying_reputation: value.buying_reputation,
    total_purchased: value.total_purchased,
    total_sold: value.total_sold,
  });

  const { isLoading: isLoadingDelete, mutate: deleteUser } = useMutation<
    any,
    any
  >({
    mutationFn: () => api.post("/users/delete", { username: value.username }),
    onSuccess(data, variable) {
      setFake_user((p) => p.filter((c) => c.username !== variable));
    },
  });

  const { isLoading: isLoadingEdit, mutate: editUser } = useMutation<any, any>({
    mutationFn: () =>
      api.post("/users/edit", {
        username: value.username,
        ...{
          ...payload,
          buying_reputation: {
            ...payload.buying_reputation,
            name: buyer_rank[payload.buying_reputation?.name as any],
          },
          selling_reputation: {
            ...payload.selling_reputation,
            name: seller_rank[payload.selling_reputation?.name as any],
          },
        },
      }),
  });

  return (
    <Center className="p-4 bg-white rounded-md">
      <div className="div-stack gap-2">
        <p>
          Name:{" "}
          <b>
            {value.firstName} {value.lastName}
          </b>
        </p>
        <p>
          Username: <b>{value.username}</b>
        </p>
        <p>
          Email: <b>{value.email}</b>
        </p>
        <div className="flex gap-2">
          <p>Total sold</p>
          <input
            type="number"
            name="total_sold"
            value={payload.total_sold}
            className="bg-gray-100 p-1"
            placeholder="Count"
            onChange={(e) =>
              setPayload((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="flex gap-2">
          <p>Total purchased</p>
          <input
            type="number"
            className="bg-gray-100 p-1"
            placeholder="Count"
            name="total_purchased"
            value={payload.total_purchased}
            onChange={(e) =>
              setPayload((p) => ({ ...p, [e.target.name]: e.target.value }))
            }
          />
        </div>
        <Button
          isLoading={isLoadingEdit}
          onClick={() => {
            editUser();
          }}
        >
          Edit
        </Button>
      </div>
      <Spacer />
      <div className="div-stack gap-2">
        <div className="flex gap-2">
          <p>Seller Rank</p>
          <select
            name="rank"
            id=""
            value={+(payload.selling_reputation?.name || 0)}
            onChange={(e) => {
              setPayload((p) => {
                p.selling_reputation!.name = e.target.value as any;
                return {
                  ...p,
                  selling_reputation: p.selling_reputation,
                };
              });
            }}
          >
            <>
              {Object.keys(seller_rank).map((value, i) => {
                return (
                  <option key={"a" + i} value={+value}>
                    {seller_rank[+value][1]}
                  </option>
                );
              })}
            </>
          </select>
        </div>
        <div className="flex gap-2">
          <p>Seller Exp</p>
          <input
            type="number"
            className="bg-gray-100 p-1"
            placeholder="Exp"
            value={payload.selling_reputation?.exp}
            onChange={(e) => {
              setPayload((p) => {
                p.selling_reputation!.exp = +e.target.value;
                return {
                  ...p,
                  selling_reputation: p.selling_reputation,
                };
              });
            }}
          />
        </div>
        <div className="flex gap-2">
          <p>Buyer Rank</p>
          <select
            name="rank"
            id=""
            value={+payload.buying_reputation!.name}
            onChange={(e) => {
              setPayload((p) => {
                p.buying_reputation!.name = e.target.value as any;
                return {
                  ...p,
                  buying_reputation: p.buying_reputation,
                };
              });
            }}
          >
            <>
              {Object.keys(buyer_rank).map((value, i) => {
                return (
                  <option key={"a" + i} value={+value}>
                    {buyer_rank[+value][1]}
                  </option>
                );
              })}
            </>
          </select>
        </div>
        <div className="flex gap-2">
          <p>Buyer Exp</p>
          <input
            type="number"
            className="bg-gray-100 p-1"
            placeholder="Exp"
            value={payload.buying_reputation?.exp}
            onChange={(e) => {
              setPayload((p) => {
                p.buying_reputation!.exp = +e.target.value;
                return {
                  ...p,
                  buying_reputation: p.buying_reputation,
                };
              });
            }}
          />
        </div>
      </div>
      <Spacer />
      <Button isLoading={isLoadingDelete} onClick={() => deleteUser()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </Button>
    </Center>
  );
};

export default UserCard;
