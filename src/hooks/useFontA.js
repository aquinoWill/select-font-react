import { useEffect } from 'react'
import { useContextConsumer } from 'context'
import { fontAService } from 'services'

export const useFontA = () => {
  const [{ fontA }, dispatch] = useContextConsumer()

  useEffect(() => {
    const fetchFontA = async () => {
      dispatch({ type: 'FONT_A_REQUEST' })
      try {
        const { data } = await fontAService()
        dispatch({
          type: 'FONT_A_SUCCESS',
          payload: data || fontA.data
        })
      } catch ({ response }) {
        dispatch({
          type: 'FONT_A_ERROR',
          payload: response
        })
      }
    }

    fetchFontA()
    // eslint-disable-next-line
  }, [dispatch])

  return fontA
}
