<template>
  <div class="pay-now-overlay">
    <div class="pay-now-modal">
      <button class="close-button" @click="cancel">✖</button>
      <h2>Make Payment</h2>
      <div class="form-group">
        <label for="card-number">Card Number *</label>
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
        <label for="cardholder-name">Cardholder Name *</label>
        <input
          type="text"
          id="cardholder-name"
          v-model="cardholderName"
          placeholder="John Doe"
        />
      </div>
      <div class="form-group">
        <label for="expiry">Expiry Date (MM/YY) *</label>
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
        <label for="cvv">CVV *</label>
        <input
          type="text"
          id="cvv"
          v-model="cvv"
          placeholder="123"
          maxlength="3"
        />
      </div>
      <div class="actions">
        <button class="cancel-button" @click="cancel">Cancel</button>
        <button class="pay-button" @click="processPayment">Do Payment</button>
      </div>
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
    cancel() {
      this.$router.push('/ongoing-purchases');
    },
  },
});
</script>

<style scoped>
.pay-now-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.pay-now-modal {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff5c5c;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
}

h2 {
  color: #4a4a8d;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.cancel-button,
.pay-button {
  padding: 10px 30px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.cancel-button {
  background: #fff;
  border: 1px solid #28a745;
  color: #28a745;
}

.cancel-button:hover {
  background: #f5f5f5;
}

.pay-button {
  background: #28a745;
  border: none;
  color: #fff;
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
  z-index: 1001;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
</style>
