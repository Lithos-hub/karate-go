<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Bunkai - Aplicaciones de Kata</h1>
      <p class="page-description">
        Descifrando el significado oculto: de la forma a la función
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">¿Qué es Bunkai?</h2>
        <p class="section-text">
          Bunkai (分解) significa "análisis" o "descomposición" en japonés. Es el estudio y práctica de las aplicaciones prácticas de los movimientos de kata. Mientras que la kata es la forma predeterminada, el bunkai revela cómo cada movimiento puede aplicarse en situaciones reales de combate o defensa personal.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Niveles de Bunkai</h2>
        <div class="levels-list">
          <div class="level-card">
            <div class="level-header">
              <div class="level-number">1</div>
              <h3 class="level-name">Omote - Nivel Superficial</h3>
            </div>
            <p class="level-description">
              Las aplicaciones más obvias y directas. Por ejemplo, un bloqueo ascendente (Age-Uke) se usa literalmente para bloquear un puñetazo a la cabeza. Este es el nivel que se enseña primero a los principiantes.
            </p>
            <div class="level-example">
              <span class="example-label">Ejemplo:</span>
              <span class="example-text">Age-Uke = Bloqueo contra puñetazo alto</span>
            </div>
          </div>

          <div class="level-card">
            <div class="level-header">
              <div class="level-number">2</div>
              <h3 class="level-name">Ura - Nivel Oculto</h3>
            </div>
            <p class="level-description">
              Interpretaciones menos obvias pero igualmente válidas. El mismo Age-Uke podría ser un golpe ascendente al mentón, una luxación de brazo, o una técnica de agarre. Este nivel requiere comprensión más profunda.
            </p>
            <div class="level-example">
              <span class="example-label">Ejemplo:</span>
              <span class="example-text">Age-Uke = Golpe ascendente / Luxación articular</span>
            </div>
          </div>

          <div class="level-card">
            <div class="level-header">
              <div class="level-number">3</div>
              <h3 class="level-name">Honto - Nivel Real/Verdadero</h3>
            </div>
            <p class="level-description">
              Las aplicaciones más sofisticadas que combinan principios biomecánicos, puntos de presión (kyusho), y timing perfecto. Solo accesible después de años de estudio profundo y práctica bajo la guía de un maestro experimentado.
            </p>
            <div class="level-example">
              <span class="example-label">Ejemplo:</span>
              <span class="example-text">Age-Uke = Control de centro + ataque a puntos vitales + proyección</span>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Tipos de Bunkai</h2>
        <div class="types-grid">
          <div class="type-item">
            <UIcon name="lucide:shield" class="type-icon" />
            <h4 class="type-title">Uke Waza</h4>
            <p class="type-subtitle">Técnicas de Bloqueo</p>
            <p class="type-text">
              Aplicaciones defensivas directas: bloqueos, paradas y desvíos de ataques entrantes.
            </p>
          </div>

          <div class="type-item">
            <UIcon name="lucide:zap" class="type-icon" />
            <h4 class="type-title">Atemi Waza</h4>
            <p class="type-subtitle">Técnicas de Golpeo</p>
            <p class="type-text">
              Movimientos que parecen bloqueos pero son realmente golpes a áreas vitales del cuerpo.
            </p>
          </div>

          <div class="type-item">
            <UIcon name="lucide:grab" class="type-icon" />
            <h4 class="type-title">Tuite Waza</h4>
            <p class="type-subtitle">Técnicas de Agarre</p>
            <p class="type-text">
              Agarres, luxaciones articulares y controles que inmovilizan o controlan al oponente.
            </p>
          </div>

          <div class="type-item">
            <UIcon name="lucide:rotate-ccw" class="type-icon" />
            <h4 class="type-title">Nage Waza</h4>
            <p class="type-subtitle">Técnicas de Proyección</p>
            <p class="type-text">
              Lanzamientos, barridos y técnicas para derribar al oponente al suelo.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Principios del Bunkai Efectivo</h2>
        <div class="principles-list">
          <div class="principle-item">
            <div class="principle-number">1</div>
            <div class="principle-content">
              <h4 class="principle-title">Realismo (Genjitsu-sei)</h4>
              <p class="principle-text">
                La aplicación debe ser práctica y funcionar contra ataques realistas. No sirve una técnica que solo funciona con cooperación total.
              </p>
            </div>
          </div>

          <div class="principle-item">
            <div class="principle-number">2</div>
            <div class="principle-content">
              <h4 class="principle-title">Simplicidad (Kantan-sa)</h4>
              <p class="principle-text">
                Las mejores aplicaciones son directas y efectivas. La complejidad excesiva no funciona bajo estrés.
              </p>
            </div>
          </div>

          <div class="principle-item">
            <div class="principle-number">3</div>
            <div class="principle-content">
              <h4 class="principle-title">Versatilidad (Jūnan-sei)</h4>
              <p class="principle-text">
                Un solo movimiento de kata debe tener múltiples aplicaciones válidas. Esta flexibilidad es la clave del bunkai profundo.
              </p>
            </div>
          </div>

          <div class="principle-item">
            <div class="principle-number">4</div>
            <div class="principle-content">
              <h4 class="principle-title">Flujo (Nagare)</h4>
              <p class="principle-text">
                Las técnicas deben fluir naturalmente de una a otra, como en la kata. Cada movimiento prepara el siguiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Métodos de Práctica</h2>
        <div class="practice-methods">
          <div class="method-card">
            <h4 class="method-title">Kihon Bunkai</h4>
            <p class="method-description">
              Práctica básica con compañero cooperativo. Se ejecuta lentamente para entender la mecánica de cada técnica.
            </p>
          </div>

          <div class="method-card">
            <h4 class="method-title">Oyo Bunkai</h4>
            <p class="method-description">
              Aplicación adaptada a diferentes situaciones. Se practica con resistencia progresiva del compañero.
            </p>
          </div>

          <div class="method-card">
            <h4 class="method-title">Henka Bunkai</h4>
            <p class="method-description">
              Variaciones y adaptaciones. Se exploran diferentes respuestas a ataques cambiantes.
            </p>
          </div>

          <div class="method-card">
            <h4 class="method-title">Yakusoku Kumite</h4>
            <p class="method-description">
              Combate prometido donde se practican secuencias completas de bunkai a velocidad real.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">La Importancia del Bunkai</h2>
        <p class="section-text">
          Sin bunkai, las katas son solo ejercicios de forma vacíos. El bunkai transforma la kata en un manual vivo de defensa personal y combate. Como dijo Gichin Funakoshi: "La kata es la guía, pero el bunkai es el mapa del tesoro". Estudiar bunkai no solo mejora tus habilidades de combate, sino que profundiza tu comprensión del karate como un arte marcial completo y te conecta con la sabiduría de los maestros antiguos.
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

