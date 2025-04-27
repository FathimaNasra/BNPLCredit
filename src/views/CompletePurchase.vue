<template>
  <div class="completed-purchases">
    <div class="sub-nav">
      <router-link to="/" class="home-icon">
        <img src="@/assets/home-icon.png" alt="Home Icon" />
      </router-link>
      <router-link to="/pending-credits" class="tab">Pending Credits</router-link>
      <router-link to="/ongoing-purchases" class="tab">Ongoing Purchases/Credits</router-link>
      <router-link to="/completed-purchases" class="tab active">Completed Purchases/Credits</router-link>
    </div>
    <h2>Completed Purchases</h2>
    <div class="purchase-item">
      <img src="@/assets/fridge.jpg" alt="Refrigerator" class="item-image" />
      <div class="details">
        <h3>LG Refrigerator</h3>
        <p class="amount">LKR 150,000</p>
        <p class="store">Store: Abans Sri Lanka</p>
        <p class="date">Purchase Date: 2025-02-10</p>
        <div class="info">
          <p><strong>Total:</strong> LKR 150,000</p>
          <p><strong>Paid:</strong> LKR 150,000 / 150,000</p>
          <p><strong>Installments:</strong> 12 of 12 completed</p>
        </div>
      </div>
    </div>
    <div class="purchase-item">
      <img src="@/assets/mac.jpg" alt="Macbook" class="item-image" />
      <div class="details">
        <h3>Apple Mac</h3>
        <p class="amount">LKR 280,000</p>
        <p class="reference">Reference ID: REQ20250419-0034</p>
        <p class="date">Date: 2025-02-10</p>
        <div class="info">
          <p><strong>Total:</strong> LKR 280,000</p>
          <p><strong>Paid:</strong> LKR 280,000 / 280,000</p>
          <p><strong>Installments:</strong> 8 of 8 completed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompletePurchases',
});
</script>

<style scoped>
.completed-purchases {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h2 {
  color: #4a4a8d;
  font-size: 18px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.purchase-item {
  display: flex;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  gap: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.item-image {
  width: 120px;
  height: 130px;
}
.sub-nav {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
}
.home-icon {
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
}
.tab {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
}

.tab.router-link-active {
  background: #28a745;
  color: #fff;
  border: none;
}
.details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.amount {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 5px 0;
}

.store,
.reference,
.date {
  color: #666;
  font-size: 12px;
  margin-bottom: 5px;
}

.info {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

.info p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.info strong {
  font-weight: bold;
  color: #000;
  margin-right: 5px;
}
</style>
