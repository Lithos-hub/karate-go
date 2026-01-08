<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Buscar Términos</h1>
      <p class="page-description">
        Encuentra cualquier término de karate: traducciones y explicaciones
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <div class="search-section">
          <h2 class="section-title">Buscador de Términos</h2>
          <div class="search-box">
            <UIcon name="lucide:search" class="search-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Busca términos en japonés, romaji o español..."
              class="search-input"
            />
          </div>
          <p class="search-hint">
            Ejemplos: "mae geri", "気合", "bloqueo", "kata"
          </p>
        </div>
      </section>

      <section v-if="filteredTerms.length > 0" class="content-section">
        <h2 class="section-title">Resultados ({{ filteredTerms.length }})</h2>
        <div class="results-list">
          <div
            v-for="term in filteredTerms"
            :key="term.romaji"
            class="result-card"
          >
            <div class="result-header">
              <div class="result-main">
                <h3 class="result-romaji">{{ term.romaji }}</h3>
                <span v-if="term.kanji" class="result-kanji">{{ term.kanji }}</span>
              </div>
              <span class="result-category">{{ term.category }}</span>
            </div>
            <p class="result-translation">{{ term.translation }}</p>
            <p class="result-description">{{ term.description }}</p>
          </div>
        </div>
      </section>

      <section v-else-if="searchQuery" class="content-section">
        <div class="no-results">
          <UIcon name="lucide:search-x" class="no-results-icon" />
          <h3 class="no-results-title">No se encontraron resultados</h3>
          <p class="no-results-text">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      </section>

      <section v-else class="content-section">
        <h2 class="section-title">Términos Populares</h2>
        <div class="popular-terms">
          <button
            v-for="popular in popularTerms"
            :key="popular"
            class="popular-tag"
            @click="searchQuery = popular"
          >
            {{ popular }}
          </button>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Consejos de Búsqueda</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <UIcon name="lucide:lightbulb" class="tip-icon" />
            <h4 class="tip-title">Busca en cualquier idioma</h4>
            <p class="tip-text">
              Puedes buscar términos en japonés (kanji), romaji (latino) o español.
            </p>
          </div>

          <div class="tip-card">
            <UIcon name="lucide:lightbulb" class="tip-icon" />
            <h4 class="tip-title">Búsqueda flexible</h4>
            <p class="tip-text">
              No necesitas escribir el término completo. La búsqueda encontrará coincidencias parciales.
            </p>
          </div>

          <div class="tip-card">
            <UIcon name="lucide:lightbulb" class="tip-icon" />
            <h4 class="tip-title">Explora categorías</h4>
            <p class="tip-text">
              Cada resultado muestra su categoría: técnica, posición, concepto, etc.
            </p>
          </div>

          <div class="tip-card">
            <UIcon name="lucide:lightbulb" class="tip-icon" />
            <h4 class="tip-title">Sin mayúsculas</h4>
            <p class="tip-text">
              La búsqueda no distingue entre mayúsculas y minúsculas.
            </p>
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

