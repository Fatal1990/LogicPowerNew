<template>

</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import RadionBtnGroup from "@/components/common/buttons/RadioBtnGroup.vue";

@Options({
    name: "CheckoutCashTypeComponent",
    components: {
        RadionBtnGroup
    }
})
export default class CheckoutCashTypeComponent extends Vue{

}
</script>

<style lang="scss" scoped>

</style>