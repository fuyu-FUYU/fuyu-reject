<template>
  <div id="heade">
        <div>

        </div>
        <div>
            {{title}}
        </div>
        <div>

        </div>
  </div>
</template>

<script>
export default {
name:"Head",
props:['title'],
data() {
return {

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
    #heade{
        width: 100%;
        height: .4rem;
        display: flex;
        justify-content: space-between;
        line-height: .4rem;
    }
</style>