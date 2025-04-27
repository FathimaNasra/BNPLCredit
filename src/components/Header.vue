<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/logo2.png" alt="Payment Logo" />
      </div>
      <div class="user-actions">
        <img src="@/assets/notification.png" alt="Notifications" class="icon" />
        <img src="@/assets/user.png" alt="User Profile" class="icon" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background: #fff;
  padding-bottom: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.logo img {
  height: 40px;
}

.user-actions {
  display: flex;
  gap: 10px;
}

.icon {
  width: 35px;
  height: 40px;
  border-radius: 50%;
}

.home-icon img {
  width: 24px;
  height: 24px;
}
</style>
