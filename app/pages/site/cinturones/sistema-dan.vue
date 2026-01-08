<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Sistema Dan</h1>
      <p class="page-description">
        Cinturón negro: el verdadero comienzo del camino marcial
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">¿Qué es el Sistema Dan?</h2>
        <p class="section-text">
          El sistema Dan (段) representa los grados de maestría en karate. A diferencia de los grados Kyu, los Dan avanzan del 1º al 10º, donde cada nivel representa un grado más profundo de conocimiento, habilidad y comprensión del arte marcial.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Grados Dan</h2>
        <div class="dan-list">
          <div class="dan-item">
            <div class="dan-number">1º-5º Dan</div>
            <div class="dan-info">
              <h3 class="dan-title">Shoden (Nivel Inicial)</h3>
              <p class="dan-description">
                Dominio técnico y desarrollo del carácter. Enfoque en perfeccionar las técnicas fundamentales y enseñar a otros.
              </p>
            </div>
          </div>
          <div class="dan-item">
            <div class="dan-number">6º-8º Dan</div>
            <div class="dan-info">
              <h3 class="dan-title">Chuden (Nivel Medio)</h3>
              <p class="dan-description">
                Maestría avanzada y liderazgo. Contribución significativa al desarrollo del karate y sus practicantes.
              </p>
            </div>
          </div>
          <div class="dan-item">
            <div class="dan-number">9º-10º Dan</div>
            <div class="dan-info">
              <h3 class="dan-title">Okuden (Nivel Superior)</h3>
              <p class="dan-description">
                Conocimiento profundo y sabiduría. Reconocimiento por contribuciones excepcionales al arte marcial. Raramente otorgado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Responsabilidades</h2>
        <p class="section-text">
          Con cada grado Dan viene una mayor responsabilidad de preservar, transmitir y desarrollar el karate. Los practicantes Dan no solo perfeccionan su técnica, sino que también cultivan el espíritu y los valores del Bushido.
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

.dan-list {
  @apply space-y-4 mt-6;
}

.dan-item {
  @apply bg-stone-900 rounded-lg p-6 flex flex-col sm:flex-row gap-4 items-start;
  @apply hover:shadow-xl transition-all duration-300;
}

.dan-number {
  @apply text-3xl font-bold text-primary flex-shrink-0;
}

.dan-info {
  @apply flex-1;
}

.dan-title {
  @apply text-xl font-bold text-white mb-2;
}

.dan-description {
  @apply text-stone-300;
}
</style>
