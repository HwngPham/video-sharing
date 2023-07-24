import { BASE_URL, RequestProps } from "./constants";

export const getResponseData = async (response: Response) => {
  const data = await response.json();
  return data.message;
};

export const request = async ({
  baseUrl,
  url,
  method,
  data,
  credentials,
}: RequestProps) =>
  fetch(`${baseUrl ?? BASE_URL}${url}`, {
    method: method ?? "get",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: credentials ?? "include",
    ...(data && { body: JSON.stringify(data) }),
  });
