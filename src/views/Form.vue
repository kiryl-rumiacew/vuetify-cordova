<template>
  <v-container >
      <v-layout row wrap align-center>
        <v-flex xs10 >
          <h1 >Contact form</h1>
        </v-flex>
        <v-flex xs2 align-right>
          <router-link :to="{ name: 'Home', params: { }}">Home</router-link>
        </v-flex>
        <v-flex xs12 :sm6="field.width==50" :sm4="field.width==33" :sm8="field.width==66"  px-1 v-for="(field, index) in formFields" :key="index" >
          <v-text-field
            v-model="field.value"
            :label="field.label"
            :placeholder="field.placeholder"
            :error-messages="errors.collect(field.name)"
            :data-vv-name="field.name"
            v-validate="field.validation"
            :required="field.required"
            :multi-line="field.multiLine"
            :mask="field.mask"
            :readonly="field.readonly"
            :type="field.type?field.type:'text'"
          ></v-text-field>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      formFields: {
        type: Array
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
    }
  }
</script>

<style >
.input-group label{
  margin-top: -22px;
  -webkit-transform: none !important;
  transform: none !important;
  font-size: 0.9em;
}
</style>