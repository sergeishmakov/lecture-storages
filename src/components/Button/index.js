import styled from 'styled-components'
import Colors from '../../colors'

function getPadding({ size }) {
  if (size === 'lg') return '10px 30px'
  if (size === 'sm') return '5px 15px'
  return '6px 20px'
}

function getFontSize({ size }) {
  if (size === 'lg') return '20px'
  if (size === 'sm') return '16px'
  return '18px'
}

export default styled.button`
  background: ${Colors.dodgerBlue};
  color: ${Colors.white};
  border-radius: 4px;
  border: 0;
  font-size: ${getFontSize};
  padding: ${getPadding};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${Colors.scienceBlue};
  }

  &:focus {
    outline: none;
  }
`
