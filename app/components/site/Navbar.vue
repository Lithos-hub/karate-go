<template>
  <header class="SiteNavbar">
    <nav class="SiteNavbar__content">
      <div class="SiteNavbar__left-side">
        <UButton
          v-if="!isDesktop"
          icon="lucide:menu"
          size="lg"
          variant="ghost"
          color="neutral"
          data-testid="SiteNavbar__toggle-sidebar-button"
          aria-label="Toggle sidebar"
          @click="toggleSidebar"
        />
        <!-- Logo -->
        <RouterLink to="/" class="SiteNavbar__logo">
          <span class="SiteNavbar__logo-text"
            >Karate-<span class="SiteNavbar__logo-text-highlight"
              >Go</span
            ></span
          >
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// composables
const { isDesktop } = useDeviceScreen()

// stores
const isSidebarCollapsed = useState('isSidebarCollapsed', () => false)

// functions
function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<style scoped>
@reference '~/assets/css/main.css';

.SiteNavbar {
  @apply border-stone-500 bg-stone-800 fixed top-0 z-50 h-16 w-full border-b;
}

.SiteNavbar__content {
  @apply flex h-full items-center justify-between gap-5 p-2.5 md:px-5;
}

.SiteNavbar__left-side {
  @apply flex items-center justify-start gap-5;
}

.SiteNavbar__left-side__toggle-button {
  @apply flex cursor-pointer flex-col items-center justify-center rounded-full p-2.5;
}

.SiteNavbar__logo-text {
  @apply text-primary text-xl font-bold;
}
</style>
