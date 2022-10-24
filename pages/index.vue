<template>
  <div class="site-content">
    <SvgSprite />
    <!-- <Header /> -->
    <Menu />
    <main class="site-main">
      <!-- <Nuxt /> -->
      <Checkout />
      <!-- <Warranty /> -->
    </main>
    <!-- <Footer /> -->
    <!-- <PopUpCart/> -->
  </div>
</template>

<script lang="ts">
import Home from "@components/home/Home.vue";
import { Component, Vue } from "~/tools/version-types";
import Header from "@components/common/header/Header.vue";
import Footer from "@components/common/footer/Footer.vue";
import SvgSprite from "@shared/components/svg/SvgSprite.vue";
import Menu from "@components/common/header/menu/Menu.vue";
import PopUpCart from "@components/popup/PopUpCart.vue";
import Checkout from "@components/checkout/Checkout.vue";
import Warranty from "@/components/Warranty.vue";

@Component({
  components: {
    PopUpCart,
    Menu,
    SvgSprite,
    Footer,
    Header,
    Home,
    Checkout,
    Warranty,
  },
})
export default class IndexPageComponent extends Vue {
  mounted() {
    console.log(this.icons);
  }
}
</script>

<style lang="scss" scoped>
.site-content {
  display: flex;
  flex-direction: column;
}

.site-main {
  padding-top: var(--full-height-header);
}
</style>
