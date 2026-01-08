<template>
  <section class="LandingFeatures">
    <div class="LandingFeatures__container">
      <div class="LandingFeatures__content">
        <span class="LandingFeatures__badge">Características</span>
        <h2 class="LandingFeatures__title">
          Una plataforma <span class="LandingFeatures__title-highlight">completa</span>
          para aprender
        </h2>
        <p class="LandingFeatures__description">
          Diseñada pensando en la experiencia del usuario y el aprendizaje
          efectivo
        </p>

        <div class="LandingFeatures__list">
          <div class="LandingFeatures__feature">
            <div class="LandingFeatures__feature-icon-wrapper">
              <Icon name="lucide:search" class="LandingFeatures__feature-icon" />
            </div>
            <div class="LandingFeatures__feature-content">
              <h3 class="LandingFeatures__feature-title">Búsqueda Avanzada</h3>
              <p class="LandingFeatures__feature-text">
                Encuentra rápidamente cualquier técnica, término o concepto con
                nuestro potente buscador.
              </p>
            </div>
          </div>

          <div class="LandingFeatures__feature">
            <div class="LandingFeatures__feature-icon-wrapper">
              <Icon name="lucide:bookmark" class="LandingFeatures__feature-icon" />
            </div>
            <div class="LandingFeatures__feature-content">
              <h3 class="LandingFeatures__feature-title">Contenido Organizado</h3>
              <p class="LandingFeatures__feature-text">
                Información estructurada por categorías para facilitar tu
                navegación y aprendizaje.
              </p>
            </div>
          </div>

          <div class="LandingFeatures__feature">
            <div class="LandingFeatures__feature-icon-wrapper">
              <Icon name="lucide:smartphone" class="LandingFeatures__feature-icon" />
            </div>
            <div class="LandingFeatures__feature-content">
              <h3 class="LandingFeatures__feature-title">100% Responsivo</h3>
              <p class="LandingFeatures__feature-text">
                Accede desde cualquier dispositivo: computadora, tablet o
                móvil, en cualquier momento.
              </p>
            </div>
          </div>

          <div class="LandingFeatures__feature">
            <div class="LandingFeatures__feature-icon-wrapper">
              <Icon name="lucide:zap" class="LandingFeatures__feature-icon" />
            </div>
            <div class="LandingFeatures__feature-content">
              <h3 class="LandingFeatures__feature-title">Actualización Continua</h3>
              <p class="LandingFeatures__feature-text">
                Contenido revisado y ampliado regularmente con nueva
                información y recursos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="LandingFeatures__visual">
        <div class="LandingFeatures__visual-card LandingFeatures__visual-card--1">
          <Icon name="lucide:book-open" class="LandingFeatures__visual-icon" />
          <div class="LandingFeatures__visual-text">
            <span class="LandingFeatures__visual-label">Artículos</span>
            <span class="LandingFeatures__visual-value">100+</span>
          </div>
        </div>

        <div class="LandingFeatures__visual-card LandingFeatures__visual-card--2">
          <Icon name="lucide:layers" class="LandingFeatures__visual-icon" />
          <div class="LandingFeatures__visual-text">
            <span class="LandingFeatures__visual-label">Estilos</span>
            <span class="LandingFeatures__visual-value">15+</span>
          </div>
        </div>

        <div class="LandingFeatures__visual-card LandingFeatures__visual-card--3">
          <Icon name="lucide:graduation-cap" class="LandingFeatures__visual-icon" />
          <div class="LandingFeatures__visual-text">
            <span class="LandingFeatures__visual-label">Técnicas</span>
            <span class="LandingFeatures__visual-value">50+</span>
          </div>
        </div>

        <div class="LandingFeatures__visual-decoration"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.LandingFeatures {
  @apply relative py-16;
  @apply sm:py-20;
  @apply lg:py-24;
  @apply bg-white;
  @apply overflow-hidden;
}

.LandingFeatures__container {
  @apply max-w-7xl mx-auto px-4;
  @apply sm:px-6;
  @apply lg:px-8;
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12;
  @apply lg:gap-16;
  @apply items-center;
}

.LandingFeatures__content {
  @apply space-y-6;
}

.LandingFeatures__badge {
  @apply inline-block;
  @apply px-4 py-2;
  @apply bg-primary/10 text-primary;
  @apply rounded-full;
  @apply text-sm font-semibold;
  @apply border border-primary/20;
}

.LandingFeatures__title {
  @apply text-3xl font-bold text-stone-900;
  @apply sm:text-4xl;
  @apply lg:text-5xl;
  @apply tracking-tight;
  @apply leading-tight;
}

.LandingFeatures__title-highlight {
  @apply text-primary;
}

.LandingFeatures__description {
  @apply text-base text-stone-600;
  @apply sm:text-lg;
  @apply lg:text-xl;
  @apply leading-relaxed;
}

.LandingFeatures__list {
  @apply space-y-6;
  @apply pt-4;
}

.LandingFeatures__feature {
  @apply flex gap-4;
  @apply items-start;
}

.LandingFeatures__feature-icon-wrapper {
  @apply w-12 h-12;
  @apply bg-primary/10;
  @apply rounded-xl;
  @apply flex items-center justify-center;
  @apply flex-shrink-0;
}

.LandingFeatures__feature-icon {
  @apply w-6 h-6 text-primary;
}

.LandingFeatures__feature-content {
  @apply flex-1;
}

.LandingFeatures__feature-title {
  @apply text-lg font-bold text-stone-900 mb-1;
  @apply sm:text-xl;
}

.LandingFeatures__feature-text {
  @apply text-sm text-stone-600;
  @apply sm:text-base;
  @apply leading-relaxed;
}

.LandingFeatures__visual {
  @apply relative h-96;
  @apply lg:h-[500px];
}

.LandingFeatures__visual-card {
  @apply absolute;
  @apply bg-white;
  @apply rounded-2xl;
  @apply p-6;
  @apply shadow-xl;
  @apply border border-stone-200;
  @apply flex items-center gap-4;
  @apply transition-transform duration-300;
  @apply hover:scale-105;
  @apply hover:shadow-2xl;
}

.LandingFeatures__visual-card--1 {
  @apply top-0 left-0;
  @apply w-48;
  animation: float-1 6s ease-in-out infinite;
}

.LandingFeatures__visual-card--2 {
  @apply top-32 right-8;
  @apply w-44;
  animation: float-2 7s ease-in-out infinite;
}

.LandingFeatures__visual-card--3 {
  @apply bottom-16 left-12;
  @apply w-52;
  animation: float-3 8s ease-in-out infinite;
}

@keyframes float-1 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-2 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
}

@keyframes float-3 {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.LandingFeatures__visual-icon {
  @apply w-10 h-10 text-primary;
  @apply flex-shrink-0;
}

.LandingFeatures__visual-text {
  @apply flex flex-col;
}

.LandingFeatures__visual-label {
  @apply text-sm text-stone-600 font-medium;
}

.LandingFeatures__visual-value {
  @apply text-2xl font-bold text-stone-900;
}

.LandingFeatures__visual-decoration {
  @apply absolute;
  @apply w-64 h-64;
  @apply bg-gradient-to-br from-primary/20 to-secondary/20;
  @apply rounded-full;
  @apply blur-3xl;
  @apply top-1/2 left-1/2;
  @apply -translate-x-1/2 -translate-y-1/2;
  @apply -z-10;
}
</style>
