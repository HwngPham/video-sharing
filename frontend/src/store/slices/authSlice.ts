import { register, login, logout } from "../../services";
import { MERGE_STATE, } from "../constants";

const initState = {
  user: null,
};

export const authSlice = (set: any) => ({
  ...initState,

  login: async (email: string, password: string) => {
    const user = await login(email, password)
    if (!user) return logout()

    if (user.email) {
      set({ user }, MERGE_STATE, "auth/login")
    } else {
      set({ user: await register(email, password) }, MERGE_STATE, "auth/register")
    }
  },

  logout: async () => {
    await logout()
    set({ user: null })
  }
})
