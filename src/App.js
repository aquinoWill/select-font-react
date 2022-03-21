import React from 'react'
import TabComponent from 'components/Tabs'
import { Main, Title, SubTitle } from 'genericStyled'

const App = () => (
  <Main role='main'>
    <Title>Front-end test project</Title>
    <SubTitle>Please convert the following image into a react widget:</SubTitle>
    <TabComponent />
  </Main>
)

export default App
