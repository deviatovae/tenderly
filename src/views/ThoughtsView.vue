<script setup lang="ts">
import {ref, watch} from "vue";
import type { Thought } from '@/types/thought';
import AddThoughtModal from '@/components/AddThoughtModal.vue';
import ThoughtComponent from '@/components/ThoughtComponent.vue';

const thoughts = ref<Thought[]>(JSON.parse(localStorage.getItem('thoughts') || '[]'))

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
  <v-main>
    <div class="container mx-auto pa-6">
      <header class="mb-10 d-flex justify-space-between">
        <h1 class="text-h3">Thoughts</h1>
        <AddThoughtModal @add-thought="addThought" :thoughts="thoughts"></AddThoughtModal>
      </header>
      <v-main class="d-flex flex-wrap">
        <ThoughtComponent @remove-thought="removeThought" v-for="thought in thoughts" :key="thought.id" :thought="thought"/>
      </v-main>
    </div>
  </v-main>
</template>

<script lang="ts">
export default {
  name: "ThoughtsView"
}
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
