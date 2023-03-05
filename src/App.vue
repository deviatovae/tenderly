<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import Thought from '@/components/Thought.vue';

const thoughts = ref<{
  id: number,
  text: string,
  date: Date,
  bgColor: string
}[]>([])

function getRandomColor() {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
}

const addThought = (though: string) => {
  thoughts.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: though,
    date: new Date(),
    bgColor: getRandomColor(),
  })
}

</script>
<template>
  <v-app>
    <v-main>
      <div class="container mx-auto pa-6">
        <header class="mb-10 d-flex justify-space-between">
          <h1 class="text-h3">Thoughts</h1>
          <Modal @add-thought="addThought" :thoughts="thoughts"></Modal>
        </header>
        <v-main>
          <Thought v-for="thought in thoughts" :key="thought.id" :thought="thought"/>
        </v-main>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>

.container {
  max-width: 1000px;
}

</style>
