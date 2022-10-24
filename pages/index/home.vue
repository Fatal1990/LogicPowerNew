<template>
  <Home/>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import Home from "@components/home/Home.vue";

@Component({
  name: "homeComponent",
  components: {Home},
})
export default class homeComponent extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
