<template>
  <label class="search">
    <SvgIcon class="search__icon" :icon="icons['search']"/>
    <input class="search__input" type="text"
           name="search"
           required
           v-model="searchInput"
           @keyup.enter="search"
           autocomplete="off"
    >
    <span class="search__btn hide-mob" @click="search">
      Найти
    </span>
  </label>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  name: "SearchComponent",
  components: {SvgIcon},
})
export default class SearchComponent extends Vue {
  searchInput: string = '';

  search() {

  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  width: 100%;
  max-width: 700px;
  min-width: 200px;

  display: flex;
  align-items: center;

  padding: 10px;

  color: $color-text-light;
  background-color: white;
  border-radius: 6px;

  @include smallScreen {
    padding: 8px 6px;
  }

  @include bigMobile {
    min-width: 160px;
  }

  &__icon {
    cursor: pointer;
    object-fit: contain;

    color: $color-text;

    @include bigMobile {
      width: 16px;
    }
  }

  &__input {
    width: 100%;
    padding-right: 52px;
    margin-left: 10px;

    line-height: 1;

    @include bigMobile {
      margin-left: 6px;
      padding-right: 0;
    }
  }

  &__btn {
    position: absolute;
    top: 0;
    right: 0;

    height: 100%;
    display: flex;
    align-items: center;

    padding: 0 16px;

    color: white;
    background-color: $color-main;
    border-radius: 6px;

    cursor: pointer;

    @include smallScreen {
      padding: 0 8px;
    }

    @include bigMobile {
      display: none;
    }

    &:hover {
      background-color: $color-main-dark;
    }
  }
}

</style>
