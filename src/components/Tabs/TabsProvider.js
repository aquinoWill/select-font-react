import React, { useState } from 'react'
import { useTabs, useFontA, useFontB } from 'hooks'
import { node } from 'prop-types'
import TabsContext from './TabsContext'
import TabHeader from './TabsHeader'
import TabDetails from './TabsDetails'
import { Content, ContentButtons, Title } from './styled'

const TabsProvider = () => {
  const [tabId, setTabId] = useState('tab-0')
  const { data } = useTabs()
  const { fontA, isFetching } = useFontA()
  const { fontB } = useFontB()

  const handleActiveTab = id => setTabId(`tab-${id}`)

  return (
    <TabsContext.Provider
      value={{
        dataTab: data,
        fontAData: { fontA, isFetching },
        fontBData: fontB,
        tabActive: tabId,
        handleActiveTab: handleActiveTab
      }}
    >
      <Content>
        <Title>Please select one font</Title>
        <ContentButtons>
          <TabHeader />
        </ContentButtons>
      </Content>
      <TabDetails />
    </TabsContext.Provider>
  )
}

TabsProvider.propTypes = {
  children: node
}

export default TabsProvider
