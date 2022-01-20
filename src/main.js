import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import TheNavigation from './components/TheNavigation.vue'
import InvoiceCard from './components/UI/InvoiceCard.vue'

const app = createApp(App);
app.component('the-navigation', TheNavigation),
app.component('invoice-card', InvoiceCard),
// app.use(router)

app.mount('#app')
