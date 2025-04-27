<template>
  <div class="apply-credit-overlay">
    <div class="apply-credit-modal">
      <button class="close-button" @click="cancel">✖</button>
      <h2>Apply For Our Personal Credit Facility.</h2>
      <div class="form-group">
        <label for="purpose">Purpose *</label>
        <input
          type="text"
          id="purpose"
          v-model="purpose"
          placeholder=""
        />
      </div>
      <div class="form-group">
        <label for="amount">Requested Amount (LKR) *</label>
        <input
          type="text"
          id="amount"
          v-model="amount"
          placeholder=""
        />
      </div>
      <div class="form-group">
        <label>Select Repayment Plan *</label>
        <div class="radio-group">
          <label>
            <input type="radio" v-model="repaymentPlan" value="3" />
            3 Months
          </label>
          <label>
            <input type="radio" v-model="repaymentPlan" value="6" />
            6 Months
          </label>
          <label>
            <input type="radio" v-model="repaymentPlan" value="12" />
            12 Months
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="account">Select an account to receive the credit *</label>
        <select id="account" v-model="account">
          <option value="" disabled>Select an account</option>
          <option value="account1">Account 1</option>
          <option value="account2">Account 2</option>
        </select>
      </div>
      <div class="actions">
        <button class="cancel-button" @click="cancel">Cancel</button>
        <button class="apply-button" @click="apply">Apply</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ApplyCreditFacility',
  data() {
    return {
      purpose: '',
      amount: '',
      repaymentPlan: '',
      account: '',
    };
  },
  methods: {
    cancel() {
      this.$router.push('/');
    },
    apply() {
      if (this.purpose && this.amount && this.repaymentPlan && this.account) {
        alert('Application submitted successfully!');
        this.$router.push('/');
      } else {
        alert('Please fill in all required fields.');
      }
    },
  },
});
</script>

<style scoped>
.apply-credit-overlay {
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

.apply-credit-modal {
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

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #333;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.cancel-button,
.apply-button {
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

.apply-button {
  background: #28a745;
  border: none;
  color: #fff;
}

.apply-button:hover {
  background: #218838;
}
</style>
