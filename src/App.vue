<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          v-for="(item, i) in items"
          :key="i"
          @click="menuClick(item)">
          <v-layout row>
            <div class="menu-icon" :title="item.title"><v-icon >{{item.icon}}</v-icon></div>
            <div v-show="!miniVariant" class="menu-label">{{item.title}}</div>
          </v-layout>
        </v-list-tile>
        <hr v-if="isCordovaReady">
        <v-list-tile  
          v-if="isCordovaReady" 
          @click="exitApp()">
          <v-layout row>
            <div class="menu-icon"><v-icon >fas fa-sign-out-alt</v-icon></div>
            <div v-show="!miniVariant" class="menu-label">Exit</div>
          </v-layout>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- right menu-->
      <v-btn icon light @click="fontSize++" >
        <v-icon >fas fa-sign-out-alt</v-icon>
      </v-btn>
      </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import menuConfig from './config/menu'
  export default {
    data () {
      return {
        cordova: Vue.cordova,
        drawer: false,
        items: menuConfig.items,
        miniVariant: menuConfig.miniVariant,
        title: 'Vuetify',
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
        menuConfig.controller(item)
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
  .menu-icon{
    width:40px;
    line-height:40px;
    text-align:center;
  }
  .menu-label{
    line-height:40px;
  }
</style>