// Sample terms database (in a real app, this would come from an API or database)
const terms = [
  {
    romaji: 'Mae Geri',
    kanji: '前蹴り',
    translation: 'Patada Frontal',
    description: 'Patada recta hacia adelante usando la bola del pie. Una de las patadas más fundamentales en karate.',
    category: 'Técnica de Patada'
  },
  {
    romaji: 'Gyaku Tsuki',
    kanji: '逆突き',
    translation: 'Golpe Inverso',
    description: 'Puñetazo con el brazo opuesto a la pierna adelantada, utilizando la rotación completa de cadera.',
    category: 'Técnica de Puño'
  },
  {
    romaji: 'Age Uke',
    kanji: '上げ受け',
    translation: 'Bloqueo Ascendente',
    description: 'Bloqueo hacia arriba para defender ataques a la cabeza.',
    category: 'Técnica de Bloqueo'
  },
  {
    romaji: 'Zenkutsu Dachi',
    kanji: '前屈立ち',
    translation: 'Posición Frontal',
    description: 'Posición con 60% del peso en la pierna delantera, pierna trasera extendida.',
    category: 'Posición'
  },
  {
    romaji: 'Kiai',
    kanji: '気合',
    translation: 'Grito de Espíritu',
    description: 'Exhalación potente que concentra la energía en el momento del ataque.',
    category: 'Concepto'
  },
  {
    romaji: 'Kata',
    kanji: '型',
    translation: 'Forma',
    description: 'Secuencia predeterminada de movimientos que simulan combate contra múltiples oponentes.',
    category: 'Concepto'
  },
  {
    romaji: 'Kumite',
    kanji: '組手',
    translation: 'Combate',
    description: 'Práctica de técnicas con un compañero, desde ejercicios estructurados hasta combate libre.',
    category: 'Concepto'
  },
  {
    romaji: 'Sensei',
    kanji: '先生',
    translation: 'Maestro / Instructor',
    description: 'Literalmente "el que nació antes". Término de respeto para el instructor.',
    category: 'Título'
  },
  {
    romaji: 'Dojo',
    kanji: '道場',
    translation: 'Lugar del Camino',
    description: 'El lugar donde se practica el arte marcial. Más que un gimnasio, es un espacio sagrado de aprendizaje.',
    category: 'Lugar'
  },
  {
    romaji: 'Rei',
    kanji: '礼',
    translation: 'Saludo / Reverencia',
    description: 'Muestra de respeto mediante una inclinación. Fundamental en la etiqueta del karate.',
    category: 'Etiqueta'
  }
]

const searchQuery = ref('')
const popularTerms = ['kata', 'kumite', 'kiai', 'sensei', 'dojo', 'mae geri']

const filteredTerms = computed(() => {
  if (!searchQuery.value) return []

  const query = searchQuery.value.toLowerCase()
  return terms.filter(
    (term) =>
      term.romaji.toLowerCase().includes(query) ||
      term.kanji?.includes(query) ||
      term.translation.toLowerCase().includes(query) ||
      term.description.toLowerCase().includes(query) ||
      term.category.toLowerCase().includes(query)
  )
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
  @apply text-2xl sm:text-3xl font-bold text-stone-900 mb-6;
}

.search-section {
  @apply space-y-4;
}

.search-box {
  @apply relative;
}

.search-icon {
  @apply absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-400;
}

.search-input {
  @apply w-full pl-12 pr-4 py-4 text-lg;
  @apply border-2 border-stone-300 rounded-xl;
  @apply focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20;
  @apply transition-all duration-200;
}

.search-hint {
  @apply text-sm text-stone-600 italic;
}

.results-list {
  @apply space-y-4;
}

.result-card {
  @apply bg-stone-50 rounded-lg p-5;
  @apply hover:shadow-lg transition-all duration-300;
  @apply border-l-4 border-primary;
}

.result-header {
  @apply flex items-start justify-between mb-3;
}

.result-main {
  @apply flex items-baseline gap-3;
}

.result-romaji {
  @apply text-xl font-bold text-stone-900;
}

.result-kanji {
  @apply text-lg text-primary;
}

.result-category {
  @apply px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full;
}

.result-translation {
  @apply text-base font-semibold text-primary mb-2;
}

.result-description {
  @apply text-sm text-stone-700 leading-relaxed;
}

.no-results {
  @apply flex flex-col items-center justify-center py-12;
}

.no-results-icon {
  @apply w-16 h-16 text-stone-400 mb-4;
}

.no-results-title {
  @apply text-xl font-bold text-stone-900 mb-2;
}

.no-results-text {
  @apply text-base text-stone-600;
}

.popular-terms {
  @apply flex flex-wrap gap-3;
}

.popular-tag {
  @apply px-4 py-2 bg-stone-100 hover:bg-primary/10;
  @apply text-stone-700 hover:text-primary;
  @apply rounded-full font-medium text-sm;
  @apply transition-all duration-200;
  @apply border border-stone-200 hover:border-primary/30;
}

.tips-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}

.tip-card {
  @apply bg-stone-50 rounded-lg p-5;
}

.tip-icon {
  @apply w-8 h-8 text-primary mb-3;
}

.tip-title {
  @apply text-base font-bold text-stone-900 mb-2;
}

.tip-text {
  @apply text-sm text-stone-700;
}
</style>
