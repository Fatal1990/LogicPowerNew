<template>
  <article class="catalog">
    <div class="catalog__list">
      <CatalogItem v-for="category in catalog"
                   :key="category.id"
                   :item="category"
                   :isVertical="isVertical"
      />
    </div>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import CatalogItem from "@components/common/header/catalog/CatalogItem.vue";
import {Category} from "@models/catalog/category";
import {Prop} from "vue-property-decorator";

@Component({
  name: "CatalogComponent",
  components: {CatalogItem, SvgIcon},
})
export default class CatalogComponent extends Vue {
  @Prop({default: false}) isVertical: boolean;

  rawData: any = [
    {
      "id": '1',
      "img": "https://logicpower.ua/storage/1914178/11142_menu.svg",
      "name": "Комплекти для резервного живлення",
      "position": 10,
      "children": [
        {
          "id": "2",
          "name": "Комплекти для резервного живлення побутові",
          "children": []
        },
        {
          "id": "3161",
          "name": "Комплекти для резервного живлення промислові",
          "children": []
        }
      ]
    },
    {
      "id": "40",
      "img": "https://logicpower.ua/storage/1914183/2415_menu.svg",
      "name": "Джерела безперебійного живлення",
      "position": 20,
      "children": [
        {
          "id": "42",
          "name": "ДБЖ лінійно інтерактивні",
          "children": [
            {
              "id": "44444",
              "name": "Поувовуооуоувовооуоу",
              "children": []
            },
            {
              "id": "555",
              "name": "Камеры",
              "children": []
            },
            {
              "id": "5671",
              "name": "Ip камеры",
              "children": []
            }
          ]
        },
        {
          "id": "45",
          "name": "ДБЖ MPPT з правильною синусоїдою",
          "children": []
        },
        {
          "id": "44",
          "name": "ДБЖ гібридний MPPT з правильною синусоїдою",
          "children": []
        }
      ]
    },
    {
      "id": "27",
      "img": "https://logicpower.ua/storage/1914181/275_menu.svg",
      "name": "Акумулятори AGM",
      "position": 30,
      "children": [
        {
          "id": "31",
          "name": "Акумулятори гелеві (GEL)",
          "children": []
        },
      ]
    },
  ];
  catalog: Category[] = Category.fromJson(this.rawData as []);
}
</script>

<style lang="scss" scoped>
.catalog {
  padding: 24px 0;

  &__list {
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: white;

    overflow-y: auto;
    @include scrollbarStyle();
  }
}
</style>
