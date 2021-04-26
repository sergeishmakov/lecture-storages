import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../colors'
import Button from '../../components/Button'

export const AppContainer = styled.div`
  background: ${Colors.white};
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${Colors.dodgerBlue};
`

export const LinksWrapper = styled.div`
  display: flex;
  width: 60%;
`

export const Content = styled.div`
  width: 60%;
  position: relative;
  padding: 30px 0;

  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms, transform 500ms;
  }
`

export const Link = styled(NavLink).attrs({
  activeStyle: { fontWeight: 'bold', color: Colors.scienceBlue },
})`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 15px;
  color: white;

  &:first-child {
    margin: 0 15px 0 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.mercury};
    border-radius: 40px;
  }
`

export const Shadow = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.2;
  }
`

export const RightShadow = styled(Shadow)`
  background: linear-gradient(90deg, ${Colors.white}, ${Colors.black});
`

export const LeftShadow = styled(Shadow)`
  background: linear-gradient(90deg, ${Colors.black}, ${Colors.white});
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const NextButton = styled(Button).attrs({ size: 'lg' })`
  justify-self: flex-end;
`

export const PreviousButton = styled(Button).attrs({ size: 'lg' })`
  justify-self: flex-start;
`
