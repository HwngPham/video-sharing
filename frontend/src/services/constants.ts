export const BASE_URL = 'http://localhost:3000'

export interface RequestProps {
  method: 'get' | 'post' | 'delete'
  url: string
  data?: Record<string, any>
}

