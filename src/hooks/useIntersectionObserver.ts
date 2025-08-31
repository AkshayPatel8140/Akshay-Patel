import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  root?: Element | null
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement | null>
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        root: options.root || null,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin, options.root])

  return { ref, isIntersecting, entry }
}

// Hook for lazy loading images
export function useLazyImage(src: string, options: UseIntersectionObserverOptions = {}) {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver(options)

  useEffect(() => {
    if (isIntersecting && !imageSrc) {
      setImageSrc(src)
    }
  }, [isIntersecting, imageSrc, src])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  return {
    ref,
    imageSrc,
    isLoaded,
    hasError,
    handleLoad,
    handleError,
  }
}
