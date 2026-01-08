<template>
  <div class="Landing">
    <!-- Hero Section -->
    <LandingHero />

    <!-- Summary Section -->
    <LandingSummary />

    <!-- Discover Section -->
    <LandingDiscover />

    <!-- Features Section -->
    <LandingFeatures />

    <!-- CTA Section -->
    <LandingCTA />

    <!-- Footer -->
    <LandingFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference '~/assets/css/main.css';

.Landing {
  @apply min-h-screen;
}
</style>
