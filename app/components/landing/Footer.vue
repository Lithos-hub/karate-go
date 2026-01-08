<template>
  <footer class="LandingFooter">
    <div class="LandingFooter__container">
      <div class="LandingFooter__content">
        <div class="LandingFooter__brand">
          <h3 class="LandingFooter__brand-title">KARATE-GO</h3>
          <p class="LandingFooter__brand-text">
            Tu plataforma para aprender todo sobre el Karate-Do
          </p>
        </div>

        <div class="LandingFooter__links">
          <div class="LandingFooter__link-group">
            <h4 class="LandingFooter__link-title">Contenido</h4>
            <ul class="LandingFooter__link-list">
              <li><a href="#" class="LandingFooter__link">Estilos</a></li>
              <li><a href="#" class="LandingFooter__link">Cinturones</a></li>
              <li><a href="#" class="LandingFooter__link">Técnicas</a></li>
              <li><a href="#" class="LandingFooter__link">Katas</a></li>
            </ul>
          </div>

          <div class="LandingFooter__link-group">
            <h4 class="LandingFooter__link-title">Recursos</h4>
            <ul class="LandingFooter__link-list">
              <li><a href="#" class="LandingFooter__link">Glosario</a></li>
              <li><a href="#" class="LandingFooter__link">Terminología</a></li>
              <li><a href="#" class="LandingFooter__link">Historia</a></li>
            </ul>
          </div>

          <div class="LandingFooter__link-group">
            <h4 class="LandingFooter__link-title">Información</h4>
            <ul class="LandingFooter__link-list">
              <li>
                <a href="#" class="LandingFooter__link">Sobre el proyecto</a>
              </li>
              <li><a href="#" class="LandingFooter__link">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="LandingFooter__bottom">
        <p class="LandingFooter__copyright">
          © 2025 Karate-Go. Todos los derechos reservados.
        </p>
        <div class="LandingFooter__social">
          <a
            href="https://github.com/Lithos-hub/karate-go"
            target="_blank"
            rel="noopener noreferrer"
            class="LandingFooter__social-link"
            aria-label="GitHub"
          >
            <Icon name="lucide:github" class="LandingFooter__social-icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.LandingFooter {
  @apply bg-gradient-to-r from-black/95 to-stone-900/95;
  @apply backdrop-blur-sm;
  @apply border-t border-white/10;
}

.LandingFooter__container {
  @apply max-w-7xl mx-auto px-4 py-12;
  @apply sm:px-6 sm:py-16;
  @apply lg:px-8;
}

.LandingFooter__content {
  @apply grid grid-cols-1 gap-8;
  @apply md:grid-cols-2;
  @apply lg:grid-cols-4;
  @apply pb-8 mb-8;
  @apply border-b border-white/10;
}

.LandingFooter__brand {
  @apply lg:col-span-1;
}

.LandingFooter__brand-title {
  @apply text-2xl font-black text-white mb-2;
  @apply tracking-tight;
}

.LandingFooter__brand-text {
  @apply text-sm text-stone-400;
  @apply leading-relaxed;
}

.LandingFooter__links {
  @apply grid grid-cols-2 gap-8;
  @apply md:col-span-1;
  @apply lg:col-span-3;
  @apply lg:grid-cols-3;
}

.LandingFooter__link-group {
  @apply space-y-4;
}

.LandingFooter__link-title {
  @apply text-sm font-semibold text-white;
  @apply tracking-wide uppercase;
}

.LandingFooter__link-list {
  @apply space-y-2;
}

.LandingFooter__link {
  @apply text-sm text-stone-400;
  @apply hover:text-primary;
  @apply transition-colors duration-200;
  @apply block;
}

.LandingFooter__bottom {
  @apply flex flex-col gap-4;
  @apply sm:flex-row sm:justify-between sm:items-center;
}

.LandingFooter__copyright {
  @apply text-xs text-stone-400;
  @apply sm:text-sm;
}

.LandingFooter__social {
  @apply flex items-center gap-4;
}

.LandingFooter__social-link {
  @apply w-9 h-9;
  @apply flex items-center justify-center;
  @apply rounded-lg;
  @apply bg-white/5;
  @apply hover:bg-white/10;
  @apply border border-white/10;
  @apply transition-all duration-200;
  @apply hover:border-primary/50;
}

.LandingFooter__social-icon {
  @apply w-5 h-5 text-stone-400;
  @apply hover:text-primary;
  @apply transition-colors duration-200;
}
</style>
