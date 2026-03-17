export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  }
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  }
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  }
}

export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
      },
    },
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export function scaleIn(delay: number) {
  return {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  }
}
