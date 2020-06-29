<template>
  <div id="app">
    <router-link class="box" to='/'>cart</router-link>
    <router-link class="box" to='/address'>address</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
