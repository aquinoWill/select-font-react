import React from 'react'
import BuyFonts from 'components/BuyFonts'
import MyFont from 'components/MyFont'
import TabsContext from './TabsContext'
import { Tab } from './styled'

const TabDetails = () => {
  return (
    <TabsContext.Consumer>
      {({ fontAData, fontBData, tabActive }) => (
        <>
          <Tab
            hidden={tabActive !== 'tab-0'}
            id='panel-0'
            tabIndex='0'
            role='tabpanel'
            aria-labelledby='tab-0'
          >
            <MyFont data={fontAData} />
          </Tab>
          <Tab
            hidden={tabActive !== 'tab-1'}
            id='panel-1'
            tabIndex='0'
            role='tabpanel'
            aria-labelledby='tab-1'
          >
            <BuyFonts data={fontBData} />
          </Tab>
        </>
      )}
    </TabsContext.Consumer>
  )
}

export default TabDetails