.levels-list {
  @apply space-y-6 mt-6;
}

.level-card {
  @apply bg-gradient-to-r from-stone-50 to-white rounded-lg p-6;
  @apply border-l-4 border-primary hover:shadow-lg transition-all duration-300;
}

.level-header {
  @apply flex items-center gap-4 mb-3;
}

.level-number {
  @apply w-12 h-12 rounded-full bg-primary text-white font-bold text-xl;
  @apply flex items-center justify-center flex-shrink-0;
}

.level-name {
  @apply text-xl font-bold text-stone-900;
}

.level-description {
  @apply text-base text-stone-700 mb-3 leading-relaxed;
}

.level-example {
  @apply bg-stone-100 rounded p-3 flex flex-col gap-1;
}

.example-label {
  @apply text-xs font-bold text-stone-600 uppercase;
}

.example-text {
  @apply text-sm text-stone-800 font-medium;
}

.types-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6;
}

.type-item {
  @apply bg-stone-50 rounded-lg p-5 hover:shadow-md transition-all duration-300;
}

.type-icon {
  @apply w-10 h-10 text-primary mb-3;
}

.type-title {
  @apply text-lg font-bold text-stone-900;
}

.type-subtitle {
  @apply text-sm text-primary font-medium mb-2;
}

.type-text {
  @apply text-sm text-stone-700;
}

.principles-list {
  @apply space-y-4 mt-6;
}

.principle-item {
  @apply flex gap-4 items-start bg-stone-50 rounded-lg p-4;
}

.principle-number {
  @apply w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary;
  @apply text-white font-bold flex items-center justify-center flex-shrink-0;
}

.principle-content {
  @apply flex-1;
}

.principle-title {
  @apply text-base font-bold text-stone-900 mb-1;
}

.principle-text {
  @apply text-sm text-stone-700;
}

.practice-methods {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6;
}

.method-card {
  @apply bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-5;
  @apply border border-primary/20 hover:shadow-md transition-all duration-300;
}

.method-title {
  @apply text-lg font-bold text-stone-900 mb-2;
}

.method-description {
  @apply text-sm text-stone-700;
}
</style>
