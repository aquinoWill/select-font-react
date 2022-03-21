import { css } from 'styled-components'

const breakPoints = {
  xs: '767px',
  smMin: '768px',
  smMax: '991px',
  mdMin: '992px',
  mdMax: '1271px',
  lgMin: '1272px'
}

export const responsive = Object.keys(breakPoints).reduce(
  (acc, size) => {
    acc[size] = (...args) => css`
      @media (min-width: ${breakPoints[size]}) {
        ${css(...args)};
      }
    `
    return acc
  }, {}
)
