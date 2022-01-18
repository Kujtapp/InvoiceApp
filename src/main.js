import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import InvoiceCard from './components/UI/InvoiceCard.vue'

const app = createApp(App);
app.component('invoice-card', InvoiceCard),

// app.use(router)

app.mount('#app')
