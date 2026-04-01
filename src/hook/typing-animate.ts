import { useEffect, useRef, useState } from 'react'

type TPhase = 'idle' | 'deleting' | 'pausing' | 'typing'

export const useTypingAnimation = (text: string, isActive: boolean, timeToFinish?: number) => {
  const [displayText, setDisplayText] = useState<string>('')
  const [isTyping, setIsTyping] = useState(false)

  const phaseRef = useRef<TPhase>('idle')
  const timeoutRef = useRef<NodeJS.Timeout>()
  const displayTextRef = useRef<string>('')
  const targetTextRef = useRef<string>('')

  // Keep displayTextRef in sync so animation callbacks read current value
  const syncedSetDisplay = (val: string) => {
    displayTextRef.current = val
    setDisplayText(val)
  }

  useEffect(() => {
    const clearTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    if (!isActive || !text) {
      clearTimer()
      phaseRef.current = 'idle'
      syncedSetDisplay('')
      setIsTyping(false)
      return
    }

    // Same text already fully typed — do nothing
    if (text === targetTextRef.current && phaseRef.current === 'idle' && displayTextRef.current === text) {
      return
    }

    targetTextRef.current = text

    const typeSpeed = timeToFinish ?? 30
    // Delete faster than type so the switch feels snappy
    const deleteSpeed = Math.max(1, Math.floor(typeSpeed / 3))

    const runDelete = () => {
      if (displayTextRef.current.length === 0) {
        phaseRef.current = 'pausing'
        setIsTyping(true)
        timeoutRef.current = setTimeout(runType, 150)
        return
      }
      syncedSetDisplay(displayTextRef.current.slice(0, -1))
      timeoutRef.current = setTimeout(runDelete, deleteSpeed)
    }

    const runType = () => {
      const target = targetTextRef.current
      if (displayTextRef.current.length >= target.length) {
        phaseRef.current = 'idle'
        setIsTyping(false)
        return
      }
      syncedSetDisplay(target.slice(0, displayTextRef.current.length + 1))
      timeoutRef.current = setTimeout(runType, typeSpeed)
    }

    clearTimer()

    if (displayTextRef.current.length > 0) {
      // Existing text visible — delete it first
      phaseRef.current = 'deleting'
      setIsTyping(true)
      timeoutRef.current = setTimeout(runDelete, deleteSpeed)
    } else {
      // Nothing to delete — type immediately
      phaseRef.current = 'typing'
      setIsTyping(true)
      timeoutRef.current = setTimeout(runType, 100)
    }

    return clearTimer
  }, [text, isActive, timeToFinish])

  return { displayText, isTyping }
}
