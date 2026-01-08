<template>
  <!-- Overlay (Mobile and tablet only) -->
  <Transition name="fade">
    <div
      v-if="!isSidebarCollapsed && (isMobile || isTablet)"
      data-testid="SiteSidebar__overlay"
      class="SiteSidebar-container__overlay"
      @click="toggleSidebar"
    />
  </Transition>

  <div
    data-testid="SiteSidebar__container"
    class="SiteSidebar-container"
    :class="{
      'SiteSidebar-container--collapsed':
        isSidebarCollapsed && (isMobile || isTablet)
    }"
    @mouseleave="handleSidebarLeave"
  >
    <!-- Main sidebar (left side) -->
    <div class="SiteSidebar-main">
      <!-- Main categories -->
      <div class="SiteSidebar__categories">
        <button
          v-for="section in menuItems"
          :key="section.id"
          class="SiteSidebar__category"
          :class="{
            'SiteSidebar__category--active': activeCategory === section.id
          }"
          @mouseenter="handleCategoryHover(section.id)"
          @click="handleCategoryClick(section.id)"
        >
          <UIcon :name="section.icon" class="SiteSidebar__category-icon" />
          <small class="SiteSidebar__category-label">{{
            section.label.toUpperCase()
          }}</small>
        </button>
      </div>
    </div>

    <!-- Expandable secondary menu (right side) -->
    <!-- Show if there's an active category and hover on desktop or if not desktop -->
    <Transition name="slide">
      <div
        v-if="(isHovering && isDesktop) || (activeCategory && !isDesktop)"
        data-testid="SiteSidebar__expandable"
        class="SiteSidebar-expandable"
      >
        <div class="SiteSidebar-expandable__menu">
          <RouterLink
            v-for="item in getActiveCategoryItems()"
            :key="item.to"
            :to="item.to"
            class="SiteSidebar-expandable__item"
            @click="handleNavigation"
          >
            <small class="SiteSidebar-expandable__label">{{
              item.label
            }}</small>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// composables
const route = useRoute()
const { isMobile, isDesktop, isTablet } = useDeviceScreen()

// stores
const isSidebarCollapsed = useState('isSidebarCollapsed', () => true)

// refs
const activeCategory = ref<string | null>(null)
const routeBasedCategory = ref<string | null>(null)
const isHovering = ref(false)

// constants
const menuItems = [
  {
    id: 'estilos',
    label: 'Estilos',
    icon: 'lucide:flame',
    to: '/site/estilos',
    items: [
      {
        id: 'shito-ryu',
        label: 'Shito-Ryu',
        to: '/site/estilos/shito-ryu'
      },
      {
        id: 'wado-ryu',
        label: 'Wado-Ryu',
        to: '/site/estilos/wado-ryu'
      },
      {
        id: 'goju-ryu',
        label: 'Goju-Ryu',
        to: '/site/estilos/goju-ryu'
      },
      {
        id: 'shotokan',
        label: 'Shotokan',
        to: '/site/estilos/shotokan'
      }
    ]
  },
  {
    id: 'cinturones',
    label: 'Cinturones',
    icon: 'lucide:award',
    to: '/site/cinturones',
    items: [
      {
        id: 'sistema-kyu',
        label: 'Sistema Kyu',
        to: '/site/cinturones/sistema-kyu'
      },
      {
        id: 'sistema-dan',
        label: 'Sistema Dan',
        to: '/site/cinturones/sistema-dan'
      },
      {
        id: 'significados',
        label: 'Significados',
        to: '/site/cinturones/significados'
      }
    ]
  },
  {
    id: 'tecnicas',
    label: 'Técnicas',
    icon: 'lucide:hand',
    to: '/site/tecnicas',
    items: [
      {
        id: 'kihon',
        label: 'Kihon (Fundamentos)',
        to: '/site/tecnicas/kihon'
      },
      {
        id: 'tsuki',
        label: 'Tsuki (Puños)',
        to: '/site/tecnicas/tsuki'
      },
      {
        id: 'geri',
        label: 'Geri (Patadas)',
        to: '/site/tecnicas/geri'
      },
      {
        id: 'uke',
        label: 'Uke (Bloqueos)',
        to: '/site/tecnicas/uke'
      },
      {
        id: 'kumite',
        label: 'Kumite (Combate)',
        to: '/site/tecnicas/kumite'
      }
    ]
  },
  {
    id: 'katas',
    label: 'Katas',
    icon: 'lucide:workflow',
    to: '/site/katas',
    items: [
      {
        id: 'heian-pinan',
        label: 'Heian/Pinan',
        to: '/site/katas/heian-pinan'
      },
      {
        id: 'superiores',
        label: 'Katas Superiores',
        to: '/site/katas/superiores'
      },
      {
        id: 'bunkai',
        label: 'Bunkai (Aplicaciones)',
        to: '/site/katas/bunkai'
      }
    ]
  },
  {
    id: 'terminologia',
    label: 'Terminología',
    icon: 'lucide:languages',
    to: '/site/terminologia',
    items: [
      {
        id: 'comandos',
        label: 'Comandos del Dojo',
        to: '/site/terminologia/comandos'
      },
      {
        id: 'numeros',
        label: 'Números',
        to: '/site/terminologia/numeros'
      },
      {
        id: 'conceptos',
        label: 'Conceptos Filosóficos',
        to: '/site/terminologia/conceptos'
      }
    ]
  },
  {
    id: 'glosario',
    label: 'Glosario',
    icon: 'lucide:book-a',
    to: '/site/glosario',
    items: [
      {
        id: 'buscar',
        label: 'Buscar Términos',
        to: '/site/glosario/buscar'
      },
      {
        id: 'categorias',
        label: 'Por Categorías',
        to: '/site/glosario/categorias'
      }
    ]
  }
]

