<template>
  <CardProduct/>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import CardProduct from "@components/card_product/CardProduct.vue";

@Component({
  name: "indexComponent",
  components: {CardProduct},
})
export default class indexComponent extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
