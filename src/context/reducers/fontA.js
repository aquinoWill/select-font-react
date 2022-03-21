export const FontAReducers = ({ fontA }, { type, payload = {} }) => {
  switch (type) {
    case 'FONT_A_REQUEST':
      return {
        fontA: [],
        isFetching: true
      }
    case 'FONT_A_SUCCESS':
      return {
        fontA: payload,
        isError: false,
        isFetching: false
      }
    case 'FONT_A_ERROR':
      return {
        fontA: payload,
        isError: true,
        isFetching: false
      }

    default:
      return fontA
  }
}

FontAReducers.key = 'fontA'

FontAReducers.initialState = {
  fontA: [],
  isError: false,
  isFetching: false
}
