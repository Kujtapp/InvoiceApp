<template>
    <invoice-card v-for="newRes in NewResources" :key="newRes.id" class="dark-purple">
        <div class="id">
            <p>{{ newRes.id }}</p>
        </div>
        <div class="date">
            <p>{{ newRes.invoiceDate }}</p>
        </div>
        <div class="name">
            <p>{{ newRes.clientName }}</p>
        </div>
        <div class="price">
            <p>{{ newRes.invoiceTotal }}</p>
        </div>
        <div class="status orange">
            <p>pending</p>
        </div>
        <div>
            <img src="@/assets/icon-arrow-right.svg" alt="">
        </div>
    </invoice-card>
</template>

<script>
export default {
    props: ['NewResources']
}
</script>

<style lang="scss" scoped>
.status {
    padding: 5px 30px;
    border-radius: 20px;
}
</style>