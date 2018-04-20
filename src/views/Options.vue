<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs12 >
          <h2>{{lang.current.options}}</h2>
        </v-flex>
        <v-flex xs12 sm6 my-3>
           <v-select
            :items="languages"
            v-model="lang.selected"
            :label="lang.expr('language')"
            item-value="code"
            @change="changeLang($event)"
            >
              <template slot="selection" slot-scope="data">
                {{data.item.name}}
              </template>
              <template slot="item" slot-scope="data">
                {{data.item.name}}
              </template>
            </v-select>
        </v-flex>
        <v-flex xs12 >
          <h2>{{lang.current.menu}}</h2>
        </v-flex>
        <v-flex xs12 sm6 my-3>
           <v-switch
            label="Mini-menu"
            v-model="storage.config.menu.miniVariant"
            ></v-switch>
        </v-flex>
        <v-flex xs12 sm6 my-3>
           <v-switch
            label="Dark-mode"
            v-model="storage.config.menu.darkMode"
            ></v-switch>
        </v-flex>
        
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
    },
    data () {
      return {
        languages: [
          {
            code: 'es',
            name: 'Español'
          },
          {
            code: 'en',
            name: 'English'
          }
        ],
        lang: window.$lang,
        storage: window.$storage
      }
    },
    created () {
    },
    methods: {
      changeLang (lng) {
        this.lang.change(lng)
      }
    }
  }
</script>

<style scoped>
a:link {
  text-decoration: none;
  color:#004;
}
.align-center{
  text-align:center;
}
</style>