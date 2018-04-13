<template>
  <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <img src="../assets/icon.png" alt="Vuetify1" class="mb-5">
        </v-flex>
        <v-flex xs12>
          Vuetify Template for Cordova Projects
        </v-flex>
        <v-flex xs12 my-3>
          <router-link :to="{ name: 'Form', params: { }}">Form example</router-link>
        </v-flex>
        <v-flex xs12>
          <a href="https://github.com/fraigo/vuetify-cordova" ><v-icon >fab fa-github</v-icon> GitHub Project</a>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<style scoped>
a:link {
  text-decoration: none;
  color:#004;
}
.align-center{
  text-align:center;
}
</style>