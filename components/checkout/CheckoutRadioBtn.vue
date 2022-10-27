<template>
  <label class="radio-label" :for="option">
    <input
      type="radio"
      :id="option"
      :value="option"
      name="radio-input"
      :checked="option === 'Оплата картой'"
      @change="change"
    />
    <span class="radio-label__checkmark"></span>
    <span class="radio-label__option">{{ option }}</span>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Options({})
export default class CheckoutRadioBtnComponent extends Vue {
  @Prop({ required: true }) option: string;
  emits: ["change"];

  change(event){
    this.$emit('change', $event.target.value)
  }
}
</script>

<style lang="scss" scoped>
.radio-label {
  position: relative;

  @include fontUnify(16, 24);

  cursor: pointer;

  &:hover {
    & .radio-label__checkmark {
      border-color: $color-main;
    }
  }

  & input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      & + .radio-label__checkmark {
        background-color: $color-main;
        border: none;

        &::before {
          display: block;
        }
      }
    }
  }

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;

    border-radius: 50%;
    background-color: white;
    border: 1px solid $color-border-grey-light;

    transition: 0.2s ease;

    &::before {
      content: "";
      position: absolute;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }

  &__option {
    padding-left: 40px;
  }
}
</style>
