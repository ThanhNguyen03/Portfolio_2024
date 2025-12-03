import { cn } from '@/utils/cn'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

type TTypingTextProps = {
  sequence: (string | number)[]
  speed?: number // typing speed
  deletionSpeed?: number // deleting speed
  repeat?: number
  className?: string
}

export const TypingText = forwardRef<HTMLSpanElement, TTypingTextProps>(
  (
    { sequence, speed = 50, deletionSpeed = 40, repeat = Infinity, className },
    ref,
  ) => {
    const spanRef = useRef<HTMLSpanElement>(null)
    const [text, setText] = useState<string>('')
    const seqIndex = useRef<number>(0)
    const charIndex = useRef<number>(0)
    const repeatCount = useRef<number>(0)
    const isDeleting = useRef<boolean>(false)

    // Expose ref outside
    useImperativeHandle(ref, () => spanRef.current!)

    useEffect(() => {
      let timeout: NodeJS.Timeout

      const run = () => {
        // Ensure seqIndex is within bounds
        if (seqIndex.current >= sequence.length) {
          repeatCount.current++
          if (repeat !== Infinity && repeatCount.current >= repeat) {
            if (timeout) {
              clearTimeout(timeout)
            }
            return // stop animation
          }
          seqIndex.current = 0
          isDeleting.current = false
          charIndex.current = 0
        }
        const item = sequence[seqIndex.current]

        // Pause step
        if (typeof item === 'number') {
          timeout = setTimeout(() => {
            seqIndex.current++
            run()
          }, item)
          return
        }

        // Ensure item is string before slice
        if (typeof item !== 'string') {
          seqIndex.current++
          timeout = setTimeout(run, speed)
          return
        }
        const currentText = item as string

        // Type text
        if (!isDeleting.current) {
          const nextChar = currentText.slice(0, charIndex.current + 1)
          setText(nextChar)
          charIndex.current++
          if (charIndex.current > currentText.length) {
            isDeleting.current = true
            timeout = setTimeout(run, speed + 300)
            return
          }

          timeout = setTimeout(run, speed)
        } else {
          const nextChar = currentText.slice(0, charIndex.current - 1)
          setText(nextChar)
          charIndex.current--

          if (charIndex.current <= 0) {
            isDeleting.current = false
            seqIndex.current++
            timeout = setTimeout(run, deletionSpeed + 150)
            return
          }

          timeout = setTimeout(run, deletionSpeed)
        }
      }

      run()

      return () => clearTimeout(timeout)
    }, [sequence, speed, repeat, deletionSpeed])

    return (
      <span className={cn('type', className)} ref={spanRef}>
        {text}
      </span>
    )
  },
)
TypingText.displayName = 'TypingText'
