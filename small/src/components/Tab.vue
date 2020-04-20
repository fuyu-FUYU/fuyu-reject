<template>
  <div id="tab">
      <mt-tabbar v-model="selected" style="height:.5rem">
        <mt-tab-item id="首页" >
            <router-link to="/home" tag="span">
             <p class="iconfont icon-ziyuan"></p>
                首页
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="分类">
            <router-link to="/class" tag="span">
             <p class="iconfont icon-leimupinleifenleileibie"></p>
                分类 
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="购物车">
            <router-link to="/cart" tag="span">
             <p class="iconfont icon-cart"></p>
                购物车
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="我的">
            <router-link to="/my" tag="span">
             <p class="iconfont icon-wode"></p>
                我的
            </router-link>
        </mt-tab-item>
        </mt-tabbar>
  </div>
</template>

<script>
export default {
name:"Tab",
data() {
return {
    selected:'首页',
}
},
methods:{

},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>