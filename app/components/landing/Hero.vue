<template>
  <section class="LandingHero">
    <!-- Background Image -->
    <img
      src="/karatedo-kanji.png"
      alt="Karate-Do Kanji"
      class="LandingHero__bg"
    />

    <!-- Content -->
    <div class="LandingHero__content">
      <div class="LandingHero__badge">
        <Icon name="lucide:sparkles" class="LandingHero__badge-icon" />
        <span>Tu camino en el Karate comienza aquí</span>
      </div>

      <h1 class="LandingHero__title">
        <span class="LandingHero__title-highlight">KARATE-GO</span>
      </h1>

      <p class="LandingHero__subtitle">
        La plataforma definitiva para explorar el arte marcial japonés
      </p>

      <p class="LandingHero__description">
        Descubre estilos tradicionales, escuelas históricas, técnicas
        fundamentales, terminología japonesa y glosarios completos para
        profundizar en el conocimiento del Karate.
      </p>

      <div class="LandingHero__actions">
        <UButton
          to="/site/home"
          size="xl"
          icon="lucide:arrow-right"
          trailing
          variant="solid"
          color="primary"
          class="LandingHero__button-primary"
        >
          Comenzar ahora
        </UButton>

        <UButton
          to="#discover"
          size="xl"
          icon="lucide:compass"
          variant="outline"
          class="LandingHero__button-secondary"
        >
          Explorar contenido
        </UButton>
      </div>

      <!-- Stats -->
      <div class="LandingHero__stats">
        <div class="LandingHero__stat">
          <Icon name="lucide:book-open" class="LandingHero__stat-icon" />
          <div class="LandingHero__stat-content">
            <span class="LandingHero__stat-value">100+</span>
            <span class="LandingHero__stat-label">Artículos</span>
          </div>
        </div>

        <div class="LandingHero__stat">
          <Icon name="lucide:layers" class="LandingHero__stat-icon" />
          <div class="LandingHero__stat-content">
            <span class="LandingHero__stat-value">15+</span>
            <span class="LandingHero__stat-label">Estilos</span>
          </div>
        </div>

        <div class="LandingHero__stat">
          <Icon name="lucide:graduation-cap" class="LandingHero__stat-icon" />
          <div class="LandingHero__stat-content">
            <span class="LandingHero__stat-value">50+</span>
            <span class="LandingHero__stat-label">Técnicas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.LandingHero {
  @apply relative min-h-screen flex items-center justify-center;
  @apply px-4 py-20;
  @apply sm:px-6 sm:py-24;
  @apply lg:px-8 lg:py-32;
  @apply overflow-hidden;
}

.LandingHero__bg {
  @apply fixed left-1/2 top-1/2;
  @apply -translate-x-1/2 -translate-y-1/2;
  @apply opacity-25 h-screen w-auto;
  @apply pointer-events-none select-none;
}

.LandingHero__content {
  @apply relative z-10 w-full max-w-5xl;
  @apply flex flex-col items-center text-center;
  @apply space-y-6;
  @apply sm:space-y-8;
}

.LandingHero__badge {
  @apply inline-flex items-center gap-2;
  @apply px-4 py-2;
  @apply bg-primary/10 text-primary;
  @apply rounded-full;
  @apply text-sm font-medium;
  @apply border border-primary/20;
  @apply backdrop-blur-sm;
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.LandingHero__badge-icon {
  @apply w-4 h-4;
}

.LandingHero__title {
  @apply text-5xl font-black tracking-tight;
  @apply sm:text-6xl;
  @apply md:text-7xl;
  @apply lg:text-8xl;
  @apply leading-none;
  animation: fade-in 0.6s ease-out 0.1s forwards;
  opacity: 0;
}

.LandingHero__title-highlight {
  @apply text-primary;
  @apply inline-block;
  @apply transition-all duration-300;
  @apply hover:scale-105;
  background: linear-gradient(135deg, var(--color-primary) 0%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.LandingHero__subtitle {
  @apply text-xl font-semibold text-stone-900;
  @apply sm:text-2xl;
  @apply md:text-3xl;
  @apply lg:text-4xl;
  @apply max-w-3xl;
  animation: fade-in 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.LandingHero__description {
  @apply text-base font-normal text-stone-700;
  @apply sm:text-lg;
  @apply md:text-xl;
  @apply max-w-2xl;
  @apply leading-relaxed;
  animation: fade-in 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

.LandingHero__actions {
  @apply flex flex-col sm:flex-row items-center gap-4;
  @apply pt-4;
  animation: fade-in 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

.LandingHero__button-primary {
  @apply shadow-lg shadow-primary/30;
  @apply hover:shadow-xl hover:shadow-primary/40;
  @apply transition-all duration-300;
}

.LandingHero__button-secondary {
  @apply hover:bg-stone-100;
  @apply transition-all duration-300;
}

.LandingHero__stats {
  @apply grid grid-cols-3 gap-6;
  @apply sm:gap-8;
  @apply md:gap-12;
  @apply pt-12;
  @apply border-t border-stone-300;
  @apply w-full max-w-2xl;
  animation: fade-in 0.6s ease-out 0.5s forwards;
  opacity: 0;
}

.LandingHero__stat {
  @apply flex flex-col items-center gap-2;
  @apply sm:flex-row sm:gap-3;
  @apply transition-transform duration-300;
  @apply hover:scale-105;
}

.LandingHero__stat-icon {
  @apply w-8 h-8 text-primary;
  @apply sm:w-10 sm:h-10;
}

.LandingHero__stat-content {
  @apply flex flex-col items-center sm:items-start;
}

.LandingHero__stat-value {
  @apply text-2xl font-bold text-stone-900;
  @apply sm:text-3xl;
}

.LandingHero__stat-label {
  @apply text-xs text-stone-600;
  @apply sm:text-sm;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
