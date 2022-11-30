import React from 'react'
import { ReactPropTypes } from 'react'
export default function Todo({onclick, completed, text}) {
  return (
    <div>
        <Li onclick = {onclick}>
            {text}
        </Li>
    </div>
  )
}
