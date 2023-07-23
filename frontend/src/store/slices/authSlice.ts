import { register, login, logout } from "../../services";
import { MERGE_STATE, } from "../constants";

const initState = {
  user: null,
};

export const authSlice = (set: any) => ({
  ...initState,

  login: async (email: string, password: string) => {
    set({ user: await login(email, password) }, MERGE_STATE, "auth/login")
  },

  logout: async () => {
    await logout()
    set({ user: null })
  },

  register: async (email: string, password: string) => {
    set({ user: await register(email, password) }, MERGE_STATE, "auth/register")
  }
})
