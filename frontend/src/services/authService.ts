import { getResponseData, request } from "./utils";

export const login = async (email: string, password: string) => {
  try {
    const res = await request({
      url: "auth/login",
      method: "post",
      data: { email, password },
    });
    const data = await getResponseData(res);

    if (res.status === 200) return data;
    if (res.status === 404) return { email: "" };
    logout();
    alert(data);
    window.location.reload();
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const res = await request({
      url: "auth/register",
      method: "post",
      data: { email, password },
    });
    const data = await getResponseData(res);

    if (res.status === 201) return data;
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const logout = async () => {
  try {
    await request({
      url: "auth/logout",
      method: "delete",
    });
  } catch (e) {
    console.error(e);
  } finally {
    window.localStorage.clear();
  }
};
