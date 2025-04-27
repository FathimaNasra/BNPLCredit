import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import OngoingPurchases from '../views/OngoingPurchases.vue';
import CreditRequest from '../views/CreditRequest.vue';
import CompletePurchase from '../views/CompletePurchase.vue';
import PayNow from '../views/PayNow.vue';
import ApplyCreditFacility from '../views/ApplyCreditFacility.vue';
import blank from "@/views/Blank.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    name: 'PayNow',
    component: PayNow,
  },
  {
    path: '/apply-credit',
    name: 'ApplyCreditFacility',
    component: ApplyCreditFacility,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
