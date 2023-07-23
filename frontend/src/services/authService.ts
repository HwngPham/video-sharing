import { getResponseData } from "./utils"
import { BASE_URL } from "./constants"

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    return getResponseData(res)
  } catch (e) {
    console.error(e)
  }
}

export const register = async (email: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    return getResponseData(res)
  } catch (e) {
    console.error(e)
  }
}

export const logout = async () => {
  try {
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    return getResponseData(res)
  } catch (e) {
    console.error(e)
  }
}
