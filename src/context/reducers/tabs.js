export const TabsReducers = ({ tabs }, { type, payload = {} }) => {
  switch (type) {
    case 'TABS_REQUEST':
      return {
        data: [],
        isFetching: true
      }
    case 'TABS_SUCCESS':
      return {
        data: payload,
        isError: false,
        isFetching: false
      }
    case 'TABS_ERROR':
      return {
        data: payload,
        isError: true,
        isFetching: false
      }

    default:
      return tabs
  }
}

TabsReducers.key = 'tabs'

TabsReducers.initialState = {
  data: [],
  isError: false,
  isFetching: false
}
