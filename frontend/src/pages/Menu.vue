<template>
  <div>
    <h2 class="text-3xl font-semibold mb-4">Pizza Menu</h2>
    <ul>
      <li v-for="item in menu" :key="item.id" class="mb-2">
        🍕 {{ item.name }} - ${{ item.price }}
        <button class="ml-2 bg-green-500 text-white px-2 py-1 rounded" @click="addToCart(item)">Add</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCart } from '@/composables/useCart'

type MenuItem = {
  id: number
  name: string
  price: number
}

const { add } = useCart()

const addToCart = (item: MenuItem) => {
  add({ ...item, quantity: 1 }) // ✅ Now matches CartItem
}

const menu = ref<MenuItem[]>([
  { id: 1, name: 'Margherita', price: 10 },
  { id: 2, name: 'Pepperoni', price: 12 },
])
</script>
