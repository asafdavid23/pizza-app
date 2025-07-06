<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <Navbar />
    <main class="flex-1 container mx-auto p-4">
      <RouterView />
    </main>
    <footer class="bg-gray-200 text-center py-4">
      © 2025 Pizza Delight. All rights reserved.
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
</script>
