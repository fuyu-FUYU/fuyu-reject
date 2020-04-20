<template>
  <div id="my">
      我的
      <Tab/>
  </div>
</template>

<script>
import Tab from './Tab'
export default {
name:"My",
components:{Tab},
data() {
return {

}
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