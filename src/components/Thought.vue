<script setup>
const props = defineProps({
  thought: {
    required: true
  }
})
</script>

<template>
  <v-card :style="{maxWidth: '250px', backgroundColor: props.thought.bgColor}"
          class="d-flex flex-column">
    <v-icon icon="mdi-close-circle-outline" size="large" class="align-self-end pt-2 pr-2" :style="{cursor: 'pointer'}"></v-icon>
    <v-card-text class="text-body-1">{{props.thought.text}}</v-card-text>
    <v-card-text class="text-body-2 font-weight-bold">{{props.thought.date.toLocaleDateString("en-US")}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Thought"
}
</script>

