<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>案例分布</span>
        </div>
      </div>
      <div :style="{height:'800px',width:'100%'}" ref="myEchart"></div>
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
import echarts from "echarts";
import "../../node_modules/echarts/map/js/china.js";

import "../../node_modules/echarts/theme/shine.js";
import "../../node_modules/echarts/theme/macarons.js";
import "../../node_modules/echarts/theme/vintage.js";
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
    return {};
  },
  create() {},
  mounted() {
    this.chinaConfigure();
  },
  methods: {
    chinaConfigure() {
      let myChart = echarts.init(this.$refs.myEchart, "vintage");
      myChart.setOption({
        // 进行相关配置
        backgroundColor: "#fff",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          // text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"]
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo" // 对应上方配置
          },
          {
            name: "项目", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "浙江",
                value: 2
              },
              {
                name: "江西",
                value: 38
              },
              {
                name: "河北",
                value: 4
              }
              // {
              //   name: "",
              //   value: 38
              // },
              // {
              //   name: "江西",
              //   value: 38
              // },
              // {
              //   name: "江西",
              //   value: 38
              // },{
              //   name: "江西",
              //   value: 38
              // },
              // {
              //   name: "江西",
              //   value: 38
              // },{
              //   name: "江西",
              //   value: 38
              // },
              // {
              //   name: "江西",
              //   value: 38
              // },
            ]
          }
        ]
      });
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
          
          
</style>
