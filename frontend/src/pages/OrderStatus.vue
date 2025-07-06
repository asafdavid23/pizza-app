<template>
  <div>
    <h2 class="text-3xl mb-4">Check Your Order Status</h2>
    <input v-model="orderId" placeholder="Enter Order ID" class="border px-2 py-1 mr-2" />
    <button class="bg-blue-500 text-white px-4 py-1" @click="checkStatus">Check</button>
    <p v-if="status" class="mt-4">Status: {{ status }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const orderId = ref('')
const status = ref('')

const checkStatus = () => {
  // Simulated
  status.value = 'Preparing...'
}
</script>
