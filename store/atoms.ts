import { T_User } from "@/@types/@user";
import { atom } from "jotai";

export const J_fake_user = atom<Partial<T_User>[]>([]);
