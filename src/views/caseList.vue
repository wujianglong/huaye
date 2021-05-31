<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <!-- <router-view></router-view> -->
    <!-- <Carousel/> -->
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>营业执照</span>
        </div>
      </div>
      <div class="page_main common layoutFlex">
        <div class="page_slide">
          <p>工程案例</p>
          <ul>
            <li v-for="(item, index) in pageSlide" :key="index" @click="profileIndexFnc(index)">
              <span class="arrow1"></span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="page_content">
          <p class="tal">{{pageSlide[select_index]}}</p>
          <div>
            <div class="caseShow layoutFlex">
              <p class="fw mb3">{{caseList[select_index].name}}</p>
              <div class="caseHeader mb3 gray6">
                <span>来源:未知</span>
                <span> | </span>
                <span>发布时间:2018-08-27</span>
              </div>
              <img :src="caseList[select_index].src" alt="">
              <p>{{caseList[select_index].desc}}</p>
              <div class="mt5 prevNext">
                <span class="fl" @click="prevFnc()">上一篇:{{1 > select_index ? '没有了':caseList[select_index - 1].name}}</span>
                <span class="fr" @click="nextFnc()">下一篇:{{12 > select_index ? caseList[select_index + 1].name : '没有了'}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Content/> -->
    <Footer/>
    <!-- <Sidebar/> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Carousel from "@/components/Carousel.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
// import { Pagination } from "element-ui";
export default {
  name: "profile",
  components: {
    Header,
    Nav,
    Carousel,
    Content,
    Footer,
    Sidebar
  },
  data() {
    return {
      pageSlide: ["案例展示"],
      select_index: 0,
      pageIndex: 1,
      prevText: "",
      nextTextL: "",
      caseList: [
        {
          name: "艾溪康桥",
          src: require("../static/images/allcart/new/1.jpg"),
          desc: "艾溪康桥1#-A座屋顶水箱加固工程",
          link: "/caseList?id=1"
        },
        {
          name: "抚州翰林苑",
          src: require("../static/images/allcart/new/2.jpg"),
          desc: "抚州翰林苑北区商业体改造加固工程",
          link: "/caseList?id=2"
        },
        {
          name: "绿地瑞慈体检",
          src: require("../static/images/allcart/new/3.jpg"),
          desc: "赣江新区绿地瑞慈体检门诊部改造加固项目",
          link: "/caseList?id=3"
        },
        {
          name: "景德镇陶瓷工业园",
          src: require("../static/images/allcart/new/4.jpg"),
          desc: "景德镇陶瓷工业园炭纤维加固项目",
          link: "/caseList?id=4"
        },
        {
          name: "九江机场航管楼",
          src: require("../static/images/allcart/new/5.jpg"),
          desc: "九江机场航管楼、候机楼加固改造工程",
          link: "/caseList?id=5"
        },
        {
          name: "九江市民中心",
          src: require("../static/images/allcart/new/6.jpg"),
          desc: "九江市民中心",
          link: "/caseList?id=6"
        },
        {
          name: "九颂康瑞和园",
          src: require("../static/images/allcart/new/7.jpg"),
          desc: "九颂康瑞和园",
          link: "/caseList?id=7"
        },
        {
          name: "美的置业悦江府",
          src: require("../static/images/allcart/new/8.jpg"),
          desc: "美的置业悦江府",
          link: "/caseList?id=8"
        },
        {
          name: "南昌市水榭花都",
          src: require("../static/images/allcart/new/9.jpg"),
          desc: "南昌市水榭花都II（纯水岸）住宅小区地下室支撑工程",
          link: "/caseList?id=9"
        },
        {
          name: "万科璞悦里",
          src: require("../static/images/allcart/new/10.jpg"),
          desc: "万科璞悦里",
          link: "/caseList?id=10"
        },
        {
          name: "宜春北岸新天地",
          src: require("../static/images/allcart/new/11.jpg"),
          desc: "宜春北岸新天地单层整体加固项目",
          link: "/caseList?id=11"
        },
        {
          name: "中兆百汇",
          src: require("../static/images/allcart/new/12.jpg"),
          desc: "中兆百汇碳纤维加固项目",
          link: "/caseList?id=12"
        }
      ]
    };
  },
  create() {},
  mounted() {
    this.select_index = this.$route.query.index
      ? Number(this.$route.query.index)
      : 0;
  },
  methods: {
    pageChange(v) {
      this.pageIndex = v;
    },
    prevFnc() {
      if (this.select_index < 1) {
        return false;
      } else {
        this.select_index--;
      }
    },
    nextFnc() {
      if (this.select_index > 11) {
        return false;
      } else {
        this.select_index++;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
  .page_main
    min-height 10rem
    padding-top 1.2rem
    padding-bottom 2.5rem
    .page_slide
      margin-right 1rem
      li
        display flex
        -webkit-display flex
        align-items center
        height 1rem
        line-height 1rem
        padding-left 0.5rem
        border-bottom 1px solid #cecece
        cursor pointer
      flex 2
      font-size 0.4rem
      p
        height 1.05rem
        line-height 1.05rem
        font-weight bold
        color #fff
        background #0090cf
    .page_content
      flex 7
      >p
        height 0.8rem
        font-size 0.4rem
        line-height 0.8rem
        border-bottom 3px solid #0090cf
      div
        font-family: "Microsoft YaHei";
        font-size 0.37rem
        line-height 1.5
        padding-top 0.3rem
        color #565656
        p
          margin-top 0.3rem
      img
        width 100%
      .expertImg
        width 8rem
      .caseShow
        flex-direction column
        justify-content center
        align-items center
        .caseHeader
          border 1px solid rgb(233, 233, 233)
          width 80%
          height 0.8rem
          line-height 0.8rem
          padding-top 0rem
        img
          width 12.5rem
          height 10rem
          text-align center
  .allcart
    height 13rem
    ul
      flex-wrap wrap
      justify-content: space-around;
      li
        cursor pointer
        width 4rem
        height 3rem
        margin-bottom 1.5rem
        img
          width 100%
          height 100%
          overflow hidden
        &:hover
          color #0090cf
          img
            transition all 1s
            transform scale(1.1)
  .prevNext
    width 100%
    span
      cursor pointer 
      &:hover
          color #0090cf 

          
</style>
