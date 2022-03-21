import React from 'react'

import TabsProvider from './TabsProvider'
import { ContentTab } from './styled'

const TabComponent = () => (
  <ContentTab role='tablist' arial-label='Pleas select one font'>
    <TabsProvider />
  </ContentTab>
)

export default TabComponent
