import { createRouter, createWebHistory } from "vue-router";
import ExtendedInvoiceWindow from '../views/ExtendedInvoiceWindow.vue'
const routes = [
  { path: '/InvoiceWindow', name: "ExtendedInvoiceWindow", component: ExtendedInvoiceWindow },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
