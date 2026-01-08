<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Sistema Kyu</h1>
      <p class="page-description">
        Cinturones de color: el camino del principiante hacia el dominio
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">¿Qué es el Sistema Kyu?</h2>
        <p class="section-text">
          El sistema Kyu (級) representa los grados de estudiante en karate, comenzando desde el 10º Kyu (principiante) hasta el 1º Kyu (estudiante avanzado). Cada nivel está representado por un color de cinturón específico.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Orden de Cinturones</h2>
        <div class="belts-grid">
          <div class="belt-card">
            <div class="belt-color belt-white"></div>
            <h3 class="belt-name">Blanco (10º-9º Kyu)</h3>
            <p class="belt-description">Pureza y comienzo del camino</p>
          </div>
          <div class="belt-card">
            <div class="belt-color belt-yellow"></div>
            <h3 class="belt-name">Amarillo (8º Kyu)</h3>
            <p class="belt-description">Primera luz del conocimiento</p>
          </div>
          <div class="belt-card">
            <div class="belt-color belt-orange"></div>
            <h3 class="belt-name">Naranja (7º Kyu)</h3>
            <p class="belt-description">Sol naciente</p>
          </div>
          <div class="belt-card">
            <div class="belt-color belt-green"></div>
            <h3 class="belt-name">Verde (6º-5º Kyu)</h3>
            <p class="belt-description">Crecimiento y desarrollo</p>
          </div>
          <div class="belt-card">
            <div class="belt-color belt-blue"></div>
            <h3 class="belt-name">Azul (4º-3º Kyu)</h3>
            <p class="belt-description">Cielo hacia el cual se crece</p>
          </div>
          <div class="belt-card">
            <div class="belt-color belt-brown"></div>
            <h3 class="belt-name">Marrón (2º-1º Kyu)</h3>
            <p class="belt-description">Madurez antes de la maestría</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Progresión y Requisitos</h2>
        <p class="section-text">
          La progresión a través de los grados Kyu requiere demostrar competencia en técnicas fundamentales (kihon), formas (kata) y combate (kumite). El tiempo entre exámenes varía según el dojo y la organización.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'site'
})
</script>

<style scoped>
@reference '~/assets/css/main.css';

.page-container {
  @apply max-w-6xl mx-auto px-4 py-8;
  @apply sm:px-6 sm:py-12;
  @apply lg:px-8 lg:py-16;
}

.page-header {
  @apply mb-8 sm:mb-12;
}

.page-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4;
}

.page-description {
  @apply text-lg sm:text-xl text-stone-600;
}

.page-content {
  @apply space-y-8 sm:space-y-12;
}

.content-section {
  @apply bg-white rounded-xl p-6 sm:p-8 shadow-md border border-stone-200;
}

.section-title {
  @apply text-2xl sm:text-3xl font-bold text-stone-900 mb-4;
}

.section-text {
  @apply text-base sm:text-lg text-stone-700 leading-relaxed;
}

.belts-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6;
}

.belt-card {
  @apply bg-stone-50 rounded-lg p-4 border border-stone-200 hover:shadow-lg transition-all duration-300;
}

.belt-color {
  @apply w-full h-16 rounded-md mb-3 border-2 border-stone-300;
}

.belt-white {
  @apply bg-white;
}

.belt-yellow {
  @apply bg-yellow-400;
}

.belt-orange {
  @apply bg-orange-500;
}

.belt-green {
  @apply bg-green-600;
}

.belt-blue {
  @apply bg-blue-600;
}

.belt-brown {
  @apply bg-amber-800;
}

.belt-name {
  @apply text-lg font-bold text-stone-900 mb-2;
}

.belt-description {
  @apply text-sm text-stone-600;
}
</style>
