<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Glosario por Categorías</h1>
      <p class="page-description">
        Navega el vocabulario del karate organizado por temas
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">Categorías Disponibles</h2>
        <div class="categories-grid">
          <div
            v-for="category in categories"
            :key="category.id"
            class="category-card"
            @click="selectedCategory = category.id"
          >
            <div class="category-icon-wrapper" :class="`category-icon-wrapper--${category.color}`">
              <UIcon :name="category.icon" class="category-icon" />
            </div>
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-description">{{ category.description }}</p>
            <div class="category-count">{{ category.count }} términos</div>
          </div>
        </div>
      </section>

      <section v-if="selectedCategory" class="content-section">
        <div class="selected-header">
          <h2 class="section-title">{{ getCategoryName(selectedCategory) }}</h2>
          <button class="clear-button" @click="selectedCategory = null">
            <UIcon name="lucide:x" class="clear-icon" />
            Limpiar
          </button>
        </div>

        <div class="terms-list">
          <div
            v-for="term in getTermsByCategory(selectedCategory)"
            :key="term.romaji"
            class="term-card"
          >
            <div class="term-header">
              <h3 class="term-romaji">{{ term.romaji }}</h3>
              <span v-if="term.kanji" class="term-kanji">{{ term.kanji }}</span>
            </div>
            <p class="term-translation">{{ term.translation }}</p>
            <p class="term-description">{{ term.description }}</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Cómo Usar el Glosario</h2>
        <div class="usage-tips">
          <div class="usage-item">
            <div class="usage-number">1</div>
            <div class="usage-content">
              <h4 class="usage-title">Selecciona una Categoría</h4>
              <p class="usage-text">
                Haz clic en cualquier categoría para ver todos los términos relacionados.
              </p>
            </div>
          </div>

          <div class="usage-item">
            <div class="usage-number">2</div>
            <div class="usage-content">
              <h4 class="usage-title">Estudia los Términos</h4>
              <p class="usage-text">
                Cada término incluye su escritura en kanji, romaji, traducción y una explicación detallada.
              </p>
            </div>
          </div>

          <div class="usage-item">
            <div class="usage-number">3</div>
            <div class="usage-content">
              <h4 class="usage-title">Practica Regularmente</h4>
              <p class="usage-text">
                Revisa los términos frecuentemente. La repetición es clave para memorizar el vocabulario.
              </p>
            </div>
          </div>

          <div class="usage-item">
            <div class="usage-number">4</div>
            <div class="usage-content">
              <h4 class="usage-title">Usa en el Dojo</h4>
              <p class="usage-text">
                Aplica los términos que aprendes durante tus entrenamientos para reforzar tu memoria.
              </p>
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

const selectedCategory = ref<string | null>(null)

const categories = [
  {
    id: 'tecnicas-puño',
    name: 'Técnicas de Puño',
    description: 'Golpes y ataques con las manos',
    icon: 'lucide:hand',
    color: 'primary',
    count: 15
  },
  {
    id: 'tecnicas-patada',
    name: 'Técnicas de Patada',
    description: 'Patadas y técnicas de pierna',
    icon: 'lucide:footprints',
    color: 'secondary',
    count: 12
  },
  {
    id: 'bloqueos',
    name: 'Bloqueos',
    description: 'Técnicas defensivas',
    icon: 'lucide:shield',
    color: 'primary',
    count: 10
  },
  {
    id: 'posiciones',
    name: 'Posiciones',
    description: 'Posturas y bases',
    icon: 'lucide:user',
    color: 'secondary',
    count: 14
  },
  {
    id: 'katas',
    name: 'Katas',
    description: 'Nombres de formas',
    icon: 'lucide:workflow',
    color: 'primary',
    count: 26
  },
  {
    id: 'conceptos',
    name: 'Conceptos',
    description: 'Principios filosóficos',
    icon: 'lucide:brain',
    color: 'secondary',
    count: 20
  },
  {
    id: 'etiqueta',
    name: 'Etiqueta',
    description: 'Comandos y protocolo',
    icon: 'lucide:hand-heart',
    color: 'primary',
    count: 18
  },
  {
    id: 'anatomia',
    name: 'Anatomía',
    description: 'Partes del cuerpo',
    icon: 'lucide:person-standing',
    color: 'secondary',
    count: 25
  }
]

