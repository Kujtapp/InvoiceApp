<template>
  <invoice-card class="dark-purple">
    <div class="id">
      <p>{{ ReceivedData.id }}</p>
    </div>
    <div class="date">
      <p>{{ ReceivedData.invoiceDate }}</p>
    </div>
    <div class="name">
      <p>{{ ReceivedData.clientName }}</p>
    </div>
    <div class="price">
      <p>{{ ReceivedData.invoiceTotal }}</p>
    </div>
    <div class="status orange">
      <p>Pending</p>
    </div>
    <div>
      <img src="@/assets/icon-arrow-right.svg" alt="" />
    </div>
  </invoice-card>
</template>

<script>
export default {
  props: ["ReceivedData"],
};
</script>

<style lang="scss" scoped>
.status {
  padding: 5px 30px;
  border-radius: 20px;
}
</style>