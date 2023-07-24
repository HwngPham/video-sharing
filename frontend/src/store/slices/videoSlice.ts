import { getVideos, createVideo } from "../../services";
import { MERGE_STATE, StoreState } from "../constants";

const initState = {
  videos: [],
};

export const videoSlice = (set: any) => ({
  ...initState,

  fetchVideos: async () => {
    set({ videos: await getVideos() }, MERGE_STATE, "videos/list");
  },

  createVideo: async (src: string) => {
    const newVideo = await createVideo(src);
    newVideo &&
      set(
        (state: StoreState) => {
          state.videos.push({
            ...newVideo,
            shared_by: state.user?.email,
          });
        },
        MERGE_STATE,
        "videos/create"
      );
  },
});
