<template>
  <v-container fluid >
      <v-layout column align-center >
        <div>
          <img src="../assets/icon.png" alt="Vuetify1" class="mb-5">
        </div>
        <div class="align-center" >
          Vuetify Template for Cordova Projects
        </div>
        <div class="align-center" >
          <a href="https://github.com/fraigo/vuetify-cordova" ><v-icon >fab fa-github</v-icon> GitHub Project</a>
        </div>
        <div class="align-center" >
          <router-link :to="{ name: 'Form', params: { }}">Home</router-link>
        </div>
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