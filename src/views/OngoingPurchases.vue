<template>
  <div class="ongoing-purchases">
    <div class="sub-nav">
      <router-link to="/" class="home-icon">
        <img src="@/assets/home-icon.png" alt="Home Icon" />
      </router-link>
      <router-link to="/pending-credits" class="tab">Pending Credits</router-link>
      <router-link to="/ongoing-purchases" class="tab active">Ongoing Purchases/Credits</router-link>
      <router-link to="/completed-purchases" class="tab">Completed Purchases/Credits</router-link>
    </div>
    <h2>Ongoing Purchases: Today 24 November 2021</h2>
    <div class="purchase-item">
      <img src="@/assets/tv-icon.jpg" alt="TV image" class="item-image" />
      <div class="details">
        <h3>Abans 32 Inch HD TV</h3>
        <p class="amount">LKR 50,000</p>
        <p class="store">Store: Singer Sri Lanka</p>
        <p class="date">Purchase Date: 2025-02-10</p>
        <div class="info">
          <p><strong>Total:</strong> LKR 50,000</p>
          <p><strong>Paid:</strong> LKR 25,000 / 50,000</p>
          <p><strong>Installments:</strong> 2 of 4 completed</p>
          <p><strong>Next Payment:</strong> LKR 12,500 due on 2025-04-22</p>
        </div>
        <div class="actions">
          <router-link to="/view-details" class="tab">View Details</router-link>
          <router-link to="/pay-now" class="tab active" style="  background: #28a745;">Pay Now</router-link>
        </div>
      </div>
    </div>
    <div class="purchase-item">
      <img src="@/assets/cash.jpg" alt="Cash" class="item-image" />
      <div class="details">
        <h3>Credit Request</h3>
        <p class="amount">LKR 100,000</p>
        <p class="reference">Reference ID: REQ20250419-0034</p>
        <p class="date">Date: 2025-02-10</p>
        <div class="info">
          <p><strong>Total:</strong> LKR 100,000</p>
          <p><strong>Paid:</strong> LKR 25,000 / 100,000</p>
          <p><strong>Installments:</strong> 1 of 3 completed</p>
          <p><strong>Next Payment:</strong> LKR 12,500 due on 2025-04-22</p>
        </div>
        <div class="actions">
          <router-link to="/view-details" class="tab">View Details</router-link>
          <router-link to="/pay-now" class="tab active" style="  background: #28a745;">Pay Now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OngoingPurchases',
});
</script>

<style scoped>
.ongoing-purchases {
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
  padding: 15px;
  gap: 15px;
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

.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.view-details {
  padding: 8px 15px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  color: #666;
  border-radius: 5px;
  cursor: pointer;
}

.pay-now {
  padding: 8px 15px;
  border: none;
  background: #28a745;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
