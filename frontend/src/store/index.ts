import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { authSlice } from "./slices/authSlice";
import { videoSlice } from "./slices/videoSlice";
import { StoreState } from "./constants";

export const useStore = create<StoreState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...authSlice(set),
          ...videoSlice(set),
        }),
        {
          name: "app-storage",
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
);
