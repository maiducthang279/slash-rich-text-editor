import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import EditableBlock from './EditableBlock'
import { setCaretToEnd, uid } from '../Util'

import styles from '../styles.module.css'

export type BlockModel = {
  id: string
  tag: string
  html: string
  ref?: HTMLElement | null
}

const INITIAL_BLOCK: BlockModel = { id: uid(), html: '', tag: 'p', ref: null }

type EditablePageProps = {
  value?: BlockModel[]
  onChange?: Function
}

const EditablePage = ({
  value = [INITIAL_BLOCK],
  // eslint-disable-next-line no-void
  onChange = () => void 0
}: EditablePageProps) => {
  const [blocks, setBlocks] = useState(value)
  const currentBlockRef = useRef<Partial<BlockModel> | null>(null)
  const previousBlockRef = useRef<Element | null>(null)
  const isMouseDown = useRef(false)
  const mouseOverTarget = useRef<EventTarget | null>(null)

  useLayoutEffect(() => {
    const currentBlock = blocks.find(
      ({ id }) => id === currentBlockRef?.current?.id
    )?.ref?.nextElementSibling as HTMLElement

    const previousBlock = previousBlockRef.current as HTMLElement
    if (currentBlock) {
      currentBlock.focus()
      currentBlockRef.current = null
    }
    if (previousBlock) {
      previousBlock.focus()
      setCaretToEnd(previousBlock)
      previousBlockRef.current = null
    }
    onChange(blocks)
  }, [blocks])

  useEffect(() => {
    document.addEventListener('mousedown', handlerMouseDown)
    document.addEventListener('mouseup', handlerMouseUp)
    document.addEventListener('mousemove', handlerMouseMove)
    return () => {
      document.removeEventListener('mousedown', handlerMouseDown)
      document.removeEventListener('mouseup', handlerMouseUp)
      document.removeEventListener('mousemove', handlerMouseMove)
    }
  }, [])

  const handlerMouseDown = () => {
    isMouseDown.current = true
  }
  const handlerMouseUp = () => {
    isMouseDown.current = false
  }
  const handlerMouseMove = (ev: MouseEvent) => {
    if (isMouseDown.current && ev.target !== mouseOverTarget.current) {
      mouseOverTarget.current = ev.target
    }
  }

  const updatePageHandler = useCallback(
    (updatedBlock: BlockModel) => {
      currentBlockRef.current = null
      const block = blocks.find(({ id }) => id === updatedBlock.id)
      if (block) {
        const index = blocks.indexOf(block)
        const updatedBlocks = [...blocks]
        updatedBlocks[index] = {
          ...updatedBlocks[index],
          tag: updatedBlock.tag,
          html: updatedBlock.html,
          ref: updatedBlock.ref
        }
        setBlocks(updatedBlocks)
      }
    },
    [blocks]
  )

  const addBlockHandler = (currentBlock: Partial<BlockModel>) => {
    setBlocks((currentBlocks) => {
      const newBlock = { id: uid(), html: '', tag: 'p', ref: null }
      const index = currentBlocks.map((b) => b.id).indexOf(currentBlock.id!)
      const updatedBlocks = [...currentBlocks]
      updatedBlocks.splice(index + 1, 0, newBlock)

      currentBlockRef.current = currentBlock
      return updatedBlocks
    })
  }

  const deleteBlockHandler = (currentBlock: Partial<BlockModel>) => {
    setBlocks((currentBlocks) => {
      const previousBlock = currentBlock?.ref?.previousElementSibling
      if (currentBlocks.length > 1 && previousBlock) {
        previousBlockRef.current = previousBlock

        const index = currentBlocks.map((b) => b.id).indexOf(currentBlock.id!)
        const updatedBlocks = [...currentBlocks]
        updatedBlocks.splice(index, 1)
        return updatedBlocks
      }
      return currentBlocks
    })
  }

  return (
    <div className={styles.page}>
      {blocks.map((block, key) => {
        return (
          <EditableBlock
            key={key}
            id={block.id}
            initialTag={block.tag}
            initialHtml={block.html}
            updatePage={updatePageHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
          />
        )
      })}
    </div>
  )
}

export default EditablePage
