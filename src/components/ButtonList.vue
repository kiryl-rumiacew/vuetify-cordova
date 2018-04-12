<template>
  <span>
    <v-btn icon  
        v-for="(item, i) in items"
        :key="i"
        @click="buttonClick(item)" 
        :class="item.classes"
        v-show="!item.cordova || cordovaReady"
        :title="item.title">
        <v-icon >{{item.icon}}</v-icon>
      </v-btn>
  </span>
</template>

<script>
  export default {
    props: {
      items: Array,
      cordovaReady: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    created () {
      // var self = this
    },
    methods: {
      buttonClick (item) {
        this.$emit('click', item)
      }
    }
  }
</script>

<style scoped>

</style>