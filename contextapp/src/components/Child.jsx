import React from 'react'
import contextInfo from './Parent.jsx'
import Grandchild from './Grandchild'

export default function Child() {
  return (
    <div>
        <Grandchild/>
    </div>
  )
}
