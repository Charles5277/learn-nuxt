<template>
  <div>
    <h1>Home Page</h1>

    <br>
    <!-- // > NuxtLink 可以自動判斷是內部連結還是外部連結 -->
    <!-- // - 內部連結 -->
    <NuxtLink to="/parent">Parent Page</NuxtLink>
    |
    <!-- // - 外部連結 -->
    <NuxtLink to="https://www.google.com" target="_blank">Google</NuxtLink>
  </div>
</template>
