import * as nativeAxios from 'axios'

const BASE_URL = '/api'

const createAxios = () => {
  const axiosInstance = nativeAxios.create ? nativeAxios.create({ baseURL: BASE_URL }) : nativeAxios

  if (!axiosInstance?.defaults) return axiosInstance

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      console.error('Error', error.response.status)
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export default createAxios()
