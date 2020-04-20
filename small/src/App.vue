<template>
  <div id="app">
  <keep-alive>
    <router-view/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app,body,html{
    height: 100%;
    background: #EEEEEE;
  }
</style>
