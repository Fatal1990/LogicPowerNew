<template>
  <form id="user" class="contacts">
    <Input :caption="'Имя получателя'" />
    <Input :caption="'Фамилия получателя'" />
    <Input :caption="'Отчество получателя'" />
    <Input :caption="'Номер телефона'" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import Input from "@/components/common/input/Input.vue";

@Component({
  name: "CheckoutAnotherRecipientComponent",
  components: {
    Input,
  },
})
export default class CheckoutAnotherRecipientComponent extends Vue {}
</script>

<style lang="scss" scoped>
.contacts {
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
