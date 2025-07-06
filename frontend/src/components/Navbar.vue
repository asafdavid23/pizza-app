<template>
  <nav class="bg-red-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">Pizza Delight</router-link>
      <div class="space-x-4">
        <router-link to="/" class="hover:underline">Home </router-link>
        <router-link to="/menu" class="hover:underline">Menu </router-link>
        <router-link to="/order-status" class="hover:underline">Order Status </router-link>
        <router-link to="/cart" class="hover:underline">Cart </router-link>

      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
</script>
