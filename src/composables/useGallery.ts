import { ref, computed } from 'vue'
import { galleryCategories, type GalleryImage, type GalleryCategory } from '@/assets/data/gallery'

export function useGallery() {
  const selectedCategory = ref('todos')
  const selectedImage = ref<GalleryImage | null>(null)
  const loadedImages = ref<Set<string>>(new Set())
  const currentPage = ref(1)
  const imagesPerPage = 12

  // Get current category data
  const currentCategory = computed(() => {
    return galleryCategories.find(cat => cat.id === selectedCategory.value) || galleryCategories[0]
  })

  // Get paginated images for current category
  const paginatedImages = computed(() => {
    const images = currentCategory.value.images
    const startIndex = (currentPage.value - 1) * imagesPerPage
    const endIndex = startIndex + imagesPerPage
    return images.slice(startIndex, endIndex)
  })

  // Get featured images for hero
  const featuredImages = computed(() => {
    return currentCategory.value.images.filter(img => img.featured).slice(0, 3)
  })

  // Check if there are more images to load
  const hasMoreImages = computed(() => {
    return currentPage.value * imagesPerPage < currentCategory.value.images.length
  })

  // Total pages for current category
  const totalPages = computed(() => {
    return Math.ceil(currentCategory.value.images.length / imagesPerPage)
  })

  // Change category
  const selectCategory = (categoryId: string) => {
    if (selectedCategory.value !== categoryId) {
      selectedCategory.value = categoryId
      currentPage.value = 1
      selectedImage.value = null
    }
  }

  // Load more images
  const loadMoreImages = () => {
    if (hasMoreImages.value) {
      currentPage.value++
    }
  }

  // Select image for lightbox
  const selectImage = (image: GalleryImage) => {
    selectedImage.value = image
  }

  // Close lightbox
  const closeLightbox = () => {
    selectedImage.value = null
  }

  // Navigate to previous image
  const previousImage = () => {
    if (!selectedImage.value) return

    const currentIndex = currentCategory.value.images.findIndex(
      img => img.id === selectedImage.value?.id
    )

    if (currentIndex > 0) {
      selectedImage.value = currentCategory.value.images[currentIndex - 1]
    } else {
      // Wrap to last image
      selectedImage.value = currentCategory.value.images[currentCategory.value.images.length - 1]
    }
  }

  // Navigate to next image
  const nextImage = () => {
    if (!selectedImage.value) return

    const currentIndex = currentCategory.value.images.findIndex(
      img => img.id === selectedImage.value?.id
    )

    if (currentIndex < currentCategory.value.images.length - 1) {
      selectedImage.value = currentCategory.value.images[currentIndex + 1]
    } else {
      // Wrap to first image
      selectedImage.value = currentCategory.value.images[0]
    }
  }

  // Mark image as loaded
  const markImageLoaded = (imageId: string) => {
    loadedImages.value.add(imageId)
  }

  // Check if image is loaded
  const isImageLoaded = (imageId: string) => {
    return loadedImages.value.has(imageId)
  }

  // Get image src with fallback
  const getImageSrc = (image: GalleryImage) => {
    return `/src/assets/images/${image.category}/${image.src}`
  }

  // Get image path for lazy loading
  const getImagePath = (image: GalleryImage) => {
    return new URL(getImageSrc(image), import.meta.url).href
  }

  // Keyboard navigation for lightbox
  const handleKeydown = (event: KeyboardEvent) => {
    if (!selectedImage.value) return

    switch (event.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowLeft':
        previousImage()
        break
      case 'ArrowRight':
        nextImage()
        break
    }
  }

  return {
    // State
    selectedCategory,
    selectedImage,
    loadedImages,
    currentPage,

    // Computed
    currentCategory,
    paginatedImages,
    featuredImages,
    hasMoreImages,
    totalPages,
    galleryCategories,

    // Methods
    selectCategory,
    loadMoreImages,
    selectImage,
    closeLightbox,
    previousImage,
    nextImage,
    markImageLoaded,
    isImageLoaded,
    getImageSrc,
    getImagePath,
    handleKeydown
  }
}