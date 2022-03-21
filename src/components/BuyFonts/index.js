import React from 'react'
import { objectOf, string } from 'prop-types'
import { Content, Text } from './styled'

const BuyFonts = ({ data: { content } }) => (
  <Content>
    <Text>{ content }</Text>
  </Content>
)

BuyFonts.propTypes = {
  data: objectOf(string)
}

export default BuyFonts
