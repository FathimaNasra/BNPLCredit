<template>
  <div class="blank-page"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Blank',
});
</script>

<style scoped>
.blank-page {
  /* Minimal styling to ensure the page takes up space */
  min-height: 100vh;
}
</style>
