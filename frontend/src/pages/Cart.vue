<template>
  <div>
    <h2 class="text-3xl font-bold mb-4">Your Cart</h2>

    <div v-if="cart.length === 0" class="text-gray-500">Your cart is empty.</div>

    <ul v-else class="space-y-4">
      <li v-for="item in cart" :key="item.id" class="flex justify-between items-center border-b pb-2">
        <div>
          {{ item.name }} (x{{ item.quantity }}) - ${{ item.price }} each
        </div>
        <button @click="remove(item.id)" class="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
      </li>
    </ul>

    <div v-if="cart.length > 0" class="mt-6 text-xl font-semibold">
      Total: ${{ total() }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCart } from '@/composables/useCart'

const { cart, remove, total } = useCart()
</script>
