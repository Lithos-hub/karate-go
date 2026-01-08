<template>
  <section class="LandingCTA">
    <div class="LandingCTA__container">
      <div class="LandingCTA__content">
        <div class="LandingCTA__badge">
          <Icon name="lucide:sparkles" class="LandingCTA__badge-icon" />
          <span>Comienza tu aprendizaje</span>
        </div>

        <h2 class="LandingCTA__title">
          ¿Listo para profundizar en el
          <span class="LandingCTA__title-highlight">Karate-Do</span>?
        </h2>

        <p class="LandingCTA__description">
          Explora todo el contenido disponible y comienza tu viaje de
          aprendizaje en el arte marcial japonés. Sin registros, sin
          complicaciones.
        </p>

        <div class="LandingCTA__actions">
          <UButton
            to="/site/home"
            size="xl"
            icon="lucide:arrow-right"
            trailing
            variant="solid"
            color="primary"
            class="LandingCTA__button"
          >
            Explorar ahora
          </UButton>

          <div class="LandingCTA__stats">
            <div class="LandingCTA__stat">
              <Icon name="lucide:users" class="LandingCTA__stat-icon" />
              <span class="LandingCTA__stat-text">Acceso gratuito</span>
            </div>
            <div class="LandingCTA__stat">
              <Icon name="lucide:infinity" class="LandingCTA__stat-icon" />
              <span class="LandingCTA__stat-text">Contenido ilimitado</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="LandingCTA__decoration LandingCTA__decoration--1"></div>
      <div class="LandingCTA__decoration LandingCTA__decoration--2"></div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.LandingCTA {
  @apply relative py-16;
  @apply sm:py-20;
  @apply lg:py-24;
  @apply bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900;
  @apply overflow-hidden;
}

.LandingCTA__container {
  @apply relative z-10;
  @apply max-w-5xl mx-auto px-4;
  @apply sm:px-6;
  @apply lg:px-8;
}

.LandingCTA__content {
  @apply text-center space-y-6;
  @apply sm:space-y-8;
}

.LandingCTA__badge {
  @apply inline-flex items-center gap-2;
  @apply px-4 py-2;
  @apply bg-white/10 text-white;
  @apply rounded-full;
  @apply text-sm font-medium;
  @apply border border-white/20;
  @apply backdrop-blur-sm;
}

.LandingCTA__badge-icon {
  @apply w-4 h-4;
}

.LandingCTA__title {
  @apply text-3xl font-bold text-white;
  @apply sm:text-4xl;
  @apply lg:text-5xl;
  @apply xl:text-6xl;
  @apply tracking-tight;
  @apply leading-tight;
}

.LandingCTA__title-highlight {
  @apply text-primary;
  background: linear-gradient(135deg, var(--color-primary) 0%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.LandingCTA__description {
  @apply text-base text-stone-300;
  @apply sm:text-lg;
  @apply lg:text-xl;
  @apply max-w-2xl mx-auto;
  @apply leading-relaxed;
}

.LandingCTA__actions {
  @apply flex flex-col items-center gap-6;
  @apply pt-4;
}

.LandingCTA__button {
  @apply shadow-2xl shadow-primary/30;
  @apply hover:shadow-primary/50;
  @apply transition-all duration-300;
  @apply hover:scale-105;
}

.LandingCTA__stats {
  @apply flex flex-wrap items-center justify-center gap-6;
  @apply sm:gap-8;
}

.LandingCTA__stat {
  @apply flex items-center gap-2;
  @apply text-stone-300;
}

.LandingCTA__stat-icon {
  @apply w-5 h-5 text-primary;
}

.LandingCTA__stat-text {
  @apply text-sm font-medium;
  @apply sm:text-base;
}

.LandingCTA__decoration {
  @apply absolute;
  @apply rounded-full;
  @apply blur-3xl;
  @apply opacity-20;
}

.LandingCTA__decoration--1 {
  @apply w-96 h-96;
  @apply bg-primary;
  @apply top-0 right-0;
  @apply translate-x-1/2 -translate-y-1/2;
}

.LandingCTA__decoration--2 {
  @apply w-80 h-80;
  @apply bg-secondary;
  @apply bottom-0 left-0;
  @apply -translate-x-1/2 translate-y-1/2;
}
</style>
