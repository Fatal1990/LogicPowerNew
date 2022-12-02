<template>
  <div class="delivery-list">
    <SelectGroup :caption="'Область'" />
    <SelectGroup :caption="'Город'" />
    <SelectGroup :caption="'Почтомат'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SelectGroup from "@/components/common/buttons/SelectGroup.vue";

@Component({
  name: "NovaPoshtaPostBoxComponent",
  components: {
    SelectGroup,
  },
})
export default class NovaPoshtaPostBoxComponent extends Vue {}
</script>

<style lang="scss" scoped>
.delivery-list {
  --gap: 16px;

  @include flex-container(row, flex-start, flex-start);
  flex-wrap: wrap;
  gap: var(--gap);

  & div {
    max-width: none;
    @include set-item-count-in-row(2);

    @include mobile {
      @include set-item-count-in-row(1);
    }
  }
}
</style>
