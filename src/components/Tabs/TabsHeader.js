import React from 'react'
import TabsContext from './TabsContext'
import Tab from './Tab'

const TabHeader = () => {
  return (
    <TabsContext.Consumer>
      {({ dataTab, handleActiveTab, tabActive }) => {
        return dataTab.map(({ id, label }, index) => (
          <Tab
            key={id}
            id={index}
            label={label}
            tabActive={tabActive}
            handleClick={() => handleActiveTab(index)}
          />
        ))
      }}
    </TabsContext.Consumer>
  )
}

export default TabHeader
