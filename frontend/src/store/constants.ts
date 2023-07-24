export const MERGE_STATE = false;

export type Video = {
  id: number;
  src: string;
  createdAt: Date;
  updatedAt: Date;
  title?: string;
  author_name?: string;
  author_url?: string;
  type?: string;
  height?: number;
  width?: number;
  version?: string;
  provider_name?: string;
  provider_url?: string;
  thumbnail_height?: number;
  thumbnail_width?: number;
  thumbnail_url?: string;
  html?: string;
  shared_by?: string
};

export type User = {
  id: number;
  email: string;
} | null;

export interface StoreState {
  user: User;
  videos: Video[];
  fetchVideos: () => Promise<void>;
  createVideo: (src: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
