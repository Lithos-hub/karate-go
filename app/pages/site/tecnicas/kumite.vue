<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Kumite - Combate</h1>
      <p class="page-description">
        La aplicación práctica del karate: donde la técnica cobra vida
      </p>
    </div>

    <div class="page-content">
      <section class="content-section">
        <h2 class="section-title">¿Qué es Kumite?</h2>
        <p class="section-text">
          Kumite (組手) significa "manos enfrentadas" o "combate" en japonés. Es la aplicación práctica de las técnicas de karate contra un oponente. El Kumite desarrolla el timing, la distancia (Ma-ai), la estrategia y la capacidad de aplicar técnicas bajo presión.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Tipos de Kumite</h2>
        <div class="kumite-types">
          <div class="type-card">
            <div class="type-header">
              <h3 class="type-name">Gohon Kumite</h3>
              <span class="type-badge">Nivel: Básico</span>
            </div>
            <p class="type-description">
              <strong>Combate de Cinco Pasos:</strong> El atacante avanza cinco veces con la misma técnica mientras el defensor retrocede bloqueando. Al quinto ataque, el defensor contraataca.
            </p>
            <div class="type-objectives">
              <span class="objective">Distancia</span>
              <span class="objective">Timing básico</span>
              <span class="objective">Confianza</span>
            </div>
          </div>

          <div class="type-card">
            <div class="type-header">
              <h3 class="type-name">Sanbon Kumite</h3>
              <span class="type-badge">Nivel: Principiante</span>
            </div>
            <p class="type-description">
              <strong>Combate de Tres Pasos:</strong> Similar al Gohon pero con tres ataques. Permite mayor enfoque en la técnica de cada movimiento.
            </p>
            <div class="type-objectives">
              <span class="objective">Precisión</span>
              <span class="objective">Control</span>
              <span class="objective">Coordinación</span>
            </div>
          </div>

          <div class="type-card">
            <div class="type-header">
              <h3 class="type-name">Kihon Ippon Kumite</h3>
              <span class="type-badge">Nivel: Intermedio</span>
            </div>
            <p class="type-description">
              <strong>Combate Básico de Un Paso:</strong> Un solo ataque fuerte y decidido. El defensor debe bloquear y contraatacar con precisión. Requiere mayor reacción y control.
            </p>
            <div class="type-objectives">
              <span class="objective">Reacción</span>
              <span class="objective">Potencia</span>
              <span class="objective">Kime</span>
            </div>
          </div>

          <div class="type-card">
            <div class="type-header">
              <h3 class="type-name">Jiyu Ippon Kumite</h3>
              <span class="type-badge">Nivel: Avanzado</span>
            </div>
            <p class="type-description">
              <strong>Combate Libre de Un Paso:</strong> El ataque es predeterminado pero la distancia y el timing son libres. El defensor debe adaptarse a un ataque más realista.
            </p>
            <div class="type-objectives">
              <span class="objective">Adaptabilidad</span>
              <span class="objective">Ma-ai</span>
              <span class="objective">Estrategia</span>
            </div>
          </div>

          <div class="type-card">
            <div class="type-header">
              <h3 class="type-name">Jiyu Kumite</h3>
              <span class="type-badge">Nivel: Experto</span>
            </div>
            <p class="type-description">
              <strong>Combate Libre:</strong> Combate libre real donde ambos participantes pueden atacar y defender libremente. La máxima expresión del karate deportivo.
            </p>
            <div class="type-objectives">
              <span class="objective">Improvisación</span>
              <span class="objective">Táctica</span>
              <span class="objective">Control total</span>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Conceptos Clave del Kumite</h2>
        <div class="concepts-list">
          <div class="concept-item">
            <div class="concept-icon-wrapper">
              <UIcon name="lucide:ruler" class="concept-icon" />
            </div>
            <div class="concept-content">
              <h4 class="concept-title">Ma-ai (Distancia)</h4>
              <p class="concept-text">
                La distancia correcta entre tú y tu oponente. Demasiado cerca y estás vulnerable; demasiado lejos y no puedes atacar. Dominar el Ma-ai es esencial.
              </p>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-icon-wrapper">
              <UIcon name="lucide:clock" class="concept-icon" />
            </div>
            <div class="concept-content">
              <h4 class="concept-title">Timing (Hyoshi)</h4>
              <p class="concept-text">
                El momento perfecto para atacar o defender. El timing correcto puede convertir una técnica simple en devastadora.
              </p>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-icon-wrapper">
              <UIcon name="lucide:eye" class="concept-icon" />
            </div>
            <div class="concept-content">
              <h4 class="concept-title">Metsuke (Mirada)</h4>
              <p class="concept-text">
                No mires a un punto específico del oponente. Tu mirada debe abarcar todo el cuerpo del adversario para percibir sus intenciones.
              </p>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-icon-wrapper">
              <UIcon name="lucide:zap" class="concept-icon" />
            </div>
            <div class="concept-content">
              <h4 class="concept-title">Sen no Sen (Iniciativa)</h4>
              <p class="concept-text">
                Atacar en el momento exacto en que el oponente decide atacar, interrumpiendo su técnica antes de que comience.
              </p>
            </div>
          </div>

          <div class="concept-item">
            <div class="concept-icon-wrapper">
              <UIcon name="lucide:shield" class="concept-icon" />
            </div>
            <div class="concept-content">
              <h4 class="concept-title">Zanshin (Conciencia)</h4>
              <p class="concept-text">
                Mantener la concentración y la guardia incluso después de un intercambio. El combate no termina después de un ataque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Reglas y Etiqueta</h2>
        <div class="rules-grid">
          <div class="rule-item">
            <UIcon name="lucide:hand" class="rule-icon" />
            <h4 class="rule-title">Control (Sundome)</h4>
            <p class="rule-text">
              Los golpes deben detenerse justo antes del impacto. El control es señal de maestría, no debilidad.
            </p>
          </div>

          <div class="rule-item">
            <UIcon name="lucide:heart-handshake" class="rule-icon" />
            <h4 class="rule-title">Respeto</h4>
            <p class="rule-text">
              Siempre saluda (rei) antes y después del kumite. Tu compañero te ayuda a mejorar.
            </p>
          </div>

          <div class="rule-item">
            <UIcon name="lucide:shield-alert" class="rule-icon" />
            <h4 class="rule-title">Seguridad</h4>
            <p class="rule-text">
              Usa equipo de protección apropiado. La seguridad de tu compañero es tu responsabilidad.
            </p>
          </div>

          <div class="rule-item">
            <UIcon name="lucide:brain" class="rule-icon" />
            <h4 class="rule-title">Aprendizaje</h4>
            <p class="rule-text">
              El objetivo no es "ganar" sino aprender. Cada kumite es una oportunidad de mejora.
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

