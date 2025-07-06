// src/composables/useCart.ts
import { ref } from 'vue'

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const cart = ref<CartItem[]>([])

function add(item: CartItem) {
  const existing = cart.value.find(i => i.id === item.id)
  if (existing) {
    existing.quantity += item.quantity
  } else {
    cart.value.push({ ...item })
  }
}

function remove(id: number) {
  cart.value = cart.value.filter(i => i.id !== id)
}

function total() {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function useCart() {
  return {
    cart,
    add,
    remove,
    total
  }
}
