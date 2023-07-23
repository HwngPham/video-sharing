import { getResponseData } from "./utils"
import { BASE_URL } from "./constants"

export const getVideos = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/videos`)
    return getResponseData(res)
  } catch (e) {
    console.error(e)
  }
}

export const createVideo = async (content: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/videos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
    return getResponseData(res)
  } catch (e) {
    console.error(e)
  }
}