.kumite-types {
  @apply space-y-6 mt-6;
}

.type-card {
  @apply bg-gradient-to-br from-stone-50 to-white rounded-lg p-6;
  @apply border border-stone-200 hover:border-primary/50;
  @apply hover:shadow-xl transition-all duration-300;
}

.type-header {
  @apply flex items-center justify-between mb-3;
}

.type-name {
  @apply text-xl font-bold text-stone-900;
}

.type-badge {
  @apply px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full;
}

.type-description {
  @apply text-base text-stone-700 mb-4;
}

.type-objectives {
  @apply flex flex-wrap gap-2;
}

.objective {
  @apply px-3 py-1 bg-stone-200 text-stone-700 text-xs rounded-full;
}

.concepts-list {
  @apply space-y-4 mt-6;
}

.concept-item {
  @apply flex gap-4 items-start bg-stone-50 rounded-lg p-5;
  @apply hover:shadow-md transition-all duration-300;
}

.concept-icon-wrapper {
  @apply w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0;
}

.concept-icon {
  @apply w-6 h-6 text-primary;
}

.concept-content {
  @apply flex-1;
}

.concept-title {
  @apply text-lg font-bold text-stone-900 mb-2;
}

.concept-text {
  @apply text-sm text-stone-700 leading-relaxed;
}

.rules-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6;
}

.rule-item {
  @apply bg-stone-50 rounded-lg p-5 hover:shadow-md transition-all duration-300;
}

.rule-icon {
  @apply w-8 h-8 text-primary mb-3;
}

.rule-title {
  @apply text-base font-bold text-stone-900 mb-2;
}

.rule-text {
  @apply text-sm text-stone-700;
}
</style>
