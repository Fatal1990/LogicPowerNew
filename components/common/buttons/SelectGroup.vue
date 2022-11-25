<template>
  <div
    class="select__w"
    tabindex="0"
    :class="{ active: openList }"
    @click="openList = !openList"
    @blur="openList = false"
  >
    <div class="select">
      <input
        class="select__input"
        type="text"
        disabled
        :placeholder="placeholder"
        :value="choisedValue"
      />
    </div>
    <SvgIcon class="select__icon" :icon="icons['arrow-down']" />
    <div class="select__option-list">
      <div
        class="select__option-item"
        v-for="item of selectList"
        :key="item"
        @click.stop="
          choisedValue = item;
          openList = false;
        "
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import { Prop, VModel, Watch } from "vue-property-decorator";

@Options({
  name: "SelectGroupComponent",
  components: { SvgIcon },
})
export default class SelectGroupComponent extends Vue {
  @Prop({ required: true }) selectList: any[];
  @Prop({ required: false }) placeholder: string;

  openList: boolean = false;

  @VModel()
  choisedValue: string = "";

  // mounted(): void
  // {
  //   setTimeout(() => {
  //     this.choisedValue = 'dsa'
  //   }, 7000)
  // }

  @Watch('choisedValue')
  changeChoisedValue() {
    this.$emit('input', this.choisedValue)
  }
}
</script>

<style lang="scss" scoped>
.select {
  &__w {
    position: relative;

    width: 100%;

    @include flex-container(row, space-between, center);

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    padding: 8px;

    cursor: pointer;

    &:hover {
      border-color: var(--color-ink-base);
    }

    &.active {
      border-color: var(--color-ink-base);

      .select__icon {
        transform: rotateZ(180deg);
      }

      .select__option-list {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__input {
    @include fontUnify;
    color: var(--color-ink-base);

    cursor: pointer;
  }

  &__icon {
    @include fixedHW(24px, 24px);

    transition: 0.2s ease-in-out;
  }

  &__option-list {
    position: absolute;
    top: 42px;
    left: 0;
    z-index: 500;

    width: 100%;

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    transition: 0.2s ease-in-out;

    opacity: 0;
    visibility: hidden;

    &:hover {
      border-color: var(--color-ink-base);
    }
  }

  &__option-item {
    @include fontUnify;

    padding: 8px;

    transition: 0.2s ease-in-out;

    &:first-child {
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:hover {
      background-color: var(--color-primary-lightest);
    }
  }
}
</style>
