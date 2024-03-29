<template>
  <div class="header">
    <!-- Logo Side -->
    <button>
      <v-icon name="fa-allergies" scale="1.5" fill="black" animation="float" />
    </button>
    <!-- Right Side -->
    <div>
      <button>
        <RouterLink to="/about">
          <v-icon name="bi-question-circle" scale="1.0" fill="rgb(42, 37, 37)" />
        </RouterLink>
      </button>
      <button>
        <RouterLink to="/cart">
          <v-icon name="co-cart" scale="1.0" fill="rgb(42, 37, 37)" />
        </RouterLink>
      </button>
      <button class="login">Login</button>
    </div>
  </div>
</template>


<style>
button {
  margin-right: 5px;
  border: 0;
  background-color: white;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 2px solid rgb(42, 37, 37);
}

.login {
  background-color: #fee6e3;
  border-radius: 10px;
  border: 2px solid rgb(42, 37, 37) !important;
  padding: 10px 20px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
