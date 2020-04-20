<template>
  <div id="home">
      <div  class="header" >
          <Head title="购物街"></Head>
      </div>
      <div class="content">
          <div class="swipe">
              <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(v,i) in banner" :key="i">
                    <img width="100%" height="100%" :src="v.image" alt="">
                </mt-swipe-item>
              </mt-swipe>
          </div>
          <div class="warp_list">
              <ul>
                <li v-for="(v,i) in warp" :key="i">
                    <p><img :src="v.image" alt=""></p>
                    <p>{{v.title}}</p>
                </li>
              </ul>
          </div>
          <div class="array_list">
                <div>本周流行</div>
                <ul>
                  <li v-for="(v,i) in array" :key="i">
                    <p><img :src="v.image"/></p>
                    <p>{{v.title}}</p>
                  </li>
                </ul>
          </div>
          <div class="shop_list">
            <div  style="height: .4rem;" :class="{'option':isFixed}" id="boxFixed">
              <mt-navbar v-model="selected" style="height: 100%;">
                <mt-tab-item id="1">流行</mt-tab-item>
                <mt-tab-item id="2">新款</mt-tab-item>
                <mt-tab-item id="3">精选</mt-tab-item>
              </mt-navbar>
            </div>
            <!-- tab-container -->
            <div class="list">
                <mt-tab-container v-model="selected">
                  <mt-tab-container-item id="1">
                        <ul 
                        v-infinite-scroll="loadMore"
                        infinite-scroll-disabled="loading"
                        infinite-scroll-distance="30">
                          <li v-for="(v,i) in popular" :key="i" @click="biog(v)">
                              <p><img v-lazy="v.showLarge.img"/></p>
                              <p>{{v.title}}</p>
                              <p><span>{{v.price}}</span><span><i class="iconfont icon-wujiaoxingxingxing"></i>{{v.cfav}}</span></p>
                          </li>
                        </ul>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="2">
                        <ul>
                          <li v-for="(v,i) in pattern" :key="i"  @click="biog(v)">
                              <p><img v-lazy="v.showLarge.img"/></p>
                              <p>{{v.title}}</p>
                              <p><span>{{v.price}}</span><span><i class="iconfont icon-wujiaoxingxingxing"></i>{{v.cfav}}</span></p>
                          </li>
                        </ul>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="3">
                        <ul>
                          <li v-for="(v,i) in accurate" :key="i"  @click="biog(v)">
                              <p><img v-lazy="v.showLarge.img"/></p>
                              <p>{{v.title}}</p>
                              <p><span>{{v.price}}</span><span><i class="iconfont icon-wujiaoxingxingxing"></i>{{v.cfav}}</span></p>
                          </li>
                        </ul>
                  </mt-tab-container-item>
                </mt-tab-container>
            </div>
          </div>
      </div>
      <div class="footer">
          <Tab/>
      </div>
  </div>
</template>

<script>
import Tab from './Tab'
import Head from './Head'
import {getHome,getWarp,getList} from '../request/api'
export default {
  name: 'Home',
  components:{Tab,Head},
  data () {
    return {
      banner:[],
      warp:[],
      array:[],
      popular:[],
      pattern:[],
      accurate:[],
      selected:"1",
      isFixed: false,
      offsetTop: 0,
      loading:false
    }
  },
  methods:{
    biog(v){
      this.$router.push({path:'/detail',query:{}})
    },
    initHeight() {
          // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
          this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
      loadMore() {
        this.loading = true;
        // setTimeout(() => {
        //   let last = this.list[this.list.length - 1];
        //   for (let i = 1; i <= 10; i++) {
        //     this.list.push(last + i);
        //   }
        //   this.loading = false;
        // }, 2500);
        this.rontto()
        this.loading = false;
      },
      rontto(){
        getList('pop',1).then((res)=>{
            this.popular=[...this.popular,...res.data.list]
            console.log(this.popular);
            
        })
        getList('pop',2).then((res)=>{
            this.popular=[...this.popular,...res.data.list]
        })
        getList('pop',3).then((res)=>{
            this.popular=[...this.popular,...res.data.list]
        })
      },
  },
  created(){
    getHome().then((res)=>{
        this.banner=res.data.banner.list
     })
     this.rontto()
     getWarp().then((res)=>{
        this.warp=res.data.recommend.list
     })
     getList('new',1).then((res)=>{
        this.pattern=res.data.list
     })
     getList('sell',1).then((res)=>{
        this.accurate=res.data.list
     })
     this.$http.get('/static/request_list.json').then((res)=>{
        this.array=res.data
     })
  },
  mounted(){
     window.addEventListener('scroll', this.initHeight);
        this.$nextTick(() => {
            //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
            this.offsetTop = document.querySelector('#boxFixed').offsetTop;
        })
  },
   destroyed() {
            window.removeEventListener('scroll', this.initHeight)
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #home{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width:100%;
    height: .4rem;
    position: fixed;
    top: 0;
    z-index: 1;
    font-size: .16rem;
    color: white;
    background: #FF8198;
  }
  .content{
    width: 100%;
    height: 100%;
    // overflow: scroll;
    margin-top: .4rem;
    flex: 1;
      .swipe{
        height: 1.97rem;
      }
      .warp_list{
        width: 100%;
        height: 1.5rem;
        background: white;
        ul{
          list-style: none;
          display: flex;
          li{
            width: 25%;
            text-align: center;
            font-size: .13rem;
            p{
              margin-top: .15rem;
            }
            img{
              width: 85%;
            }
          }
        }
      }
      .array_list{
          width: 100%;
          background: white;
          margin-top: .1rem;
          height: 3.3rem;
          div{
            height: .5rem;
            text-align: center;
            line-height: .5rem;
            font-size: .2rem;
          }
          ul{
            display: flex;
            list-style: none;
            flex-wrap: wrap;
            li{
              text-align: center;
              width: 25%;
              img{
                width: 80%;
              }
              p:nth-child(2){
                font-size: .13rem;
                color: gray;
                height: .2rem;
              }
            }
          }
      }
      .shop_list{
        width:100%;
        margin-top: .1rem;
        background: white;
        .option{
             position: fixed;
             left:0;
             right:0;
              top: .401rem;
             z-index: 999;
            
        }
        .list{
          width: 100%;
          margin-top: .1rem;
          ul{
            overflow: scroll;
            display: flex;
            justify-content: space-around;
            list-style: none;
            flex-wrap: wrap;
            li{
              text-align: center;
              width: 48%;
              p:nth-child(1){
                height: 2.8rem;
                img{
                  width: 100%;
                  border-radius: 5px;
                }
                img[lazy=loading] {
                  width: 100%;
                  height: 100%;
                  background: pink;
                  margin: auto;
                }
              }
              p:nth-child(2){
                  width: 100%;
                  height: .2rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  font-size: .12rem;
              }
              p:nth-child(3){
                  height: .2rem;
                  font-size: .12rem;
                  span:nth-child(1){
                      color: #FF8198;
                  }
                  span:nth-child(2){
                      margin-left: .1rem;
                  }
              }
            }
          }
        }
      }
  }
  .footer{
    width: 100%;
    height: .5rem;
    position: fixed;
    bottom: 0;
    z-index: 1;
    background: white;
  }
</style>
