export const BASE_URL = "http://localhost:3000/";

export const YOUTUBE_META_URL = "http://www.youtube.com/oembed";

export interface RequestProps {
  baseUrl?: string;
  url: string;
  method?: "get" | "post" | "delete";
  data?: Record<string, any>;
  credentials?: "omit" | "include" | "same-origin";
}
