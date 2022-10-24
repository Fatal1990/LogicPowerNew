<template>
  <div class="hide"></div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import {headerViewService} from "@services/header/view/header.view.service";

@Component({
  name: "BreadcrumbsAbsoluteComponent",
})
export default class BreadcrumbsAbsoluteComponent extends Vue {
  mounted() {
    headerViewService.isBreadcrumbsAbsolute = true;
  }

  unmounted() {
    headerViewService.isBreadcrumbsAbsolute = false;
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
</style>
