<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Significados de los Cinturones</h1>
      <p class="page-description">
        Filosofía y simbolismo detrás de cada color
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">Simbolismo de los Colores</h2>
        <p class="section-text">
          Cada color de cinturón en karate tiene un significado profundo que refleja el viaje del practicante desde el principiante hasta el maestro. Estos colores representan no solo el progreso técnico, sino también el crecimiento personal y espiritual.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Significados Tradicionales</h2>
        <div class="meanings-list">
          <div class="meaning-item">
            <div class="meaning-icon">⚪</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Blanco (Shiro)</h3>
              <p class="meaning-text">
                Representa la pureza, la inocencia y el comienzo del viaje. Como una hoja en blanco, el estudiante está listo para recibir conocimiento sin prejuicios ni ideas preconcebidas.
              </p>
            </div>
          </div>

          <div class="meaning-item">
            <div class="meaning-icon">🟡</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Amarillo (Ki-iro)</h3>
              <p class="meaning-text">
                Simboliza la primera luz del amanecer, el despertar del conocimiento. El estudiante comienza a comprender los fundamentos básicos del karate.
              </p>
            </div>
          </div>

          <div class="meaning-item">
            <div class="meaning-icon">🟠</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Naranja (Orenji)</h3>
              <p class="meaning-text">
                Representa el sol naciente, la expansión del conocimiento. El estudiante comienza a desarrollar una comprensión más profunda de las técnicas.
              </p>
            </div>
          </div>

          <div class="meaning-item">
            <div class="meaning-icon">🟢</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Verde (Midori)</h3>
              <p class="meaning-text">
                Simboliza el crecimiento, como las plantas que brotan en primavera. Las habilidades del estudiante comienzan a desarrollarse y fortalecerse.
              </p>
            </div>
          </div>

          <div class="meaning-item">
            <div class="meaning-icon">🔵</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Azul (Ao)</h3>
              <p class="meaning-text">
                Representa el cielo hacia el cual la planta crece. El estudiante apunta más alto, refinando sus técnicas y profundizando su comprensión.
              </p>
            </div>
          </div>

          <div class="meaning-item">
            <div class="meaning-icon">🟤</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Marrón (Chairo)</h3>
              <p class="meaning-text">
                Simboliza la madurez, como el árbol que se prepara para la cosecha. El estudiante está cerca de completar su formación básica y se prepara para el cinturón negro.
              </p>
            </div>
          </div>

          <div class="meaning-item">
            <div class="meaning-icon">⚫</div>
            <div class="meaning-content">
              <h3 class="meaning-title">Negro (Kuro)</h3>
              <p class="meaning-text">
                Representa la madurez y el dominio técnico, pero también marca el verdadero comienzo del viaje. El negro absorbe toda la luz, simbolizando que el estudiante está listo para absorber conocimiento más profundo. Paradójicamente, también representa el retorno al principio, la humildad de reconocer que siempre hay más que aprender.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">La Filosofía del Cinturón</h2>
        <p class="section-text">
          Los cinturones no son solo marcadores de progreso técnico. Son recordatorios constantes del compromiso del practicante con el auto-mejoramiento, la disciplina y la perseverancia. Cada color representa una etapa en el desarrollo del carácter tanto como en el desarrollo de la habilidad física.
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

.meanings-list {
  @apply space-y-6 mt-6;
}

.meaning-item {
  @apply flex gap-4 items-start;
  @apply bg-stone-50 rounded-lg p-4;
  @apply hover:shadow-lg transition-all duration-300;
}

.meaning-icon {
  @apply text-4xl flex-shrink-0;
}

.meaning-content {
  @apply flex-1;
}

.meaning-title {
  @apply text-xl font-bold text-stone-900 mb-2;
}

.meaning-text {
  @apply text-base text-stone-700 leading-relaxed;
}
</style>
