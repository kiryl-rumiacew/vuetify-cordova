<template>
  <v-app :dark="darkMode">
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      v-model="drawer"
      app
    >
      <menu-list :items="menuItems" @click="menuClick" :cordova-ready="isCordovaReady" :mini-variant="miniVariant"></menu-list>
    </v-navigation-drawer>
    <v-toolbar fixed app v-if="toolbar">
      <v-btn icon  
        @click="drawer = !drawer" 
       :title="menu">
        <v-icon >fas fa-bars</v-icon>
      </v-btn>
      <v-toolbar-title v-text="config.app.title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- right menu-->
      <button-list :items="menuButtons" :cordova-ready="isCordovaReady" @click="menuClick"></button-list>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import appConfig from './config/index'
  import MenuList from './components/MenuList.vue'
  import ButtonList from './components/ButtonList.vue'
  export default {
    components: {
      menuList: MenuList,
      buttonList: ButtonList
    },
    data () {
      return {
        cordova: Vue.cordova,
        drawer: false,
        toolbar: appConfig.menu.toolbar,
        menuItems: appConfig.menu.items,
        menuButtons: appConfig.menu.buttons,
        miniVariant: appConfig.menu.miniVariant,
        darkMode: appConfig.menu.darkMode,
        config: appConfig,
        isCordovaReady: false
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
        self.isCordovaReady = true
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackButton, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackButton () {
        // Handle the back-button event on Android.
        // this.exitApp()
      },
      exitApp () {
        // By default it will exit the app.
        navigator.app.exitApp()
      },
      menuClick (item) {
        appConfig.menu.controller(item)
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
  
</style>
