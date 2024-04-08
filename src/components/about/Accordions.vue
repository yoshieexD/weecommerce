<template>
    <div style="display: flex; flex-direction: column; align-items: start;">
        <button @click="toggleAccordion(1)" class="accordion-title">Title 1
            <v-icon :name="arrowDirection(1)" scale="1.0" fill="black" />
        </button>
        <div v-if="isOpen[1]">
            <p class="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.test
            </p>
        </div>
        <button @click="toggleAccordion(2)" class="accordion-title">Title 2
            <v-icon :name="arrowDirection(2)" scale="1.0" fill="black" />
        </button>
        <div v-if="isOpen[2]">
            <p class="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>
        <button @click="toggleAccordion(3)" class="accordion-title">Title 3
            <v-icon :name="arrowDirection(3)" scale="1.0" fill="black" />
        </button>
        <div v-if="isOpen[3]">
            <p class="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isOpen: [false, false, false],
            arrow: ['right', 'down']
        };
    },
    methods: {
        toggleAccordion(index) {
            this.isOpen[index] = !this.isOpen[index];
        },
    },
    computed: {
        arrowDirection() {
            return index => this.isOpen[index] ? 'bi-arrow-down-short' : 'bi-arrow-right-short';
        }
    }
};
</script>

<style>
.accordion-title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: black 1px solid;
    text-transform: uppercase;
}

.accordion-content {
    color: grey;
    font-size: small;
    text-transform: uppercase;
}
</style>