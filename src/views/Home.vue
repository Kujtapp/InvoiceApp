<template>
  <div class="home container">
    <!-- header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total Invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by Status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="openInvoice()" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    <transition name="invoice">
      <invoice-modal
        v-if="showInvoiceModule"
        @acceptData="accData($event)"
      ></invoice-modal>
    </transition>
    <the-resources
      v-if="displayResources"
      :ReceivedData="acceptedData"
    ></the-resources>
  </div>
</template>

<script>
import TheResources from "../components/TheResources.vue";
import InvoiceModal from "../components/InvoiceModal.vue";
export default {
  name: "Home",
  components: {
    TheResources,
    InvoiceModal,
  },
  data() {
    return {
      filterMenu: false,
      showInvoiceModule: false,
      acceptedData: [],
      displayResources: false,
    };
  },
  provide() {
    return {
      closeInvoice: this.closeInvoice,
      toggleResources: this.toggleResources,
    };
  },
  methods: {
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
    openInvoice() {
      this.showInvoiceModule = true;
    },
    closeInvoice() {
      this.showInvoiceModule = false;
    },
    accData(acceptData) {
      this.acceptedData = acceptData;
    },
    toggleResources() {
      if (this.acceptedData == "") {
        return (this.displayResources = false);
      } else {
        return (this.displayResources = true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: white;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        cursor: pointer;
        position: relative;
        margin-right: 40px;

        img {
          margin-left: 9px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 5px 5px -1px rgba(0, 0, 0, 0.5),
            0 2px 4px -1px rgba(0, 0, 0, 0.02);

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }

      .button {
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          background-color: #fff;

          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>