import React, { useState } from 'react'
import Button from '../Button'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'

import 'prismjs/themes/prism-tomorrow.css'

import { Editor, ConsoleContainer } from './styles'

export default function Console({ initialValue = '' }) {
  const [value, setValue] = useState(initialValue)

  const handleClick = () => {
    try {
      eval(value)
    } catch (e) {
      console.error(e)
    }
  }

  const handleChange = (code) => {
    setValue(code)
  }
  return (
    <ConsoleContainer>
      <Editor
        value={value}
        onValueChange={handleChange}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
      />
      <Button onClick={handleClick}>Run</Button>
    </ConsoleContainer>
  )
}
