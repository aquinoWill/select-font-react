import { useEffect } from 'react'
import { useContextConsumer } from 'context'
import { fontBService } from 'services'

export const useFontB = () => {
  const [{ fontB }, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchFontB = async () => {
      dispatch({ type: 'FONT_B_REQUEST' })
      try {
        const { data } = await fontBService()
        dispatch({
          type: 'FONT_B_SUCCESS',
          payload: data || fontB.data
        })
      } catch ({ response }) {
        dispatch({
          type: 'FONT_B_ERROR',
          payload: response
        })
      }
    }

    fetchFontB()
    // eslint-disable-next-line
  }, [dispatch])

  return fontB
}
