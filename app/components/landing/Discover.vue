<template>
  <section id="discover" class="LandingDiscover">
    <div class="LandingDiscover__container">
      <div class="LandingDiscover__header">
        <span class="LandingDiscover__badge">Contenido</span>
        <h2 class="LandingDiscover__title">
          ¿Qué puedes <span class="LandingDiscover__title-highlight">descubrir</span>?
        </h2>
        <p class="LandingDiscover__description">
          Explora las diferentes áreas de conocimiento disponibles en la
          plataforma
        </p>
      </div>

      <div class="LandingDiscover__grid">
        <!-- Estilos -->
        <div class="LandingDiscover__item">
          <div class="LandingDiscover__item-icon-wrapper LandingDiscover__item-icon-wrapper--primary">
            <Icon name="lucide:flame" class="LandingDiscover__item-icon" />
          </div>
          <h3 class="LandingDiscover__item-title">Estilos de Karate</h3>
          <p class="LandingDiscover__item-text">
            Conoce los principales estilos: Shotokan, Goju-Ryu, Shito-Ryu,
            Wado-Ryu y más. Aprende sus características, historia y filosofía.
          </p>
          <ul class="LandingDiscover__item-list">
            <li>Historia de cada estilo</li>
            <li>Fundadores y maestros</li>
            <li>Características técnicas</li>
          </ul>
        </div>

        <!-- Cinturones -->
        <div class="LandingDiscover__item">
          <div class="LandingDiscover__item-icon-wrapper LandingDiscover__item-icon-wrapper--secondary">
            <Icon name="lucide:award" class="LandingDiscover__item-icon" />
          </div>
          <h3 class="LandingDiscover__item-title">Cinturones y Grados</h3>
          <p class="LandingDiscover__item-text">
            Entiende el sistema de graduación Kyu y Dan, sus colores,
            significados y los requisitos para cada nivel.
          </p>
          <ul class="LandingDiscover__item-list">
            <li>Sistema Kyu (cinturones de color)</li>
            <li>Sistema Dan (cinturones negros)</li>
            <li>Significado de cada grado</li>
          </ul>
        </div>

        <!-- Técnicas -->
        <div class="LandingDiscover__item">
          <div class="LandingDiscover__item-icon-wrapper LandingDiscover__item-icon-wrapper--accent">
            <Icon name="lucide:hand" class="LandingDiscover__item-icon" />
          </div>
          <h3 class="LandingDiscover__item-title">Técnicas Fundamentales</h3>
          <p class="LandingDiscover__item-text">
            Explora Kihon (fundamentos), Kumite (combate) y las técnicas de
            ataque y defensa con descripciones detalladas.
          </p>
          <ul class="LandingDiscover__item-list">
            <li>Técnicas de puño (Tsuki)</li>
            <li>Técnicas de patada (Geri)</li>
            <li>Bloqueos y defensas (Uke)</li>
          </ul>
        </div>

        <!-- Katas -->
        <div class="LandingDiscover__item">
          <div class="LandingDiscover__item-icon-wrapper LandingDiscover__item-icon-wrapper--primary">
            <Icon name="lucide:workflow" class="LandingDiscover__item-icon" />
          </div>
          <h3 class="LandingDiscover__item-title">Katas Tradicionales</h3>
          <p class="LandingDiscover__item-text">
            Descubre las formas predeterminadas de movimientos, desde las más
            básicas hasta las avanzadas, con su historia y aplicaciones.
          </p>
          <ul class="LandingDiscover__item-list">
            <li>Katas Heian/Pinan</li>
            <li>Katas superiores</li>
            <li>Bunkai (aplicaciones)</li>
          </ul>
        </div>

        <!-- Terminología -->
        <div class="LandingDiscover__item">
          <div class="LandingDiscover__item-icon-wrapper LandingDiscover__item-icon-wrapper--secondary">
            <Icon name="lucide:languages" class="LandingDiscover__item-icon" />
          </div>
          <h3 class="LandingDiscover__item-title">Terminología Japonesa</h3>
          <p class="LandingDiscover__item-text">
            Aprende los términos esenciales en japonés utilizados en el dojo:
            comandos, números, partes del cuerpo y conceptos filosóficos.
          </p>
          <ul class="LandingDiscover__item-list">
            <li>Comandos del dojo</li>
            <li>Números en japonés</li>
            <li>Conceptos filosóficos</li>
          </ul>
        </div>

        <!-- Glosario -->
        <div class="LandingDiscover__item">
          <div class="LandingDiscover__item-icon-wrapper LandingDiscover__item-icon-wrapper--accent">
            <Icon name="lucide:book-a" class="LandingDiscover__item-icon" />
          </div>
          <h3 class="LandingDiscover__item-title">Glosario Completo</h3>
          <p class="LandingDiscover__item-text">
            Accede a un diccionario extenso de términos, traducciones y
            explicaciones detalladas para profundizar tu comprensión.
          </p>
          <ul class="LandingDiscover__item-list">
            <li>Búsqueda por término</li>
            <li>Traducciones detalladas</li>
            <li>Contexto y ejemplos</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.LandingDiscover {
  @apply relative py-16;
  @apply sm:py-20;
  @apply lg:py-24;
  @apply bg-gradient-to-b from-stone-50 to-white;
}

