import { createRouter, createWebHistory } from 'vue-router';
import OngoingPurchases from '../views/OngoingPurchases.vue';
import CreditRequest from '../views/CreditRequest.vue';
import CompletePurchase from '../views/CompletePurchase.vue';
import blank from "@/views/Blank.vue";

const routes = [
  {
    path: '/',
    redirect: '/pending-credits', // Redirect home to ongoing purchases
  },
  {
    path: '/ongoing-purchases',
    name: 'OngoingPurchases',
    component: OngoingPurchases,
  },
  {
    path: '/pending-credits',
    name: 'CreditRequest',
    component: CreditRequest,
  },
  {
    path: '/completed-purchases',
    name: 'CompletePurchase',
    component: CompletePurchase,
  },
  {
    path: '/view-details',
    name: 'Blank',
    component: blank,
  },
  {
    path: '/pay-now',
    name: 'Blank',
    component: blank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
