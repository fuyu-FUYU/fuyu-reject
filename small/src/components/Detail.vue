<template>
  <div id="detail">
        详情页
        <!-- {{this.$route.query.item}} -->
  </div>
</template>

<script>
import {getData} from '../request/api'
export default {
name:"detail",
data() {
return {
    // ooo:this.$route.query.iid
}
},
methods:{

},
//生命周期 - 创建完成（访问当前this实例）
created() {
    // getData().then((res)=>{
    //     console.log(res)
    // })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>