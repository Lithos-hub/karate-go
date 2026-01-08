<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Kihon - Fundamentos</h1>
      <p class="page-description">
        Las técnicas básicas que forman la base del karate
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">¿Qué es el Kihon?</h2>
        <p class="section-text">
          Kihon (基本) significa "fundamento" o "base" en japonés. Es la práctica repetitiva de técnicas básicas de karate que desarrolla la forma correcta, el equilibrio, la coordinación y la fuerza. El Kihon es la piedra angular sobre la cual se construyen todas las demás habilidades en karate.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Elementos del Kihon</h2>
        <div class="elements-grid">
          <div class="element-card">
            <UIcon name="lucide:target" class="element-icon" />
            <h3 class="element-title">Posiciones (Dachi)</h3>
            <p class="element-text">
              Zenkutsu-dachi, Kokutsu-dachi, Kiba-dachi y más. Las posiciones correctas proporcionan estabilidad y potencia.
            </p>
          </div>

          <div class="element-card">
            <UIcon name="lucide:move" class="element-icon" />
            <h3 class="element-title">Movimientos (Ido)</h3>
            <p class="element-text">
              Desplazamientos hacia adelante, atrás y laterales. La base para el movimiento efectivo en combate.
            </p>
          </div>

          <div class="element-card">
            <UIcon name="lucide:hand" class="element-icon" />
            <h3 class="element-title">Técnicas de Mano</h3>
            <p class="element-text">
              Puños, golpes, bloqueos y paradas. La precisión y velocidad son fundamentales.
            </p>
          </div>

          <div class="element-card">
            <UIcon name="lucide:footprints" class="element-icon" />
            <h3 class="element-title">Técnicas de Pie</h3>
            <p class="element-text">
              Patadas básicas, rodillazos y barridos. Desarrollan equilibrio y coordinación.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Principios Fundamentales</h2>
        <div class="principles-list">
          <div class="principle-item">
            <div class="principle-number">1</div>
            <div class="principle-content">
              <h3 class="principle-title">Forma Correcta (Tadashii Kata)</h3>
              <p class="principle-text">
                La técnica debe ejecutarse con la forma precisa antes de buscar velocidad o potencia.
              </p>
            </div>
          </div>

          <div class="principle-item">
            <div class="principle-number">2</div>
            <div class="principle-content">
              <h3 class="principle-title">Repetición (Renshu)</h3>
              <p class="principle-text">
                La práctica constante y repetitiva desarrolla la memoria muscular y la perfección técnica.
              </p>
            </div>
          </div>

          <div class="principle-item">
            <div class="principle-number">3</div>
            <div class="principle-content">
              <h3 class="principle-title">Concentración (Zanshin)</h3>
              <p class="principle-text">
                Mantener la atención plena en cada técnica, antes, durante y después de su ejecución.
              </p>
            </div>
          </div>

          <div class="principle-item">
            <div class="principle-number">4</div>
            <div class="principle-content">
              <h3 class="principle-title">Espíritu (Kime)</h3>
              <p class="principle-text">
                Cada técnica debe ejecutarse con determinación y foco total en el momento del impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Importancia del Kihon</h2>
        <p class="section-text">
          El Kihon no es solo para principiantes. Incluso los maestros más avanzados continúan practicando Kihon diariamente. Es a través de esta práctica constante que se alcanza la verdadera maestría. Como dice el proverbio: "Las técnicas básicas son las técnicas avanzadas dominadas a la perfección".
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

.elements-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6;
}

.element-card {
  @apply bg-stone-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300;
}

.element-icon {
  @apply w-10 h-10 text-primary mb-3;
}

.element-title {
  @apply text-lg font-bold text-stone-900 mb-2;
}

.element-text {
  @apply text-sm text-stone-600;
}

.principles-list {
  @apply space-y-4 mt-6;
}

.principle-item {
  @apply flex gap-4 items-start bg-gradient-to-r from-primary/5 to-transparent rounded-lg p-4;
}

.principle-number {
  @apply w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0;
}

.principle-content {
  @apply flex-1;
}

.principle-title {
  @apply text-lg font-bold text-stone-900 mb-1;
}

.principle-text {
  @apply text-base text-stone-700;
}
</style>
