<script setup lang="ts"></script>
<template>
  <v-app class="app">
    <v-toolbar density="compact" :style="{backgroundColor:'#00695C', color: '#E0F2F1'}">
      <v-toolbar-title>
        <span>TENDERLY</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat>
          <router-link class="link" to="/">Thoughts</router-link>
        </v-btn>
        <v-btn flat>
          <router-link class="link" to="/lounge">Lounge</router-link>
        </v-btn>
        <v-btn flat>
          <router-link class="link" to="/about">About</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<style scoped>

.link {
  text-decoration: none;
  color: inherit;
}

.app {
  background: url("@/assets/images/background.jpg") center no-repeat;
  background-size: cover;
}

</style>
