import { useEffect } from 'react'
import { useContextConsumer } from 'context'
import { tabsService } from 'services'

export const useTabs = () => {
  const [{ tabs }, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchTabs = async () => {
      dispatch({ type: 'TABS_REQUEST' })
      try {
        const { data } = await tabsService()
        dispatch({
          type: 'TABS_SUCCESS',
          payload: data || tabs.data
        })
      } catch ({ response }) {
        dispatch({
          type: 'TABS_ERROR',
          payload: response
        })
      }
    }

    fetchTabs()
    // eslint-disable-next-line
  }, [dispatch])

  return tabs
}
