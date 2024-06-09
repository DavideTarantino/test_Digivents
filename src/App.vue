<!-- <script setup>
  import HomePage from './views/HomePage.vue';
  import Backoffice from './views/Backoffice.vue';
</script>

<template>
<HomePage/>
<Backoffice/>
</template>

<style scoped>

</style> -->

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView />
  </header>
</template>

<style scoped></style>

