import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  width: 50%;
  margin-left: 1em;
  flex-direction: ${({ first }) => first ? 'column' : 'row'};
`

const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  margin-right: 1em;
  color: #333333;
  position: relative;
  border-radius: 10px;
  margin-bottom: 1.5em;
  flex-direction: column;
  border: 2px solid white;
  outline: 1px solid black;
  justify-content: flex-end;
  opacity: ${({ isCheck }) => isCheck ? '.5' : '1'};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ first }) => first ? '8em' : '5em'};
  height: ${({ first }) => first ? '8em' : '5em'};
`

const Abbr = styled.abbr`
  color: #FFFFFF;
  opacity: 50%;
  font-size: 2em;
  font-weight: 900;
`

const List = styled.ul`
  width: 70%;
  list-style: none;
`

const Item = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  opacity: ${({ isCheck }) => isCheck ? '.5' : '1'};

  &:before {
    content: "\\2022";
    color: grey;
    font-size: 3em;
    display: inline-block;
    width: 1em;
  }
`


export { Content, Wrapper, Abbr, List, Item }
