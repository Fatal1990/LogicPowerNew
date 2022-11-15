<template>
  <div class="input__w">
    <div class="input">
      <input
        class="input__field"
        type="text"
        ref="input"
        @input="setInputValue"
        v-model.lazy="inputValue"
        :class="{ filled: inputValue.length }"
      />
      <span class="input__caption">Имя</span>
      <SvgIcon
        class="input__clear"
        :icon="icons['cross']"
        v-show="inputValue.length > 1"
        @click.native="clearInputValue"
      />
    </div>
    <span class="input__error-caption" v-show="inputValue.length <= 1"
      >Неккоректные вводные данные</span
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@/_shared/components/svg/SvgIcon.vue";

@Component({
  name: "InputComponent",
  components: {
    SvgIcon,
  },
})
export default class InputComponent extends Vue {
  $refs: {
    input: HTMLInputElement;
  };

  inputValue: string = "";

  setInputValue() {
    this.inputValue = this.$refs.input.value;
    this.inputValue = this.inputValue.trimLeft();
  }

  clearInputValue() {
    this.inputValue = "";
  }
}
</script>

<style lang="scss" scoped>
.input {
  &__w {
    max-width: 363px;
    width: 100%;

    @include flex-container(column, center, flex-start);
    gap: 4px;
  }

  position: relative;

  width: 100%;

  @include flex-container(row, space-between, center);

  background-color: white;

  border: 1px solid $color-border-grey-lighter;
  border-radius: 8px;

  padding: 16px;

  transition: 0.2s ease;

  &:hover {
    border-color: $color-bg-black;
  }

  &:focus-within {
    border-color: $color-bg-black;
  }

  &:has(.input__field.error) {
    border-color: #fb2424;
  }

  &__field {
    width: 100%;

    @include fontUnify;

    padding-right: 24px;

    &:focus {
      & + .input__caption {
        @include fontUnify(12, 12);

        top: 0px;
        left: 12px;

        background-color: white;

        padding: 0 4px;
      }
    }

    &.filled {
      & + .input__caption {
        @include fontUnify(12, 12);

        top: 0px;
        left: 12px;

        background-color: white;

        padding-inline: 4px;
      }
    }

    &.error {
      & + .input__caption {
        color: #fb2424;
      }
    }
  }

  &__caption {
    @include fontUnify;
    color: $color-text-lighter;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

    pointer-events: none;

    transition: 0.2s ease;
  }

  &__clear {
    // @include fixedHW(20px, 20px);

    color: $color-text-lighter;

    user-select: none;
    cursor: pointer;
  }
  
  &__error-caption {
    @include fontUnify(12, 16);

    color: #fb2424;

    padding-inline: 8px;
  }
}
</style>
