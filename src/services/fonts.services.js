import axios from 'config/axios'

const URL_FONT_A = 'fonts_a'
const URL_FONT_B = 'fonts_b'

export const fontAService = () => axios.get(URL_FONT_A)
export const fontBService = () => axios.get(URL_FONT_B)
