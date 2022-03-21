import React from 'react'
import { string, func, number } from 'prop-types'
import { Button} from './styled'

const Tab = ({ id, label, handleClick, tabActive }) => {
  return (
    <Button
      id={`tab-${id}`}
      role='tab'
      tabindex='0'
      aria-selected='true'
      aria-controls={`panel-${id}`}
      active={tabActive === `tab-${id}`}
      onClick={handleClick}
    >
      {label}
    </Button>
  )
}

Tab.propTypes = {
  id: number.isRequired,
  label: string.isRequired,
  tabActive: string.isRequired,
  handleClick: func.isRequired
}

export default Tab
