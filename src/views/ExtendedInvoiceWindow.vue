<template>
    <div class="container">
        <invoice-card class="dark-purple wrapper">
                <div class="flex left">
                    <p class="description">Status</p>
                    <p class="status orange">Pending</p>
                </div>
                <div class="right">
                    <button class="draft">Edit</button>
                    <button class="red">Delete</button>
                    <button class="green">Mark as Paid</button>
                </div>
        </invoice-card>

        <!-- More details on the invoice -->
        
        <div class="dark-purple second-wrapper">
            <div class="first-row">
                <div>
                    <h2 class="id">#Baca24</h2>
                    <p class="title">UI / UX</p>
                </div>
                <div class="address-info">
                    <p class="address">123 Testing Ville</p>
                    <p class="city">Detroit</p>
                    <p class="zip-code">47088</p>
                    <p class="country">United States</p>
                </div>
            </div>
            <div class="second-row">
                <div>
                    <h5>Invoice Date</h5>
                    <p>Jun 2, 2021</p>
                </div>
                <div>
                    <h5>Payment Date</h5>
                    <p>Jun 2, 2021</p>
                </div>
                <div>
                    <h5>Bill To</h5>
                    <p>Jean Kelly</p>
                </div>
                <div>
                    <h5>Sent To</h5>
                    <p>Kujta27@hmail.com</p>
                </div>
            </div>
            <div class="third-row">
                <div class="draft">
                    <div class="information first">
                        <p class="primary">Item Name</p>
                        <p>QTY</p>
                        <p>Price</p>
                        <p>Total</p>
                    </div>
                    <div class="information">
                        <p class="primary">Design</p>
                        <p>5</p>
                        <p>300.00</p>
                        <p>1500</p>
                    </div>
                    <div class="last-row">
                        <p class="primary">Amount Due</p>
                        <p>1500</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {

    margin-bottom: 30px;

    .left, .right {
        gap: 20px;
        align-items: center;
        font-size: 12px;
        padding: 10px;
    }
    .status {
        padding: 5px 30px;
        border-radius: 20px;
    }
}
.second-wrapper {
    border-radius: 20px;
    padding: 10px;

    .second-row {
        display: flex;
        justify-content: space-between;
        padding: 30px;
    }
}
.third-row {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 20px;
    
    .information {
        display: flex;
        justify-content: space-between;
        gap: 120px;
        padding: 40px;

        p {
            font-size: 13px;
        }
    }
    .first {
        padding-bottom: 0px;
    }
    .primary {
        flex-grow: 1;
    }
    .draft {
        border-radius: 20px;
    }
    .last-row {
        display: flex;
        gap: 120px;
        background: black;
        border-radius: 0 0 20px 20px;
        padding: 40px;

        p {
            font-size: 12px
        }
    }
}
.first-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 30px;
    border-radius: 20px;
    
    .title {
        font-size: 13px;
    }

    .address-info {
        font-size: 13px;
        text-align: right;
    }

}

</style>