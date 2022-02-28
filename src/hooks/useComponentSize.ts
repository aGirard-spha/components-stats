import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

function useComponentSize (refParent?: any) {
  const [size, setSize] = React.useState({
    height: 0,
    width: 0,
    clientHeight: 0,
    clientWidth: 0
  })
  const defaultRef = React.useRef<any>()
  const ref = refParent || defaultRef
  const onResize = React.useCallback(() => {
    if (!ref.current) {
      return
    }
    const newHeight = ref.current.offsetHeight
    const newWidth = ref.current.offsetWidth
    const newHeight2 = ref.current.clientHeight
    const newWidth2 = ref.current.clientWidth
    if (
      newHeight !== size.height ||
      newWidth !== size.width ||
      newHeight2 !== size.clientHeight ||
      newWidth2 !== size.clientWidth
    ) {
      setSize({
        height: newHeight,
        width: newWidth,
        clientHeight: newHeight2,
        clientWidth: newWidth2
      })
    }
  }, [size.height, size.width, size.clientHeight, size.clientWidth, ref])

  React.useEffect(() => {
    if (!ref || !ref.current) {
      return
    }

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(ref.current)

    return () => resizeObserver.disconnect()
  }, [ref, onResize])

  const clientWidth = ref && ref.current ? ref.current.clientWidth : size.clientWidth
  const clientHeight = ref && ref.current ? ref.current.clientHeight : size.clientHeight
  const height = ref && ref.current ? ref.current.height : size.height
  const width = ref && ref.current ? ref.current.width : size.width
  React.useEffect(() => {
    setSize({ ...size, clientWidth })
  }, [clientWidth])
  React.useEffect(() => {
    setSize({ ...size, clientHeight })
  }, [clientHeight])
  React.useEffect(() => {
    setSize({ ...size, height })
  }, [height])
  React.useEffect(() => {
    setSize({ ...size, width })
  }, [width])
  return {
    ref,
    ...size
  }
}

export default useComponentSize
