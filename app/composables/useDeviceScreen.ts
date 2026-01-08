const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export const useDeviceScreen = () => {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  const updateDeviceType = () => {
    if (import.meta.client) {
      const width = window.innerWidth

      isMobile.value = width < MOBILE_BREAKPOINT
      isTablet.value = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT
      isDesktop.value = width >= TABLET_BREAKPOINT
    }
  }

  onMounted(() => {
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('resize', updateDeviceType)
    }
  })

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}
