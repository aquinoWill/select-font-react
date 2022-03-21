import axios from 'config/axios'

const URL = 'tabs'

export const tabsService = () => axios.get(URL)
