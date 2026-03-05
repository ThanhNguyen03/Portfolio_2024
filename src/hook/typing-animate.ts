import { useEffect, useRef, useState } from 'react'

export const useTypingAnimation = (
  text: string,
  isActive: boolean,
  timeToFinish?: number,
) => {
  const [displayText, setDisplayText] = useState<string>('')
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const indexRef = useRef<number>(0)

  useEffect(() => {
    if (!isActive || !text) {
      setDisplayText('')
      setIsTyping(false)
      indexRef.current = 0
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      return
    }

    setIsTyping(true)
    indexRef.current = 0
    setDisplayText('')

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        setDisplayText(text.slice(0, indexRef.current + 1))
        indexRef.current++
        timeoutRef.current = setTimeout(typeNextChar, timeToFinish || 30) // Speed of typing
      } else {
        setIsTyping(false)
      }
    }

    timeoutRef.current = setTimeout(typeNextChar, 100) // Initial delay

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, isActive, timeToFinish])

  return { displayText, isTyping }
}
