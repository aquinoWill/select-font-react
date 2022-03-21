export const FontBReducers = ({ fontB }, { type, payload = {} }) => {
  switch (type) {
    case 'FONT_B_REQUEST':
      return {
        fontB: {},
        isFetching: true
      }
    case 'FONT_B_SUCCESS':
      return {
        fontB: payload,
        isError: false,
        isFetching: false
      }
    case 'FONT_B_ERROR':
      return {
        fontB: payload,
        isError: true,
        isFetching: false
      }

    default:
      return fontB
  }
}

FontBReducers.key = 'fontB'

FontBReducers.initialState = {
  fontB: {},
  isError: false,
  isFetching: false
}
