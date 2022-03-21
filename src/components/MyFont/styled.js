import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
`

const Item = styled.li`
  display: flex;
  justify-content: flex-end;

  &:first-child {
    width: 40%;
    display: flex;
    position: absolute;
    align-items: flex-start;
    justify-content: flex-start;

    & div {
      flex-direction: column;
    }
  }
`

export { Content, List, Item }
