<template>
  <div class="Landing">
    <!-- Hero Section -->
    <section class="Landing__hero">
      <!-- Background Image -->
      <img
        src="/karatedo-kanji.png"
        alt="Background"
        class="Landing__hero-bg"
      />

      <!-- Content -->
      <div class="Landing__hero-content">
        <h1 class="Landing__hero-title">
          <span class="Landing__hero-title-text">KARATE-GO</span>
        </h1>

        <p class="Landing__hero-subtitle">
          Explora, aprende y disfruta del Karate.
        </p>

        <p class="Landing__hero-description">
          Descubre estilos tradicionales, escuelas históricas, técnicas
          fundamentales, terminología japonesa y glosarios completos para
          profundizar en el conocimiento del Karate.
        </p>

        <UButton
          to="/home"
          size="xl"
          class="Landing__hero-button"
          icon="lucide:arrow-right"
          variant="solid"
          :style="{
            color: 'white'
          }"
          >Empezar</UButton
        >
      </div>
    </section>

    <!-- Footer -->
    <footer class="Landing__footer">
      <div class="Landing__footer-content">
        <p class="Landing__footer-text">© 2025 Karate-Go</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.Landing {
  @apply min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200;
}

.Landing__hero {
  @apply relative min-h-screen flex items-center justify-center overflow-hidden;
  @apply px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-20 lg:py-28;
  @apply lg:justify-start lg:items-center;
}

.Landing__hero-bg {
  @apply absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2;
  @apply w-[280px] opacity-10 sm:w-[350px] sm:opacity-15;
  @apply md:w-[420px] md:opacity-20;
  @apply lg:left-auto lg:right-10 lg:translate-x-0 lg:w-[550px] lg:opacity-25;
  @apply xl:right-20 xl:w-[650px];
  @apply transition-opacity duration-700;
}

.Landing__hero-content {
  @apply relative z-10 w-full max-w-7xl text-center;
  @apply lg:text-left lg:max-w-3xl xl:max-w-4xl;
}

.Landing__hero-title {
  @apply text-5xl font-black mb-4 tracking-tight;
  @apply sm:text-6xl sm:mb-5;
  @apply md:text-7xl md:mb-6;
  @apply lg:text-8xl lg:mb-8;
  @apply xl:text-9xl;
  @apply leading-none;
}

.Landing__hero-title-text {
  @apply text-primary;
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl;
  @apply inline-block;
  @apply transition-all duration-300;
}

.Landing__hero-subtitle {
  @apply text-lg font-semibold text-stone-900 mb-6;
  @apply sm:text-xl sm:mb-7;
  @apply md:text-2xl md:mb-8;
  @apply lg:text-3xl lg:mb-10;
  @apply max-w-2xl mx-auto lg:mx-0;
}

.Landing__hero-description {
  @apply text-sm font-normal text-stone-700 mb-8;
  @apply sm:text-base sm:mb-10;
  @apply md:text-lg md:mb-12;
  @apply lg:text-xl;
  @apply max-w-xl mx-auto lg:mx-0;
}

.Landing__hero-button {
  @apply inline-flex items-center gap-2;
}
.Landing__footer {
  @apply py-4 px-4 bg-gradient-to-r from-black/95 to-stone-900/95;
  @apply fixed bottom-0 left-0 right-0;
  @apply backdrop-blur-sm;
  @apply border-t border-white/10;
}

.Landing__footer-content {
  @apply max-w-7xl mx-auto text-center;
}

.Landing__footer-text {
  @apply text-xs sm:text-sm font-medium text-stone-300;
  @apply tracking-wide;
}
</style>
