<template>
    <div class="cart-container">

        <div class="cart-image">

        </div>
        <div class="cart-item">
            Jordan Shoes
        </div class="cart-count">
        <input type="number" />
        <div>
            11.90
        </div>

        <div class="cart price">

        </div>
    </div>
</template>

<style scoped>
.cart-container {
    background-color: antiquewhite;
    width: 100%;
    height: 15vh;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid rgb(42, 37, 37) !important;
}

input {
    border: 0;
    background-color: transparent;
}

input:focus {
    outline: none;
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>