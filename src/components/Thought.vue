<script setup lang="ts">
const props = defineProps({
  thought: {
    required: true
  }
})

const emit = defineEmits<{
  (e: 'removeThought', id: number): void
}>()

</script>

<template>
  <v-card :style="{width: '250px', backgroundColor: props.thought.bgColor}"
          class="d-flex flex-column mr-4 mb-4">
    <v-icon @click="emit('removeThought', props.thought.id)"
            icon="mdi-close-circle-outline"
            size="large"
            class="align-self-end pt-2 pr-2" :style="{cursor: 'pointer'}"></v-icon>
    <v-card-text class="text-body-1">{{props.thought.text}}</v-card-text>
    <v-card-text class="text-body-2 font-weight-bold">{{props.thought.date}}</v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "Thought"
}
</script>

