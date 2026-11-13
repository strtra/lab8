<template>
    <div>
        <MyToast></MyToast>
        <p>drizzle to interact with contract</p>
        <h2>account info</h2>
        <drizzle-account units="Ether" :precision="6"></drizzle-account>
        <h2>取得合約的值</h2>
        <drizzle-contract
        contractName="Storage"
        method="getData"
        label="data值"
        ></drizzle-contract>
        <h2>寫入合約的值</h2>
        <drizzle-contract-form
        contractName="Storage"
        method="setData"
        :placeholders="['fill in with new value']"></drizzle-contract-form>
    </div>
</template>

<script>
import MyToast from './MyToast.vue';

    export default {
        components:{MyToast}
    }
</script>

<style lang="scss" scoped>

</style>