// Sample terms for demonstration
const termsByCategory: Record<string, any[]> = {
  'tecnicas-puño': [
    {
      romaji: 'Choku Tsuki',
      kanji: '直突き',
      translation: 'Golpe Recto',
      description: 'Puñetazo directo que viaja en línea recta hacia el objetivo.'
    },
    {
      romaji: 'Gyaku Tsuki',
      kanji: '逆突き',
      translation: 'Golpe Inverso',
      description: 'Puñetazo con el brazo opuesto a la pierna adelantada.'
    },
    {
      romaji: 'Oi Tsuki',
      kanji: '追い突き',
      translation: 'Golpe con Paso',
      description: 'Puñetazo ejecutado mientras se avanza con el mismo lado.'
    }
  ],
  'tecnicas-patada': [
    {
      romaji: 'Mae Geri',
      kanji: '前蹴り',
      translation: 'Patada Frontal',
      description: 'Patada recta hacia adelante con la bola del pie.'
    },
    {
      romaji: 'Mawashi Geri',
      kanji: '回し蹴り',
      translation: 'Patada Circular',
      description: 'Patada en arco que golpea con el empeine.'
    },
    {
      romaji: 'Yoko Geri',
      kanji: '横蹴り',
      translation: 'Patada Lateral',
      description: 'Patada hacia el lado usando el borde del pie.'
    }
  ],
  bloqueos: [
    {
      romaji: 'Age Uke',
      kanji: '上げ受け',
      translation: 'Bloqueo Ascendente',
      description: 'Bloqueo hacia arriba para defender la cabeza.'
    },
    {
      romaji: 'Gedan Barai',
      kanji: '下段払い',
      translation: 'Barrido Bajo',
      description: 'Bloqueo descendente para ataques bajos.'
    },
    {
      romaji: 'Soto Uke',
      kanji: '外受け',
      translation: 'Bloqueo Exterior',
      description: 'Bloqueo que barre de fuera hacia dentro.'
    }
  ],
  posiciones: [
    {
      romaji: 'Zenkutsu Dachi',
      kanji: '前屈立ち',
      translation: 'Posición Frontal',
      description: 'Posición con 60% del peso adelante.'
    },
    {
      romaji: 'Kokutsu Dachi',
      kanji: '後屈立ち',
      translation: 'Posición Trasera',
      description: 'Posición con 70% del peso atrás.'
    },
    {
      romaji: 'Kiba Dachi',
      kanji: '騎馬立ち',
      translation: 'Posición de Jinete',
      description: 'Posición lateral con peso equilibrado.'
    }
  ]
}

function getCategoryName(id: string) {
  return categories.find((c) => c.id === id)?.name || ''
}

function getTermsByCategory(id: string) {
  return termsByCategory[id] || []
}
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

.categories-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4;
}

.category-card {
  @apply bg-stone-50 rounded-lg p-6 cursor-pointer;
  @apply hover:shadow-lg transition-all duration-300;
  @apply border-2 border-stone-200 hover:border-primary/50;
}

.category-icon-wrapper {
  @apply w-14 h-14 rounded-xl flex items-center justify-center mb-4;
}

.category-icon-wrapper--primary {
  @apply bg-primary/10;
}

.category-icon-wrapper--secondary {
  @apply bg-secondary/10;
}

.category-icon {
  @apply w-7 h-7;
}

.category-icon-wrapper--primary .category-icon {
  @apply text-primary;
}

.category-icon-wrapper--secondary .category-icon {
  @apply text-secondary;
}

.category-name {
  @apply text-lg font-bold text-stone-900 mb-2;
}

.category-description {
  @apply text-sm text-stone-700 mb-3;
}

.category-count {
  @apply text-xs font-semibold text-primary;
}

.selected-header {
  @apply flex items-center justify-between mb-6;
}

.clear-button {
  @apply flex items-center gap-2 px-4 py-2;
  @apply bg-stone-100 hover:bg-stone-200;
  @apply text-stone-700 rounded-lg;
  @apply transition-all duration-200;
}

.clear-icon {
  @apply w-4 h-4;
}

.terms-list {
  @apply space-y-4;
}

.term-card {
  @apply bg-stone-50 rounded-lg p-5;
  @apply border-l-4 border-primary;
  @apply hover:shadow-md transition-all duration-300;
}

.term-header {
  @apply flex items-baseline gap-3 mb-2;
}

.term-romaji {
  @apply text-xl font-bold text-stone-900;
}

.term-kanji {
  @apply text-lg text-primary;
}

.term-translation {
  @apply text-base font-semibold text-primary mb-2;
}

.term-description {
  @apply text-sm text-stone-700 leading-relaxed;
}

.usage-tips {
  @apply space-y-4;
}

.usage-item {
  @apply flex gap-4 items-start bg-stone-50 rounded-lg p-5;
}

.usage-number {
  @apply w-10 h-10 rounded-full bg-primary text-white;
  @apply font-bold flex items-center justify-center flex-shrink-0;
}

.usage-content {
  @apply flex-1;
}

.usage-title {
  @apply text-base font-bold text-stone-900 mb-1;
}

.usage-text {
  @apply text-sm text-stone-700;
}
</style>
