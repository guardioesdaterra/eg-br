import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export function useAnimations() {
  const animationsReady = ref(false)
  let ctx: gsap.Context
  let resizeObserver: ResizeObserver

  // Initialize GSAP context
  const initAnimations = () => {
    // Clear previous context
    if (ctx) ctx.revert()

    // Create new context
    ctx = gsap.context(() => {
      // Hero section animations
      initHeroAnimations()

      // Section reveal animations
      initSectionRevealAnimations()

      // Activity cards animations
      initActivityCardAnimations()

      // Gallery animations
      initGalleryAnimations()

      // Floating orbs animation
      initFloatingOrbs()

      // Parallax effects
      initParallaxEffects()
    })

    animationsReady.value = true
  }

  // Hero section animations
  const initHeroAnimations = () => {
    const heroTimeline = gsap.timeline({ delay: 0.5 })

    // Animate hero title
    heroTimeline.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // Animate hero subtitle
    heroTimeline.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')

    // Animate hero buttons
    heroTimeline.from('.hero-buttons .btn-glass', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4')

    // Animate glass orbs
    heroTimeline.from('.glass-orb', {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.5)'
    }, '-=1')
  }

  // Section reveal animations
  const initSectionRevealAnimations = () => {
    // Animate sections on scroll
    gsap.utils.toArray('.section-animate').forEach((section: Element) => {
      gsap.fromTo(section,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true
          }
        }
      )
    })

    // Animate section titles
    gsap.utils.toArray('.section-title-animate').forEach((title: Element) => {
      gsap.fromTo(title,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            once: true
          }
        }
      )
    })
  }

  // Activity cards animations
  const initActivityCardAnimations = () => {
    // Stagger animation for activity cards
    gsap.fromTo('.activity-card-animate',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.activities-grid',
          start: 'top 75%',
          once: true
        }
      }
    )

    // Hover effect for activity cards
    gsap.utils.toArray('.activity-card-animate').forEach((card: Element) => {
      const hoverTimeline = gsap.timeline({ paused: true })

      hoverTimeline.to(card, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out'
      })

      card.addEventListener('mouseenter', () => hoverTimeline.play())
      card.addEventListener('mouseleave', () => hoverTimeline.reverse())
    })
  }

  // Gallery animations
  const initGalleryAnimations = () => {
    // Gallery filter tabs animation
    gsap.fromTo('.gallery-filter-tab',
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gallery-filters',
          start: 'top 80%',
          once: true
        }
      }
    )

    // Gallery items stagger animation
    gsap.fromTo('.gallery-item-animate',
      {
        scale: 0.9,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 75%',
          once: true
        }
      }
    )
  }

  // Floating orbs animation
  const initFloatingOrbs = () => {
    gsap.utils.toArray('.glass-orb').forEach((orb: Element, index: number) => {
      const duration = 6 + index * 2 // Different durations for variety

      gsap.to(orb, {
        y: 'random(-20, 20)',
        x: 'random(-10, 10)',
        rotation: 'random(-5, 5)',
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      })
    })
  }

  // Parallax effects
  const initParallaxEffects = () => {
    // Parallax for hero elements
    gsap.utils.toArray('.parallax-element').forEach((element: Element) => {
      const speed = element.getAttribute('data-parallax-speed') || '0.5'

      gsap.to(element, {
        yPercent: -50 * parseFloat(speed),
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // Parallax for glass orbs
    gsap.utils.toArray('.glass-orb').forEach((orb: Element, index: number) => {
      const speed = 0.3 + (index * 0.1)

      gsap.to(orb, {
        yPercent: -30 * speed,
        xPercent: -10 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: orb,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })
  }

  // Animate page transition
  const animatePageTransition = (element: Element, isIn: boolean = true) => {
    const direction = isIn ? 1 : -1

    gsap.fromTo(element,
      {
        opacity: isIn ? 0 : 1,
        y: isIn ? 30 : -30
      },
      {
        opacity: isIn ? 1 : 0,
        y: isIn ? 0 : -30,
        duration: 0.5,
        ease: 'power2.inOut'
      }
    )
  }

  // Animate number counting
  const animateNumber = (element: Element, targetNumber: number, duration: number = 2) => {
    const obj = { value: 0 }

    gsap.to(obj, {
      value: targetNumber,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (element instanceof HTMLElement) {
          element.textContent = Math.floor(obj.value).toString()
        }
      }
    })
  }

  // Animate gallery filter change
  const animateGalleryFilter = (newItems: Element[]) => {
    // Fade out current items
    gsap.to('.gallery-item-animate', {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        // Animate in new items
        gsap.fromTo(newItems,
          {
            opacity: 0,
            scale: 0.9
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power2.out'
          }
        )
      }
    })
  }

  // Cleanup animations
  const cleanupAnimations = () => {
    if (ctx) {
      ctx.revert()
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  // Refresh ScrollTrigger on resize
  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh()
  }

  onMounted(() => {
    // Wait for next tick to ensure DOM is ready
    nextTick(() => {
      initAnimations()

      // Set up resize observer for responsive updates
      resizeObserver = new ResizeObserver(() => {
        refreshScrollTrigger()
      })

      resizeObserver.observe(document.body)
    })

    // Add keyboard listener for gallery lightbox
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Handle lightbox close
        const lightbox = document.querySelector('.lightbox')
        if (lightbox) {
          gsap.to(lightbox, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            onComplete: () => {
              // Remove lightbox from DOM
              lightbox.remove()
            }
          })
        }
      }
    })
  })

  onUnmounted(() => {
    cleanupAnimations()
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    animationsReady,
    initAnimations,
    animatePageTransition,
    animateNumber,
    animateGalleryFilter,
    refreshScrollTrigger,
    cleanupAnimations
  }
}