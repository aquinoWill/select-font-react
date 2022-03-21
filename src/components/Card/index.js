import React, { useState } from 'react'
import { Content, Wrapper, Abbr, List, Item } from './styled'
import { string, number, bool } from 'prop-types'

const Card = ({ index, first, abbr, bgColor, blindLabel, label }) => {
  const [check, setCheck] = useState()

  const handleClick = e => {
    const index = e.target.id
    if (index !== check) {
      setCheck(true)
    }
  }

  return (
    <Content
    role='radiogroup'
    aria-labelledby='cardColors'
    >
      <Wrapper
        id={index}
        first={first}
        bgColor={bgColor}
        role='radio'
        tabindex='0'
        aria-checked={check}
        aria-labelledby={blindLabel}
        isCheck={check}
        onClick={handleClick}
      >
        <label id={blindLabel}>
          <Abbr>{abbr}</Abbr>
        </label>
      </Wrapper>
      <List>
        <Item isCheck={check}>{ label }</Item>
      </List>
    </Content>
  )
}

Card.propTypes = {
  index: number,
  first: bool,
  abbr: string.isRequired,
  bgColor: string.isRequired,
  blindLabel: string.isRequired,
  label: string.isRequired
}

Card.defaultProps = {
  first: false
}

export default Card
