import React, { useState } from 'react'

import EditablePage, { BlockModel } from 'slash-rich-text-editor'
import 'slash-rich-text-editor/dist/index.css'

import exampleImage from './example.png'

const App = () => {
  const [value, setValue] = useState<BlockModel[]>([
    { id: 'default', html: 'This is a title', tag: 'h1', ref: null },
    { id: 'default1', html: 'This is a heading (h2)', tag: 'h2', ref: null },
    { id: 'default2', html: 'This is a subheading (h3)', tag: 'h3', ref: null },
    { id: 'default3', html: 'This is a paragraph', tag: 'p', ref: null }
  ])
  return (
    <React.Fragment>
      <div className='tutorial_container'>
        <p>Open context menu by typing '/'</p>
        <img width={200} src={exampleImage} alt='example' />
      </div>
      <EditablePage
        value={value}
        onChange={(result: BlockModel[]) => setValue(result)}
      />
    </React.Fragment>
  )
}

export default App