// functions
const handleCategoryHover = (categoryId: string) => {
  // Desktop only: use hover to show menu
  if (!isDesktop.value) {
    return
  }
  isHovering.value = true
  activeCategory.value = categoryId
}

const handleCategoryClick = (categoryId: string) => {
  // Mobile/tablet: use click to toggle menu
  if (isDesktop.value) {
    return
  }
  if (activeCategory.value === categoryId) {
    activeCategory.value = null
  } else {
    activeCategory.value = categoryId
  }
}

const handleSidebarLeave = () => {
  // Desktop only: collapse menu when leaving sidebar
  if (!isDesktop.value) {
    return
  }
  isHovering.value = false
  // Return to route-based active category
  activeCategory.value = routeBasedCategory.value
}

const getActiveCategoryItems = () => {
  const category = menuItems.find((item) => item.id === activeCategory.value)
  return category?.items || []
}

function toggleSidebar() {
  // Only allow toggle on mobile and tablet
  if (isDesktop.value) {
    return
  }
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

function handleNavigation() {
  // Desktop: collapse secondary menu on navigation
  if (isDesktop.value) {
    isHovering.value = false
    activeCategory.value = routeBasedCategory.value
    return
  }
  // Mobile/tablet: collapse sidebar on navigation
  isSidebarCollapsed.value = true
}

// watchers
watchEffect(() => {
  const matchingCategories = menuItems
    .map((category) => ({
      category,
      matchedItem: category.items.find((menuItem) =>
        route.path.startsWith(menuItem.to)
      )
    }))
    .filter((result) => result.matchedItem)

  if (matchingCategories.length > 0) {
    // If multiple matches, take the one with the longest match (most specific)
    const bestMatch = matchingCategories.reduce((prev, curr) => {
      const prevLength = prev.matchedItem?.to.length || 0
      const currLength = curr.matchedItem?.to.length || 0
      return currLength > prevLength ? curr : prev
    })

    routeBasedCategory.value = bestMatch.category.id

    // Only update activeCategory if there's no active hover (on desktop)
    // On mobile/tablet always update activeCategory
    if (!isHovering.value || !isDesktop.value) {
      activeCategory.value = routeBasedCategory.value
    }
  } else {
    routeBasedCategory.value = null

    // Only update activeCategory if there's no active hover (on desktop)
    if (!isHovering.value || !isDesktop.value) {
      activeCategory.value = null
    }
  }
})

// Keep sidebar expanded on desktop, collapsed on mobile and tablet
watchEffect(() => {
  isSidebarCollapsed.value = !isDesktop.value
})
</script>

<style scoped>
@reference '~/assets/css/main.css';

.SiteSidebar-container {
  @apply fixed top-16 left-0 z-50 flex h-full max-h-[calc(100vh-4rem)] lg:fixed lg:top-16 lg:left-0;
  @apply transition-transform duration-400 ease-in-out;
}

.SiteSidebar-container--collapsed {
  @apply -translate-x-full;
}

/* Narrow main bar */
.SiteSidebar-main {
  @apply bg-stone-800 relative z-50 flex h-full w-24 flex-col;
}

.SiteSidebar__categories {
  @apply flex flex-1 flex-col;
}

.SiteSidebar__category {
  @apply relative flex h-24 flex-col items-center justify-center gap-2;
  @apply transition-all duration-300 ease-in-out;
  @apply cursor-pointer border-r-2 border-transparent;
}

.SiteSidebar__category:hover {
  .SiteSidebar__category-icon {
    @apply scale-125;
  }
}

.SiteSidebar__category-icon {
  @apply text-stone-100 h-6 w-6;
  @apply transition-transform duration-300 ease-in-out;
}

.SiteSidebar__category-label {
  @apply text-stone-100 text-center text-[9px] font-extralight tracking-wider;
}

.SiteSidebar__category--active {
  @apply text-stone-100 bg-primary/10 border-primary border-r-2;

  &:deep(*) {
    @apply text-primary;
  }
}

/* Expandable secondary menu */
.SiteSidebar-expandable {
  @apply bg-stone-800 border-stone-300 z-40 flex h-full w-48 flex-col border-r;
}

.SiteSidebar-expandable__menu {
  @apply flex flex-1 flex-col gap-2 overflow-y-auto p-2;
}

.SiteSidebar-expandable__item {
  @apply flex items-center justify-start gap-2 p-2;
  @apply transition-all duration-250 ease-in-out;
  @apply rounded-md;
}

.SiteSidebar-expandable__item:hover {
  @apply bg-primary/10 translate-x-1;
}

.SiteSidebar-expandable__icon {
  @apply text-stone-100 h-5 w-5;
}

.SiteSidebar-expandable__label {
  @apply text-stone-100 text-xs;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  @apply transition-transform duration-200 ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  @apply -translate-x-full opacity-0;
}
.slide-enter-to {
  @apply translate-x-0 opacity-100;
}
</style>
