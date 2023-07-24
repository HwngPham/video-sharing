import { YOUTUBE_META_URL } from "./constants";
import { getResponseData, request } from "./utils";

export const getVideos = async () => {
  try {
    const res = await request({ url: "api/videos" });
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
};

export const createVideo = async (src: string) => {
  try {
    const res = await request({
      url: "api/videos",
      method: "post",
      data: { src },
    });
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
};

export const getVideoDetail = async (src: string) => {
  try {
    const res = await request({
      baseUrl: `${YOUTUBE_META_URL}?url=`,
      url: `${src}&format=json`,
    });
    return getResponseData(res);
  } catch (e) {
    console.error(e);
  }
};
