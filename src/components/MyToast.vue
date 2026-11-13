<template>
    <div>

    </div>
</template>

<script>
    export default {
        mounted(){
            const contractEventHandler = ({contractName, eventName, data}) => {
                const display = `${contractName},${eventName}:${data.newValue},${data.date}`;
                const subOptions = {duration:3000}
                this.$toasted.show(display, subOptions)
            };
            this.$drizzleEvents.$on("drizzle/contractEvent", payload=>{
                contractEventHandler(payload)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>