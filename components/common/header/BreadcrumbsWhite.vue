<template>
  <div class="hide"></div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import {headerViewService} from "@services/header/view/header.view.service";

@Component({
  name: "BreadcrumbsWhiteComponent",
})
export default class BreadcrumbsWhiteComponent extends Vue {
  mounted() {
    headerViewService.isBreadcrumbsWhite = true;
  }

  unmounted() {
    headerViewService.isBreadcrumbsWhite = false;
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
</style>
