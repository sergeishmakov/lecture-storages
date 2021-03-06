import styled from 'styled-components'
import Colors from '../../colors'
import BaseEditor from 'react-simple-code-editor'

export const Editor = styled(BaseEditor)`
  width: 100%;
  background: ${Colors.zircon};
  border-radius: 4px;
  min-height: 60px;
  padding: 10px;
  margin: 0 0 10px 0;
  border: 1px solid ${Colors.periwinkleGray} !important;

  & > textarea:focus {
    outline: none;
    border: 1px solid ${Colors.portage} !important;
  }
`
export const ConsoleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 60px;

  /* Syntax highlighting */
  /* .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #90a4ae;
  }
  .token.punctuation {
    color: #9e9e9e;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #e91e63;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #4caf50;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #795548;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #3f51b5;
  }
  .token.function {
    color: #f44336;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #ff9800;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  } */
`
