export const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface RequestProps {
  url: string;
  method?: "get" | "post" | "delete";
  data?: Record<string, any>;
  credentials?: "omit" | "include" | "same-origin";
}
