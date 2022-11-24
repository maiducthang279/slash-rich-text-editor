# slash-rich-text-editor

> A rich text editor base on HTML contenteditable

[![NPM](https://img.shields.io/npm/v/slash-rich-text-editor.svg)](https://www.npmjs.com/package/slash-rich-text-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save slash-rich-text-editor
```

## Usage

```tsx
import React, { useState } from 'react'

import EditablePage, { BlockModel } from 'slash-rich-text-editor'
import 'slash-rich-text-editor/dist/index.css'

const Example = () => {
  const [value, setValue] = useState<BlockModel[]>([
    { id: 'default', html: 'Default paragraph', tag: 'p' })
  return (
    <EditablePage
      value={value}
      onChange={(result: BlockModel[]) => setValue(result)}
    />
  )
}

```

## License

MIT © [maiducthang279](https://github.com/maiducthang279)
