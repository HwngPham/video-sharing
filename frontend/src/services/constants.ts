export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const YOUTUBE_META_URL = "http://www.youtube.com/oembed";

export interface RequestProps {
  baseUrl?: string;
  url: string;
  method?: "get" | "post" | "delete";
  data?: Record<string, any>;
  credentials?: "omit" | "include" | "same-origin";
}
