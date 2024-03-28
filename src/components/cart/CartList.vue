<script setup lang="ts">
import CartContainer from './CartContainer.vue';
import CartFooter from './CartFooter.vue';
import CartHeader from './CartHeader.vue';
</script>

<template>
    <div style="display: flex; flex-direction: column; width: 100%; align-items: center;">
        <div style="width: 40%;">
            <CartHeader />
            <div style="margin-bottom: 30px; margin-top: 30px;">
                <CartContainer />
            </div>
            <CartFooter />
        </div>
    </div>
</template>
