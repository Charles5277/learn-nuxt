<template>
  <div class="flex">
    <!-- // - 共用 Sidebar -->

    <aside class="w-52 min-h-screen bg-gray-600 ">
      <div class="flex flex-col p-2 space-y-2">
        <NuxtLink to="/parent/child-a" class=" border rounded-lg hover:text-blue-500 py-4 px-2"> child-a</NuxtLink>
        <NuxtLink to="/parent/child-b" class="border rounded-lg hover:text-blue-500 py-4 px-2"> child-b</NuxtLink>
      </div>
    </aside>

    <NuxtPage />
  </div>
</template>
