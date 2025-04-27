<template>
  <div class="credit-request">
    <div class="sub-nav">
      <router-link to="/" class="home-icon">
        <img src="@/assets/home-icon.png" alt="Home Icon" />
      </router-link>
      <router-link to="/pending-credits" class="tab active">Pending Credits</router-link>
      <router-link to="/ongoing-purchases" class="tab">Ongoing Purchases/Credits</router-link>
      <router-link to="/completed-purchases" class="tab">Completed Purchases/Credits</router-link>
    </div>
    <h2>Pending Credits: Today 24 November 2021</h2>
    <div class="credit-request-item">
      <img src="@/assets/cash.jpg" alt="Cash" class="credit-icon" />
      <div class="details">
        <h3>Credit Request</h3>
        <p class="amount">LKR 100,000</p>
        <p class="reference">Reference ID: REQ20250419-0034</p>
        <span class="status">PENDING</span>
      </div>
      <div class="info">
        <p><strong>Purpose:</strong> Urgent phone replacement</p>
        <p><strong>Repayment Plan:</strong> 3 Months</p>
        <p><strong>Account Number:</strong> 1234567890</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreditRequest',
});
</script>

<style scoped>
.credit-request {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.credit-request-item {
  display: flex;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  gap: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.credit-icon {
  width: 70px;
  height: 80px;
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

.reference {
  color: #666;
  font-size: 12px;
  margin-bottom: 10px;
}

.info {
  display: flex;
  gap: 20px;
  margin-top: 50px;
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

.status {
  background: #d3d3d3;
  color: #666;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
}
</style>
