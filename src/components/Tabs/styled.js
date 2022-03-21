import styled from 'styled-components'
import { responsive } from 'utils/responsive'

const ContentTab = styled.section`
  width: 100vw;
  display: flex;
  margin: 2em auto 0;
  flex-direction: column;

  ${responsive.smMin`
    width: 50vw;
  `}
`

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  margin-bottom: 1.5em;
  justify-content: space-between;
`

const ContentButtons = styled.div`
  display: flex;
  align-self: end;
`

const Title = styled.h3`
  display: flex;
  color: #666666;
  font-size: 1em;
  align-self: start;
  ${responsive.smMin`
    font-size: 1.5em;
  `}
`

const Button = styled.button`
  border: none;
  font-weight: 600;
  font-family: 'Montserrat';
  background-color: transparent;
  color: ${({ active }) => (active ? 'orange' : 'grey')};
`

const Tab = styled.section`
  height: 30vh;
  padding: 3em 2em;
  border-radius: 5px;
  border: 2px solid #CCC;
`

export { Title, Content, ContentTab, Tab, Button, ContentButtons }
