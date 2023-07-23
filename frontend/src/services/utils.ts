export const getResponseData = async (response: Response) => {
  const data = await response.json()
  return data.message
}
