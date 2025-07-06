import { ref } from 'vue';
const cart = ref([]);
function remove(id) {
    cart.value = cart.value.filter(item => item.id !== id);
}
function total() {
    return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
export function useCart() {
    return {
        cart,
        remove,
        total
    };
}
