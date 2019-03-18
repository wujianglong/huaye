<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <!-- <router-view></router-view> -->
    <!-- <Carousel/> -->
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>经典案例</span>
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
          <p class="tal">{{pageSlide[profile_index]}}</p>
          <div>
            <div>
              <div class="allcart">
                <ul class="layoutFlex" v-if="pageIndex === 1">
                  <!-- <template v-for="(item, index) in caseList" >
                    <router-link to="" :key="index" tag="li">
                      <img :src="'../static/images/allcart/' + item.src" alt="">
                      <p>{{item.name}}</p>
                    </router-link>
                  </template> -->
                  <li @click="allcartfnc(1)">
                    <img src="../static/images/allcart/allcart1.jpg" alt="">
                    <p>上饶海澜之家</p>
                  </li>
                  <li @click="allcartfnc(2)">
                    <img src="../static/images/allcart/allcart2.png" alt="">
                    <p>上高万象广场</p>
                  </li>
                  <li @click="allcartfnc(3)">
                    <img src="../static/images/allcart/allcart3.jpg" alt="">
                    <p>九江机场</p>
                  </li>
                  <li @click="allcartfnc(4)">
                    <img src="../static/images/allcart/allcart4.jpg" alt="">
                    <p>华强医疗器械公司</p>
                  </li>
                  <li @click="allcartfnc(5)">
                    <img src="../static/images/allcart/allcart5.jpg" alt="">
                    <p>南昌弘益科技</p>
                  </li>
                  <li @click="allcartfnc(6)">
                    <img src="../static/images/allcart/allcart6.jpg" alt="">
                    <p>安义农业银行加固</p>
                  </li>
                  <li @click="allcartfnc(7)">
                    <img src="../static/images/allcart/allcart7.png" alt="">
                    <p>广丰龙溪集团龙华一品柱置换加固</p>
                  </li>
                  <li @click="allcartfnc(8)">
                    <img src="../static/images/allcart/allcart8.jpg" alt="">
                    <p>抚州农业银行总行加固</p>
                  </li>
                  <li @click="allcartfnc(9)">
                    <img src="../static/images/allcart/allcart9.jpg" alt="">
                    <p>抚州沃尔玛</p>
                  </li>
                  <li @click="allcartfnc(10)">
                    <img src="../static/images/allcart/allcart10.jpg" alt="">
                    <p>新建中心</p>
                  </li>
                  <li @click="allcartfnc(11)">
                    <img src="../static/images/allcart/allcart11.jpg" alt="">
                    <p>新建欧尚超市</p>
                  </li>
                  <li @click="allcartfnc(12)">
                    <img src="../static/images/allcart/allcart12.png" alt="">
                    <p>汇融大厦加固</p>
                  </li>
                </ul>
                <ul class="layoutFlex" v-if="pageIndex === 2">
                  <li @click="allcartfnc(13)">
                    <img src="../static/images/allcart/allcart13.png" alt="">
                    <p>江西外贸专修学院加固</p>
                  </li>
                  <li @click="allcartfnc(14)">
                    <img src="../static/images/allcart/allcart14.png" alt="">
                    <p>江西省国家安全厅加固</p>
                  </li>
                  <li @click="allcartfnc(15)">
                    <img src="../static/images/allcart/allcart17.png" alt="">
                    <p>湾里行政中心</p>
                  </li>
                  <li @click="allcartfnc(16)">
                    <img src="../static/images/allcart/allcart16.png" alt="">
                    <p>铜锣湾</p>
                  </li>
                  <!-- <li @click="allcartfnc(17)">
                    <img src="../static/images/allcart/allcart17.jpg" alt="">
                    <p>长安铃木汽车服务4s店加固</p>
                  </li>
                  <li @click="allcartfnc(18)">
                    <img src="../static/images/allcart/allcart18.jpg" alt="">
                    <p>龙南行政服务中心</p>
                  </li>
                  <li @click="allcartfnc(19)">
                    <img src="../static/images/allcart/allcart19.png" alt="">
                    <p>广丰龙华一品</p>
                  </li>
                  <li @click="allcartfnc(20)">
                    <img src="../static/images/allcart/allcart20.png" alt="">
                    <p>江西省中医院</p>
                  </li> -->
                </ul>
              </div>
              <div class="block">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  @current-change="pageChange"
                  :total="20">
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Content/> -->
    <Footer/>
    <Sidebar/>
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
      profile_index: 0,
      pageIndex: 1,
      caseList: [
        {
          name: "上饶海澜之家",
          src: require("../static/images/allcart/allcart1.jpg"),
          desc: "上饶海澜之家整体改造（碳纤维、粘钢、增大截面）加固工程",
          link: "/caseList?id=1"
        },
        {
          name: "上高万象广场",
          src: require("../static/images/allcart/allcart2.png"),
          desc: "上高万象广场碳纤维，粘贴钢板加固工程",
          link: "/caseList?id=2"
        },
        {
          name: "九江机场",
          src: require("../static/images/allcart/allcart3.jpg"),
          desc: "九江机场航站楼整体改造加固工程",
          link: "/caseList?id=3"
        },
        {
          name: "华强医疗器械公司",
          src: require("../static/images/allcart/allcart4.jpg"),
          desc: "江西华强医疗器械有限公司整体置换，梁，柱增大面积",
          link: "/caseList?id=4"
        },
        {
          name: "南昌弘益科技",
          src: require("../static/images/allcart/allcart5.jpg"),
          desc: "南昌弘益科技有限公司，梁粘钢，碳纤维加固工程",
          link: "/caseList?id=5"
        },
        {
          name: "安义农业银行加固",
          src: require("../static/images/allcart/allcart6.jpg"),
          desc: "安义县农业银行粘钢加固工程",
          link: "/caseList?id=6"
        },
        {
          name: "广丰龙溪集团龙华一品",
          src: require("../static/images/allcart/allcart7.png"),
          desc: "广丰龙溪集团龙华一品柱置换加固",
          link: "/caseList?id=7"
        },
        {
          name: "抚州农业银行总行加固",
          src: require("../static/images/allcart/allcart8.jpg"),
          desc: "抚州市农业银行门洞静力切割，粘钢加固工程",
          link: "/caseList?id=8"
        },
        {
          name: "抚州沃尔玛",
          src: require("../static/images/allcart/allcart9.jpg"),
          desc: "抚州市沃尔沃商场纤维，粘钢加固工程",
          link: "/caseList?id=9"
        },
        {
          name: "新建中心",
          src: require("../static/images/allcart/allcart10.jpg"),
          desc: "新建县新建中心商业体区域梁增大截面，碳纤维加固工程",
          link: "/caseList?id=10"
        },
        {
          name: "新建欧尚超市",
          src: require("../static/images/allcart/allcart11.jpg"),
          desc: "南昌欧尚超市整体(碳纤维，粘钢，增大截面)加固工程",
          link: "/caseList?id=11"
        },
        {
          name: "汇融大厦加固",
          src: require("../static/images/allcart/allcart12.png"),
          desc: "汇融大厦12层梁碳纤维，粘贴钢板加固工程",
          link: "/caseList?id=12"
        },
        {
          name: "江西外贸专修学院加固",
          src: require("../static/images/allcart/allcart13.png"),
          desc: "江西外贸专修学院整体加固",
          link: "/caseList?id=13"
        },
        {
          name: "江西省国家安全厅加固",
          src: require("../static/images/allcart/allcart14.png"),
          desc: "江西省国家安全厅柱增大截面，碳纤维加固工程",
          link: "/caseList?id=14"
        },
        {
          name: "湾里行政中心",
          src: require("../static/images/allcart/allcart15.png"),
          desc: "湾里行政中心加固工程",
          link: "/caseList?id=15"
        },
        {
          name: "铜锣湾",
          src: require("../static/images/allcart/allcart16.png"),
          desc: "铜锣湾加固工程",
          link: "/caseList?id=16"
        }
        // {
        //   name: "长安铃木汽车服务4s店",
        //   src: require("../static/images/allcart/allcart17.jpg"),
        //   desc: "长安铃木汽车服务4s店加固",
        //   link: "/caseList?id=17"
        // },
        // {
        //   name: "龙南行政服务中心",
        //   src: require("../static/images/allcart/allcart18.jpg"),
        //   desc: "龙南行政服务中心加固工程",
        //   link: "/caseList?id=18"
        // }
      ]
    };
  },
  create() {},
  methods: {
    profileIndexFnc(i) {
      if (i === 1) {
        this.$router.push("/map");
      } else {
        this.profile_index = i;
      }
    },
    allcartfnc(i) {
      this.$router.push({ path: "./caselist", query: { index: i - 1 } });
    },
    pageChange(v) {
      this.pageIndex = v;
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
