<template>
  <section class="LandingSummary">
    <div class="LandingSummary__container">
      <div class="LandingSummary__header">
        <span class="LandingSummary__badge">Sobre la plataforma</span>
        <h2 class="LandingSummary__title">
          Tu viaje en el <span class="LandingSummary__title-highlight">Karate-Do</span>
        </h2>
        <p class="LandingSummary__description">
          Karate-Go es una plataforma educativa diseñada para entusiastas,
          estudiantes y maestros del Karate. Aquí encontrarás recursos
          completos sobre la teoría, historia y filosofía del arte marcial
          japonés.
        </p>
      </div>

      <div class="LandingSummary__grid">
        <!-- Card 1 -->
        <div class="LandingSummary__card">
          <div class="LandingSummary__card-icon-wrapper">
            <Icon name="lucide:history" class="LandingSummary__card-icon" />
          </div>
          <h3 class="LandingSummary__card-title">Historia y Tradición</h3>
          <p class="LandingSummary__card-text">
            Explora los orígenes del Karate desde Okinawa hasta su expansión
            mundial, conoce a los maestros legendarios y las escuelas
            tradicionales.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="LandingSummary__card">
          <div class="LandingSummary__card-icon-wrapper">
            <Icon name="lucide:brain" class="LandingSummary__card-icon" />
          </div>
          <h3 class="LandingSummary__card-title">Conocimiento Profundo</h3>
          <p class="LandingSummary__card-text">
            Accede a información detallada sobre técnicas, katas, terminología
            japonesa y los fundamentos filosóficos del Karate-Do.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="LandingSummary__card">
          <div class="LandingSummary__card-icon-wrapper">
            <Icon name="lucide:compass" class="LandingSummary__card-icon" />
          </div>
          <h3 class="LandingSummary__card-title">Estilos y Escuelas</h3>
          <p class="LandingSummary__card-text">
            Descubre los diferentes estilos de Karate, sus características
            únicas y cómo se han desarrollado a lo largo de los años.
          </p>
        </div>

        <!-- Card 4 -->
        <div class="LandingSummary__card">
          <div class="LandingSummary__card-icon-wrapper">
            <Icon name="lucide:book-text" class="LandingSummary__card-icon" />
          </div>
          <h3 class="LandingSummary__card-title">Glosario Completo</h3>
          <p class="LandingSummary__card-text">
            Consulta términos japoneses, traducciones y explicaciones
            detalladas para comprender mejor el lenguaje del Karate.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.LandingSummary {
  @apply relative py-16;
  @apply sm:py-20;
  @apply lg:py-24;
  @apply bg-white;
}

.LandingSummary__container {
  @apply max-w-7xl mx-auto px-4;
  @apply sm:px-6;
  @apply lg:px-8;
}

.LandingSummary__header {
  @apply text-center mb-12;
  @apply sm:mb-16;
  @apply lg:mb-20;
  @apply space-y-4;
}

.LandingSummary__badge {
  @apply inline-block;
  @apply px-4 py-2;
  @apply bg-primary/10 text-primary;
  @apply rounded-full;
  @apply text-sm font-semibold;
  @apply border border-primary/20;
}

.LandingSummary__title {
  @apply text-3xl font-bold text-stone-900;
  @apply sm:text-4xl;
  @apply lg:text-5xl;
  @apply tracking-tight;
}

.LandingSummary__title-highlight {
  @apply text-primary;
}

.LandingSummary__description {
  @apply text-base text-stone-600;
  @apply sm:text-lg;
  @apply lg:text-xl;
  @apply max-w-3xl mx-auto;
  @apply leading-relaxed;
}

.LandingSummary__grid {
  @apply grid grid-cols-1 gap-6;
  @apply sm:grid-cols-2 sm:gap-8;
  @apply lg:gap-10;
}

.LandingSummary__card {
  @apply bg-gradient-to-br from-stone-50 to-stone-100;
  @apply rounded-2xl p-6;
  @apply sm:p-8;
  @apply border border-stone-200;
  @apply hover:border-primary/30;
  @apply hover:shadow-xl hover:shadow-primary/5;
  @apply transition-all duration-300;
  @apply hover:-translate-y-1;
}

.LandingSummary__card-icon-wrapper {
  @apply w-12 h-12;
  @apply sm:w-14 sm:h-14;
  @apply bg-primary/10;
  @apply rounded-xl;
  @apply flex items-center justify-center;
  @apply mb-4;
  @apply transition-transform duration-300;
  @apply group-hover:scale-110;
}

.LandingSummary__card:hover .LandingSummary__card-icon-wrapper {
  @apply scale-110;
}

.LandingSummary__card-icon {
  @apply w-6 h-6;
  @apply sm:w-7 sm:h-7;
  @apply text-primary;
}

.LandingSummary__card-title {
  @apply text-xl font-bold text-stone-900 mb-3;
  @apply sm:text-2xl;
}

.LandingSummary__card-text {
  @apply text-sm text-stone-600;
  @apply sm:text-base;
  @apply leading-relaxed;
}
</style>
