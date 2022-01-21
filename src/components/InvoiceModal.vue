<template>
  <div class="invoice-wrap flex flex-column">
    <form @submit.prevent="createInvoice" class="invoice-content">
      <h1>New Invoice</h1>

      <!-- Bill From -->
      <div class="bill-form flex flex-column">
        <h1>Bill from</h1>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input
            
            type="text"
            id="billerStreetAddress"
            v-model="newInvoice.billerStreetAddress"
          />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input  type="text" id="billerCity" v-model="newInvoice.billerCity" />
          </div>
          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input
              
              type="text"
              id="billerZipCode"
              v-model="newInvoice.billerZipCode"
            />
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              
              type="text"
              id="billerCountry"
              v-model="newInvoice.billerCountry"
            />
          </div>
        </div>
      </div>

      <!-- bill to -->
      <div class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client Name</label>
          <input type="text" id="clientName" v-model="newInvoice.clientName"/>
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client Email</label>
          <input  type="text" id="clientEmail" v-model="newInvoice.clientEmail" />
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input
            
            type="text"
            id="clientStreetAddress"
            v-model="newInvoice.clientStreetAddress"
          />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input  type="text" id="clientCity" v-model="newInvoice.clientCity" />
          </div>
          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input
              
              type="text"
              id="clientZipCode"
              v-model="newInvoice.clientZipCode"
            />
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input
              
              type="text"
              id="clientCountry"
              v-model="newInvoice.clientCountry"
            />
          </div>
        </div>
      </div>

      <!-- Invoice Work Details -->
      <div class="invoice-work flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input
              disabled
              type="text"
              id="invoiceDate"
              v-model="newInvoice.invoiceDate"
            />
          </div>
          <div class="input flex flex-column">
            <label for="paymentDueDate">Payments Due</label>
            <input
              disabled
              type="text"
              id="paymentDueDate"
              v-model="newInvoice.paymentDueDate"
            />
          </div>
        </div>
        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select  type="text" id="paymentTerms" v-model="newInvoice.paymentTerms">
            <option value="30">Net 30 days</option>
            <option value="60">Net 60 days</option>
          </select>
        </div>
        <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input
            
            type="text"
            id="productDescription"
            v-model="newInvoice.productDescription"
          />
        </div>
        <div class="work-items">
          <h3>Item List</h3>
          <table class="item-list">
            <tr class="table-heading flex">
              <th class="item-name">Item Name</th>
              <th class="qty">Qty</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>
            <tr
              class="table-items flex"
              v-for="(item, index) in invoiceItemList"
              :key="index"
            >
              <td class="item-name">
                <input type="text" v-model="item.itemName" />
              </td>
              <td class="qty"><input type="text" v-model="item.qty" /></td>
              <td class="price"><input type="text" v-model="item.price" /></td>
              <td class="total flex">
                ${{ (item.total = item.qty * item.price) }}
              </td>
              <img
                @click="deleteInvoiceItem(item.id)"
                src="@/assets/icon-delete.svg"
                alt=""
              />
            </tr>
          </table>
          <div @click="addNewInvoiceItem" class="flex button">
            <img src="@/assets/icon-plus.svg" alt="" />
            Add New Item
          </div>
        </div>
      </div>
      <!-- Save/Exit -->
      <div class="save flex">
        <div>
          <button @click="closeInvoice" type="button" class="red">
            Cancel
          </button>
        </div>
        <div class="right">
          <button class="dark-purple">Save Draft</button>
          <button @click="sendData()" class="purple">Create Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { uid } from "uid";
export default {
  name: "InvoiceModal",
  inject: ['closeInvoice'],
  data() {
    return {
      dateOptions: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      invoicePending: '',
      invoiceDraft: null,
      invoiceItemList: [],
      

      newInvoice:
        {
          id: null,
          billerStreetAddress: '',
          billerCity: '',
          billerZipCode: null,
          billerCountry: '',
          clientName: '',
          clientEmail: '',
          clientStreetAddress: '',
          clientCity: '',
          clientZipCode: null,
          clientCountry: '',
          invoiceDateUnix: null,
          invoiceDate: '',
          paymentTerms: null,
          paymentDueDateUnix: null,
          paymentDueDate: null,
          productDescription: '',
          invoiceTotal: 2,
        }
    };
  },
  methods: {
    addNewInvoiceItem() {
      this.invoiceItemList.push({
        id: uid(),
        itemName: "",
        qty: "",
        price: 0,
        total: 0,
      });
    },
    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter(
        (item) => item.id !== id
      );
    },
    sendData() {
      this.$emit('acceptData', this.newInvoice)
    },
  },
  created() {
    //get current date for invoice date field
    this.newInvoice.invoiceDateUnix = Date.now();
    console.log(this.newInvoice.invoiceDateUnix);
    this.newInvoice.invoiceDate = new Date(this.newInvoice.invoiceDateUnix).toLocaleDateString("eu",this.dateOptions);

    const futureDate = new Date();
    console.log(futureDate);

    this.newInvoice.paymentDueDateUnix = futureDate.setDate(futureDate.getDate());
    // console.log(this.newInvoice.paymentDueDateUnix);

    // this.newInvoice.paymentDueDate = new Date(this.newInvoice.paymentDueDateUnix).toLocaleDateString("eu", this.dateOptions);
  },

};
</script>

<style lang="scss" scoped>
.invoice-wrap {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 900px) {
    left: 90px;
  }

  .invoice-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #141625;
    color: #fff;
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.2),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      color: #7c5dfa;
      font-size: 12px;
      margin-bottom: 24px;
    }

    // bill to / bill from
    .bill-to,
    .bill-form {
      margin-bottom: 48px;

      .location-details {
        gap: 16px;

        div {
          flex: 1;
        }
      }
    }

    // invoice Work

    .invoice-work {
      .payment {
        gap: 24px;

        div {
          flex: 1;
        }
      }

      .work-items {
        .item-list {
          width: 100%;

          //Item Table Styling
          .table-heading,
          .table-items {
            gap: 16px;
            font-size: 12px;

            .item-name {
              flex-basis: 50%;
            }

            .qty {
              flex-basis: 10%;
            }

            .price {
              flex-basis: 20%;
            }

            .total {
              flex-basis: 20%;
              align-self: center;
            }
          }

          .table-heading {
            margin-bottom: 16px;

            th {
              text-align: left;
            }
          }

          .table-items {
            position: relative;
            margin-bottom: 24px;

            img {
              cursor: pointer;
              position: absolute;
              top: 15px;
              right: 0;
              height: 16px;
            }
          }
        }

        .button {
          color: #fff;
          background-color: #252945;
          align-items: center;
          justify-content: center;
          width: 100%;

          img {
            margin-right: 4px;
          }
        }
      }
    }

    .save {
      margin-top: 60px;

      div {
        flex: 1;
      }

      .right {
        justify-content: center;
      }
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>