.LandingDiscover__container {
  @apply max-w-7xl mx-auto px-4;
  @apply sm:px-6;
  @apply lg:px-8;
}

.LandingDiscover__header {
  @apply text-center mb-12;
  @apply sm:mb-16;
  @apply lg:mb-20;
  @apply space-y-4;
}

.LandingDiscover__badge {
  @apply inline-block;
  @apply px-4 py-2;
  @apply bg-primary/10 text-primary;
  @apply rounded-full;
  @apply text-sm font-semibold;
  @apply border border-primary/20;
}

.LandingDiscover__title {
  @apply text-3xl font-bold text-stone-900;
  @apply sm:text-4xl;
  @apply lg:text-5xl;
  @apply tracking-tight;
}

.LandingDiscover__title-highlight {
  @apply text-primary;
}

.LandingDiscover__description {
  @apply text-base text-stone-600;
  @apply sm:text-lg;
  @apply lg:text-xl;
  @apply max-w-2xl mx-auto;
}

.LandingDiscover__grid {
  @apply grid grid-cols-1 gap-6;
  @apply sm:grid-cols-2 sm:gap-8;
  @apply lg:grid-cols-3 lg:gap-10;
}

.LandingDiscover__item {
  @apply bg-white;
  @apply rounded-2xl p-6;
  @apply sm:p-8;
  @apply border border-stone-200;
  @apply hover:border-primary/30;
  @apply hover:shadow-2xl;
  @apply transition-all duration-300;
  @apply hover:-translate-y-2;
  @apply flex flex-col;
}

.LandingDiscover__item-icon-wrapper {
  @apply w-14 h-14;
  @apply rounded-xl;
  @apply flex items-center justify-center;
  @apply mb-5;
  @apply transition-transform duration-300;
}

.LandingDiscover__item:hover .LandingDiscover__item-icon-wrapper {
  @apply scale-110 rotate-3;
}

.LandingDiscover__item-icon-wrapper--primary {
  @apply bg-primary/10;
}

.LandingDiscover__item-icon-wrapper--secondary {
  @apply bg-secondary/10;
}

.LandingDiscover__item-icon-wrapper--accent {
  @apply bg-orange-500/10;
}

.LandingDiscover__item-icon {
  @apply w-7 h-7;
}

.LandingDiscover__item-icon-wrapper--primary .LandingDiscover__item-icon {
  @apply text-primary;
}

.LandingDiscover__item-icon-wrapper--secondary .LandingDiscover__item-icon {
  @apply text-secondary;
}

.LandingDiscover__item-icon-wrapper--accent .LandingDiscover__item-icon {
  @apply text-orange-600;
}

.LandingDiscover__item-title {
  @apply text-xl font-bold text-stone-900 mb-3;
  @apply sm:text-2xl;
}

.LandingDiscover__item-text {
  @apply text-sm text-stone-600 mb-4;
  @apply sm:text-base;
  @apply leading-relaxed;
}

.LandingDiscover__item-list {
  @apply mt-auto space-y-2;
  @apply text-sm text-stone-700;
}

.LandingDiscover__item-list li {
  @apply flex items-start gap-2;
}

.LandingDiscover__item-list li::before {
  content: '•';
  @apply text-primary font-bold;
  @apply flex-shrink-0;
}
</style>
