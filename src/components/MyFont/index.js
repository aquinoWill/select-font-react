import React from 'react'
import { oneOfType, object, array, bool } from 'prop-types'
import Card from 'components/Card'
import { Content, List, Item } from './styled'

const MyFont = ({ data: { fontA: content}, isLoadind }) => (
  <Content>
    { isLoadind && <p>Loading...</p> }
    { !isLoadind && (
      <List>
        {
          content?.content?.map(({ id, abbr, color, label }, index) => (
            <Item key={id}>
              <Card
                index={id}
                first={index === 0}
                abbr={abbr}
                label={label}
                bgColor={color}
                blindLabel='green'
              />
            </Item>
          ))
        }
      </List>
    )}
  </Content>
)

MyFont.propTypes = {
  data: oneOfType([object, array]),
  isLoadind: bool
}

MyFont.defaultProps = {
  data: {},
  isLoadind: false
}

export default MyFont
