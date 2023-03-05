<script setup lang="ts">
import { ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
import Thought from '@/components/Thought.vue';
import type { Thought as ThoughtModel } from '@/types/thought';

const thoughts = ref<ThoughtModel[]>(JSON.parse(localStorage.getItem('thoughts') || '[]'))

watch(thoughts, () => {
  localStorage.setItem('thoughts', JSON.stringify(thoughts.value))
}, { deep: true })

function getRandomColor() {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
}

const addThought = (though: string) => {
  thoughts.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: though,
    date: new Date().toLocaleDateString('en-US'),
    bgColor: getRandomColor(),
  })
}

const removeThought = (id: number) => {
  const thought = thoughts.value.findIndex(thought => thought.id === id)
  thoughts.value.splice(thought, 1)
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
        <v-main class="d-flex flex-wrap">
          <Thought @remove-thought="removeThought" v-for="thought in thoughts" :key="thought.id" :thought="thought"/>
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
