<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Tsuki - Técnicas de Puño</h1>
      <p class="page-description">
        Golpes de puño: potencia, precisión y velocidad
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">¿Qué es Tsuki?</h2>
        <p class="section-text">
          Tsuki (突き) significa "empuje" o "golpe directo" en japonés. Se refiere a las técnicas de puño en karate que se caracterizan por ser golpes directos, penetrantes y poderosos. La correcta ejecución del Tsuki combina la rotación de cadera, el impulso del cuerpo y el enfoque de energía en el punto de impacto.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Técnicas Principales de Tsuki</h2>
        <div class="techniques-list">
          <div class="technique-item">
            <div class="technique-header">
              <h3 class="technique-name">Choku-Tsuki</h3>
              <span class="technique-badge">Básico</span>
            </div>
            <p class="technique-description">
              Golpe recto directo. El puño viaja en línea recta hacia el objetivo. Es la técnica fundamental de puño en karate.
            </p>
            <div class="technique-details">
              <span class="detail-tag">Objetivo: Chudan (medio)</span>
              <span class="detail-tag">Potencia: Alta</span>
            </div>
          </div>

          <div class="technique-item">
            <div class="technique-header">
              <h3 class="technique-name">Oi-Tsuki</h3>
              <span class="technique-badge">Intermedio</span>
            </div>
            <p class="technique-description">
              Golpe de puño con paso adelante. Se lanza con la mano del mismo lado que la pierna que avanza, generando gran impulso.
            </p>
            <div class="technique-details">
              <span class="detail-tag">Objetivo: Jodan/Chudan</span>
              <span class="detail-tag">Potencia: Muy alta</span>
            </div>
          </div>

          <div class="technique-item">
            <div class="technique-header">
              <h3 class="technique-name">Gyaku-Tsuki</h3>
              <span class="technique-badge">Fundamental</span>
            </div>
            <p class="technique-description">
              Golpe inverso. Se ejecuta con el brazo opuesto a la pierna adelantada, utilizando la rotación completa de cadera.
            </p>
            <div class="technique-details">
              <span class="detail-tag">Objetivo: Chudan</span>
              <span class="detail-tag">Potencia: Máxima</span>
            </div>
          </div>

          <div class="technique-item">
            <div class="technique-header">
              <h3 class="technique-name">Kizami-Tsuki</h3>
              <span class="technique-badge">Avanzado</span>
            </div>
            <p class="technique-description">
              Golpe de puño frontal rápido. Golpe de tanteo o preparación, ejecutado con la mano adelantada sin cambiar de posición.
            </p>
            <div class="technique-details">
              <span class="detail-tag">Objetivo: Jodan</span>
              <span class="detail-tag">Velocidad: Muy alta</span>
            </div>
          </div>

          <div class="technique-item">
            <div class="technique-header">
              <h3 class="technique-name">Age-Tsuki</h3>
              <span class="technique-badge">Especial</span>
            </div>
            <p class="technique-description">
              Golpe ascendente. Se dirige hacia arriba, típicamente al mentón o la barbilla del oponente.
            </p>
            <div class="technique-details">
              <span class="detail-tag">Objetivo: Jodan</span>
              <span class="detail-tag">Ángulo: Ascendente</span>
            </div>
          </div>

          <div class="technique-item">
            <div class="technique-header">
              <h3 class="technique-name">Mawashi-Tsuki</h3>
              <span class="technique-badge">Especial</span>
            </div>
            <p class="technique-description">
              Golpe circular. El puño viaja en un arco, golpeando desde un ángulo lateral, típicamente a la sien o costillas.
            </p>
            <div class="technique-details">
              <span class="detail-tag">Objetivo: Jodan/Chudan</span>
              <span class="detail-tag">Trayectoria: Circular</span>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Puntos Clave para un Tsuki Efectivo</h2>
        <div class="key-points">
          <div class="key-point">
            <UIcon name="lucide:check-circle" class="key-icon" />
            <div class="key-content">
              <h4 class="key-title">Formación del Puño (Seiken)</h4>
              <p class="key-text">El puño debe estar correctamente cerrado, golpeando con los dos primeros nudillos.</p>
            </div>
          </div>
          <div class="key-point">
            <UIcon name="lucide:check-circle" class="key-icon" />
            <div class="key-content">
              <h4 class="key-title">Rotación de Cadera (Koshi)</h4>
              <p class="key-text">La potencia proviene de la rotación de cadera, no solo del brazo.</p>
            </div>
          </div>
          <div class="key-point">
            <UIcon name="lucide:check-circle" class="key-icon" />
            <div class="key-content">
              <h4 class="key-title">Hikite (Mano de Retroceso)</h4>
              <p class="key-text">La mano que retira amplifica la potencia del golpe mediante acción y reacción.</p>
            </div>
          </div>
          <div class="key-point">
            <UIcon name="lucide:check-circle" class="key-icon" />
            <div class="key-content">
              <h4 class="key-title">Kime (Enfoque)</h4>
              <p class="key-text">Toda la energía debe concentrarse en el momento preciso del impacto.</p>
            </div>
          </div>
        </div>
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

.techniques-list {
  @apply space-y-4 mt-6;
}

.technique-item {
  @apply bg-stone-50 rounded-lg p-5 hover:shadow-lg transition-all duration-300;
  @apply border-l-4 border-primary;
}

.technique-header {
  @apply flex items-center justify-between mb-2;
}

.technique-name {
  @apply text-xl font-bold text-stone-900;
}

.technique-badge {
  @apply px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full;
}

.technique-description {
  @apply text-base text-stone-700 mb-3;
}

.technique-details {
  @apply flex flex-wrap gap-2;
}

.detail-tag {
  @apply px-2 py-1 bg-stone-200 text-stone-700 text-xs rounded;
}

.key-points {
  @apply space-y-3 mt-6;
}

.key-point {
  @apply flex gap-3 items-start;
}

.key-icon {
  @apply w-6 h-6 text-green-600 flex-shrink-0 mt-1;
}

.key-content {
  @apply flex-1;
}

.key-title {
  @apply text-base font-bold text-stone-900 mb-1;
}

.key-text {
  @apply text-sm text-stone-600;
}
</style>
