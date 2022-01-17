<template>
    <div class="wrapper dark-purple">
        <div class="id">
            <p>#123123</p>
        </div>
        <div class="date">
            <p>1/17/2022</p>
        </div>
        <div class="name">
            <p>Kujtim Ramadani</p>
        </div>
        <div class="price">
            <p>$399.99</p>
        </div>
        <div class="status orange">
            <p>pending</p>
        </div>
        <div>
            <img src="@/assets/icon-arrow-right.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    font-size: 13px;

    .status {
        padding: 5px 30px;
        border-radius: 20px;
    }
}
</style>