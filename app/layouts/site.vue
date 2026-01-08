<template>
  <div class="site-layout">
    <SiteNavbar />

    <div class="site-layout__content">
      <SiteSidebar />

      <main class="site-layout__main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.site-layout {
  @apply flex flex-col;
}

.site-layout__content {
  @apply flex h-screen;
}

.site-layout__main {
  @apply min-w-0 flex-1 py-20 transition-all duration-300;
}
</style>
