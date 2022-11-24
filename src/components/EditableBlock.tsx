import React, {
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { BlockModel } from './EditablePage'
import SelectBlockTag from './SelectBlockTag'
import { getCaretCoordinates, setCaretToEnd } from '../Util'

import styles from '../styles.module.css'

export type EditableBlockProps = {
  id: string
  initialHtml: string
  initialTag: string
  updatePage: (params: BlockModel) => void
  addBlock: (params: Partial<BlockModel>) => void
  deleteBlock: (params: Partial<BlockModel>) => void
}

const useContentEditableValue = <T,>(
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, Function] => {
  const [value, setValue] = useState(defaultValue)
  const valueRef = useRef(defaultValue)

  const setValueHandler: React.Dispatch<React.SetStateAction<T>> = (
    val: SetStateAction<T>
  ) => {
    valueRef.current = val instanceof Function ? val(valueRef.current) : val
    return setValue(valueRef.current)
  }

  const getCurrentValue = () => valueRef.current

  return [value, setValueHandler, getCurrentValue]
}

const EditableBlock = ({
  id,
  initialHtml,
  initialTag,
  updatePage,
  addBlock,
  deleteBlock
}: EditableBlockProps) => {
  const contentEditable = useRef<HTMLElement>(null)
  const [html, setHtml, getCurrentHtml] = useContentEditableValue('')
  const [tag, setTag] = useState('p')
  const [, setHtmlBackup, getCurrentHtmlBackup] = useContentEditableValue('')
  const [, setPreviousKey, getCurrentPreviousKey] = useContentEditableValue('')
  const [selectMenuIsOpen, setSelectedMenuIsOpen, getCurrentSelectMenuIsOpen] =
    useContentEditableValue(false)
  const [selectMenuPosition, setSelectMenuPosition] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    setHtml(initialHtml)
    setTag(initialTag)
  }, [])

  useEffect(() => {
    updatePage({
      id,
      html,
      tag,
      ref: contentEditable.current
    })
  }, [html, tag])

  useEffect(() => {
    if (contentEditable.current) {
      setCaretToEnd(contentEditable.current)
      closeSelectMenuHandler()
    }
  }, [tag])

  const onChangeHandler = (e: ContentEditableEvent) => {
    setHtml(e.target.value)
  }

  const onKeyUpHandler = (e: KeyboardEvent) => {
    if (e.key === 'Shift') {
      setPreviousKey('')
    }
    if (e.key === '/') {
      openSelectMenuHandler()
    }
  }

  const onKeyDownHandler = (e: KeyboardEvent) => {
    let key = e.key
    if (key === '/') {
      setHtmlBackup(getCurrentHtml())
    }
    if (key === 'Backspace' && !getCurrentHtml()) {
      e.preventDefault()
      deleteBlock({
        id: id,
        ref: contentEditable.current
      })
    }
    if (key === 'Enter') {
      if (getCurrentSelectMenuIsOpen()) {
        e.preventDefault()
      } else if (getCurrentPreviousKey() !== 'Shift') {
        e.preventDefault()
        addBlock({
          id: id,
          ref: contentEditable.current
        })
      } else {
        key = 'Shift'
      }
    }
    setPreviousKey(key)
  }

  const openSelectMenuHandler = () => {
    const { x, y } = getCaretCoordinates()
    setSelectedMenuIsOpen(true)
    setSelectMenuPosition({ x: x || 0, y: y || 0 })
    document.addEventListener('click', closeSelectMenuHandler)
  }

  const closeSelectMenuHandler = () => {
    setHtmlBackup(getCurrentHtmlBackup())
    setSelectedMenuIsOpen(false)
    setSelectMenuPosition(null)
    document.removeEventListener('click', closeSelectMenuHandler)
  }

  const tagSelectionHandler = (tag: string) => {
    setTag(tag)
    setHtml(getCurrentHtmlBackup())
  }

  return (
    <React.Fragment>
      {selectMenuIsOpen && selectMenuPosition && (
        <SelectBlockTag
          position={selectMenuPosition}
          onSelect={tagSelectionHandler}
          close={closeSelectMenuHandler}
        />
      )}
      <ContentEditable
        id={id}
        className={styles.block}
        innerRef={contentEditable}
        html={html}
        tagName={tag}
        placeholder="Type '/' for command"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        onKeyUp={onKeyUpHandler}
      />
    </React.Fragment>
  )
}

export default EditableBlock
