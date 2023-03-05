<script setup>
import {ref} from "vue";

const showModal = ref(false)
const newThought = ref('')
const thoughts = ref([])
const errorMessage = ref('')

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
const addThought = () => {
  if (newThought.value.length > 5) {
    thoughts.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newThought.value,
      date: new Date(),
      bgColor: getRandomColor(),
    })
    showModal.value = false
    newThought.value = ''
    errorMessage.value = ''
  }
  return errorMessage.value = 'Try extending your thought to 5 words or more'
}

</script>
<template>
  <v-app>
    <v-main>
      <div class="container mx-auto pa-6">
        <header class="mb-10 d-flex justify-space-between">
          <h1 class="text-h3">Thoughts</h1>
          <v-dialog
              v-model.trim="showModal"
              width="auto"
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
                    autofocus/>
                <v-btn @click="addThought" variant="tonal" color="primary" class="mb-3" block>Add Thought</v-btn>
                <v-btn variant="tonal" color="primary" class="" block @click="showModal = false">Close</v-btn>
              </v-card-item>
            </v-card>
          </v-dialog>
        </header>
        <v-main>
          <v-card v-for="thought in thoughts"
                  :key="thought.id" :style="{maxWidth: '250px', backgroundColor: thought.bgColor}"
                  class="d-flex flex-column">
            <v-icon icon="mdi-close-circle-outline" size="large" class="align-self-end pt-2 pr-2" :style="{cursor: 'pointer'}"></v-icon>
            <v-card-text class="text-body-1">{{thought.text}}</v-card-text>
            <v-card-text class="text-body-2 font-weight-bold">{{thought.date.toLocaleDateString("en-US")}}</v-card-text>
          </v-card>
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
