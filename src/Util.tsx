export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export const getCaretCoordinates = (fromStart = true) => {
  let x, y
  const isSupported = typeof window.getSelection !== 'undefined'
  if (isSupported) {
    const selection = window.getSelection()

    if (selection && selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0).cloneRange()
      range.collapse(!!fromStart)
      const rect = range.getClientRects()[0]
      if (rect) {
        x = rect.left
        y = rect.top
      }
    }
  }

  return { x, y }
}

export const setCaretToEnd = (element: HTMLElement) => {
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(element)
  range.collapse(false)
  selection?.removeAllRanges()
  selection?.addRange(range)
  element.focus()
}

export const setAllCaret = (element: HTMLElement) => {
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(element)
  // range.collapse(false);
  selection?.removeAllRanges()
  selection?.addRange(range)
  element.focus()
}

// export const moveCaret = () => {
//   const selection = window.getSelection();
//   const range = selection?.getRangeAt(0);
//   console.log(selection, range);
//   const offset = range?.startOffset
//   const [container, currentOffset] = getCaretPos(
//     range?.commonAncestorContainer || null,
//     offset || 0,
//   );
// };

// const getCaretPos = (
//   container: Node | null,
//   offset: number,
//   prevContainer?: Node,
// ): [Node | null, number] => {
//   if (
//     container?.nodeType === Node.ELEMENT_NODE &&
//     (container as HTMLElement).className.includes('block')
//   ) {
//     let currentOffset = offset;
//     return [container, currentOffset];
//   } else if (container != null) {
//     let currentOffset = offset;
//     if (prevContainer) {
//       container.childNodes.
//     }
//     return getCaretPos(container.parentNode, currentOffset);
//   } else {
//     return [null, 0];
//   }
// };
