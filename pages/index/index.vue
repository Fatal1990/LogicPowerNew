<template>
  <Home/>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import Home from "@components/home/Home.vue";

@Component({
  name: "indexComponent",
  components: {Home},
})
export default class indexComponent extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
