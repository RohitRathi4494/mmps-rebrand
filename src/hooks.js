import { useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook for Intersection Observer-based scroll animations.
 * Adds 'animate-visible' class when element enters viewport.
 */
export function useScrollAnimation() {
  const observerRef = useRef(null)

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return { setupObserver }
}

/**
 * Custom hook for animated number counter.
 * Counts from 0 to target when element is visible.
 */
export function useCounter(target, duration = 2000) {
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const startTime = performance.now()

          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // EaseOutQuart for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(eased * target)

            if (el) el.textContent = current
            if (progress < 1) requestAnimationFrame(animate)
            else if (el) el.textContent = target
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
