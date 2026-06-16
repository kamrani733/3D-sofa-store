'use client'

import { useRef, useEffect } from 'react'

export function useScrollAnimation() {
  const progress = useRef(0)

  useEffect(() => {
    const update = () => {
      // Use a more reliable method to get the total scrollable height
      const docHeight = document.documentElement.scrollHeight
      const bodyHeight = document.body.scrollHeight
      const scrollableHeight = Math.max(docHeight, bodyHeight) - window.innerHeight
      
      if (scrollableHeight > 0) {
        progress.current = Math.min(window.scrollY / scrollableHeight, 1)
      } else {
        progress.current = 0
      }
    }
    
    // Call once to set initial value
    setTimeout(update, 0)
    
    window.addEventListener('scroll', update, { passive: true })
    // Also listen for resize events in case content height changes
    window.addEventListener('resize', update, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return progress
}
