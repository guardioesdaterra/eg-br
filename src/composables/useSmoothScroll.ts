import { ref, onMounted, onUnmounted } from 'vue'

export function useSmoothScroll() {
  const isScrolling = ref(false)
  let scrollTimeout: NodeJS.Timeout

  // Smooth scroll to element
  const scrollToElement = (elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Initialize smooth scrolling for navigation links
  const initSmoothScrolling = () => {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')?.slice(1)
        if (targetId) {
          scrollToElement(targetId)
        }
      })
    })
  }

  // Track scrolling state
  const handleScrollStart = () => {
    isScrolling.value = true
    clearTimeout(scrollTimeout)
  }

  const handleScrollEnd = () => {
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false
    }, 100)
  }

  // Get current scroll position
  const getScrollPosition = () => {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    }
  }

  // Get scroll progress percentage
  const getScrollProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
  }

  // Check if element is in viewport
  const isElementInViewport = (element: HTMLElement, threshold: number = 0.1) => {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    const thresholdPixels = windowHeight * threshold
    const elementTop = rect.top
    const elementBottom = rect.bottom

    return (
      elementTop <= windowHeight - thresholdPixels &&
      elementBottom >= thresholdPixels
    )
  }

  // Get active section based on scroll position
  const getActiveSection = (sectionIds: string[]) => {
    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId)
      if (element && isElementInViewport(element, 0.5)) {
        return sectionId
      }
    }
    return null
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScrollStart, { passive: true })
    window.addEventListener('scroll', handleScrollEnd, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScrollStart)
    window.removeEventListener('scroll', handleScrollEnd)
    clearTimeout(scrollTimeout)
  })

  return {
    isScrolling,
    scrollToElement,
    scrollToTop,
    initSmoothScrolling,
    getScrollPosition,
    getScrollProgress,
    isElementInViewport,
    getActiveSection
  }
}