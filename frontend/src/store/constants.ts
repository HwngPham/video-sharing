export const MERGE_STATE = false;

export type Video = {
  id: number;
  src: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  desc: string;
  html_text: string;
  shared_by?: string;
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
