<template>
  <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12 sm6 >
          <img src="../assets/icon.png" alt="Vuetify1" class="mb-5">
        </v-flex>
        <v-flex xs12 sm6 my-3>
          <h3>Vuetify Template for Cordova Projects</h3>
          <br>
          <router-link :to="{ name: 'Form', params: { }}"><v-icon >fab fa-wpforms</v-icon> Form example</router-link>
          <br>
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