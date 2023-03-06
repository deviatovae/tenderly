<script setup lang="ts">
import {ref} from "vue";
const showModal = ref(false)
const newThought = ref('')
const errorMessage = ref('')

const emit = defineEmits<{
  (e: 'addThought', value: string): void
}>()

const handleAddThought = () => {
  if (newThought.value.length > 5) {
    emit('addThought', newThought.value);
    newThought.value = ''
    errorMessage.value = ''
    showModal.value = false
  }
  return errorMessage.value = 'Try extending your thought to 5 words or more'
}

const close = () => {
  showModal.value = false
}
const clear = () => {
  errorMessage.value = ''
}

</script>

<template>
  <v-dialog
      v-model.trim="showModal"
      width="auto"
      @update:model-value="clear"
  >
    <template v-slot:activator="{ props }">
      <v-btn
          color="primary"
          icon="mdi-plus"
          v-bind="props"
          rounded
      >
      </v-btn>
    </template>

    <v-card class="bg-lime-lighten-5" :style="{minWidth: '450px'}">
      <v-card-item class="pt-8 pb-8">
        <p v-if="errorMessage" class="text-red-lighten-1 text-body-2">{{errorMessage}}</p>
        <v-textarea
            v-model="newThought"
            auto-grow
            variant="solo"
            bg-color="secondary"
            placeholder="Your thought..."
            autofocus />
        <v-btn @click="handleAddThought" variant="tonal" color="primary" class="mb-3" block>Add Thought</v-btn>
        <v-btn variant="tonal" color="primary" class="" block @click="close">Close</v-btn>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  name: "AddThoughtModal",
}

</script>
