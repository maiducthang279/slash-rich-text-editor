import { matchSorter } from 'match-sorter'
import React, { useEffect, useState } from 'react'

import styles from '../styles.module.css'

const MENU_HEIGHT = 150
const allowedTags = [
  {
    id: 'page-title',
    tag: 'h1',
    label: 'Page Title'
  },
  {
    id: 'heading',
    tag: 'h2',
    label: 'Heading'
  },
  {
    id: 'subheading',
    tag: 'h3',
    label: 'Subheading'
  },
  {
    id: 'paragraph',
    tag: 'p',
    label: 'Paragraph'
  }
]

type SelectBlockTagProps = {
  position: { x: number; y: number }
  onSelect: Function
  close: Function
}

const SelectBlockTag = ({ position, onSelect, close }: SelectBlockTagProps) => {
  const [command, setCommand] = useState('')
  const [tagList, setTagList] = useState(allowedTags)
  const [selectedTag, setSelectedTag] = useState(0)
  const x = position.x
  const y =
    position.y - MENU_HEIGHT > 0
      ? position.y - MENU_HEIGHT
      : position.y + MENU_HEIGHT / 5

  const positionAttributes = { top: y, left: x }

  useEffect(() => {
    setSelectedTag(0)
    setTagList(matchSorter(allowedTags, command, { keys: ['tag', 'label'] }))
  }, [command])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        if (tagList[selectedTag]?.tag) {
          onSelect(tagList[selectedTag].tag)
        }
      } else if (e.key === 'Tab' || e.key === 'ArrowDown') {
        e.preventDefault()
        const newSelectedTag =
          selectedTag === tagList.length - 1 ? 0 : selectedTag + 1
        setSelectedTag(newSelectedTag)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const newSelectedTag =
          selectedTag === 0 ? tagList.length - 1 : selectedTag - 1
        setSelectedTag(newSelectedTag)
      } else if (e.key === 'Backspace') {
        if (command) {
          setCommand(command.slice(0, -1))
        } else {
          close()
        }
      } else if (!e.ctrlKey && !e.shiftKey && !e.metaKey) {
        setCommand(command + e.key)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [tagList, selectedTag])
  return (
    <div className={styles.selectMenu} style={positionAttributes}>
      <div className={styles.items}>
        {tagList.map((item, key) => {
          return (
            <div
              className={
                tagList.indexOf(item) === selectedTag ? styles.selected : ''
              }
              key={key}
              role='button'
              tabIndex={0}
              onClick={() => onSelect(item.tag)}
            >
              <p className={styles.label}>{item.label}</p>
              <p className={styles.tag}>
                <i>{item.tag}</i>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectBlockTag
