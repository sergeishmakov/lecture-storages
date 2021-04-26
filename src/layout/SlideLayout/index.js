import React, { useCallback, useState } from 'react'

import Title from '../../components/Title'

import { SlideLayoutContainer } from './styles'

export default function SlideLayout({ title, children }) {
  const [height, setHeight] = useState(0)
  const ref = useCallback((node) => {
    if (node) setHeight(node.getBoundingClientRect().height)
  }, [])
  return (
    <>
      <Title ref={ref}>{title}</Title>
      <SlideLayoutContainer titleHeight={height}>
        {children}
      </SlideLayoutContainer>
    </>
  )
}
