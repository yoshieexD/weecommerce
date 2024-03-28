<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import CartList from '@/components/cart/CartList.vue';
</script>
<template>
  <main>
    <Header/>
    <div style="display: flex; justify-content: center; align-items: center; height: 70vh;">
      <CartList />
    </div>
  </main>
</template>
