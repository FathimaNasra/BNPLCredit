<template>
  <div class="pay-now">
    <div class="sub-nav">
      <router-link to="/" class="home-icon">
        <img src="@/assets/home-icon.png" alt="Home Icon" />
      </router-link>
      <router-link to="/pending-credits" class="tab">Pending Credits</router-link>
      <router-link to="/ongoing-purchases" class="tab">Ongoing Purchases/Credits</router-link>
      <router-link to="/completed-purchases" class="tab">Completed Purchases/Credits</router-link>
    </div>
    <h2>Make Payment</h2>
    <div class="payment-form">
      <div class="form-group">
        <label for="card-number">Card Number</label>
        <input
          type="text"
          id="card-number"
          v-model="cardNumber"
          placeholder="1234 5678 9012 3456"
          maxlength="19"
          @input="formatCardNumber"
        />
      </div>
      <div class="form-group">
        <label for="cardholder-name">Cardholder Name</label>
        <input
          type="text"
          id="cardholder-name"
          v-model="cardholderName"
          placeholder="John Doe"
        />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="expiry">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiry"
            v-model="expiry"
            placeholder="MM/YY"
            maxlength="5"
            @input="formatExpiry"
          />
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            v-model="cvv"
            placeholder="123"
            maxlength="3"
          />
        </div>
      </div>
      <button class="pay-button" @click="processPayment">Do Payment</button>
    </div>
    <div v-if="showSuccess" class="success-popup">
      <div class="popup-content">
        <h3>Payment Successful!</h3>
        <p>Your payment has been processed successfully.</p>
        <button @click="closeSuccessPopup">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PayNow',
  data() {
    return {
      cardNumber: '',
      cardholderName: '',
      expiry: '',
      cvv: '',
      showSuccess: false,
    };
  },
  methods: {
    formatCardNumber(event: Event) {
      let value = (event.target as HTMLInputElement).value.replace(/\D/g, '');
      value = value.replace(/(\d{4})/g, '$1 ').trim();
      this.cardNumber = value;
    },
    formatExpiry(event: Event) {
      let value = (event.target as HTMLInputElement).value.replace(/\D/g, '');
      if (value.length >= 3) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
      this.expiry = value;
    },
    processPayment() {
      // Basic validation
      if (
        this.cardNumber.replace(/\s/g, '').length === 16 &&
        this.cardholderName.trim() &&
        this.expiry.length === 5 &&
        this.expiry.match(/^\d{2}\/\d{2}$/) &&
        this.cvv.length === 3
      ) {
        this.showSuccess = true;
      } else {
        alert('Please fill in all fields correctly. Expiry date should be in MM/YY format.');
      }
    },
    closeSuccessPopup() {
      this.showSuccess = false;
      this.$router.push('/ongoing-purchases');
    },
  },
});
</script>

<style scoped>
.pay-now {
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

.payment-form {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-row .form-group {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.pay-button {
  padding: 10px 20px;
  border: none;
  background: #28a745;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.pay-button:hover {
  background: #218838;
}

.success-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
}

.popup-content h3 {
  color: #28a745;
  margin-bottom: 10px;
}

.popup-content p {
  color: #333;
  margin-bottom: 20px;
}

.popup-content button {
  padding: 8px 20px;
  border: none;
  background: #28a745;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
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
</style>
