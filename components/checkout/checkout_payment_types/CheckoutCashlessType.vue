<template>
    <RadionBtnGroup />
  </template>
  
  <script lang="ts">
  import { Options, Vue } from "~/tools/version-types";
  import RadionBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";
  
  @Options({
      name: "CheckoutCashlessTypeComponent",
      components: {
          RadionBtnGroup
      }
  })
  export default class CheckoutCashlessTypeComponent extends Vue{
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>