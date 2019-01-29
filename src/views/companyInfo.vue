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
          <p>公司资讯</p>
          <ul>
            <li v-for="(item, index) in pageSlide" :key="index" @click="profileIndexFnc(index)">
              <span class="arrow1"></span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="page_content">
          <p class="tal">{{pageSlide[0]}}</p>
          <div>
            <div class="caseShow layoutFlex">
              <p class="fw mb3">{{caseList[select_index].name}}</p>
              <div class="caseHeader mb3 gray6">
                <span>来源:未知</span>
                <span> | </span>
                <span>发布时间:2018-08-27</span>
              </div>
              <p class="tal" style="margin-bottom:5rem">{{caseList[select_index].desc}}</p>
              <div class="mt5 prevNext">
                <span class="fl" @click="prevFnc()">上一篇:{{1 > select_index ? '没有了':caseList[select_index - 1].name}}</span>
                <span class="fr" @click="nextFnc()">下一篇:{{17 > select_index ? caseList[select_index + 1].name : '没有了'}}</span>
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
      pageSlide: ["公司动态"],
      select_index: 0,
      pageIndex: 1,
      prevText: "",
      nextTextL: "",
      caseList: [
        {
          name: "农业发展银行江西省分行加固工程",
          desc:
            "农业发展银行江西省分行加固工程整体加固（碳纤维、粘钢、增大截面）,建筑周期30天,所在城市南昌"
        },
        {
          name: "南昌欧尚超市加固工程",
          desc:
            "南昌欧尚超市加固工程整体加固（碳纤维、粘钢、增大截面）,建筑周期30天,所在城市南昌"
        },
        {
          name: "抚州沃尔玛商场加固工程",
          desc:
            "抚州沃尔玛商场加固工程（抚州沃尔玛商场加固工程）,建筑周期30天,所在城市抚州"
        },
        {
          name: "南昌铜锣湾广场加固工程",
          desc:
            "南昌铜锣湾广场加固工程（柱整体顶升置换加固）,建筑周期90天,所在城市南昌"
        },
        {
          name: "长安铃木汽车服务店加固工程",
          desc:
            "南昌欧尚超市加固工程整体加固（整体加固（碳纤维、粘钢、增大截面））,建筑周期20天,所在城市南昌"
        },
        {
          name: "华南城1期交易广场加固工程",
          desc:
            "华南城1期交易广场加固工程（柱、梁增大截面、碳纤维加固）,建筑周期25天,所在城市南昌"
        },
        {
          name: "抚州农业银行档案室加固工程",
          desc:
            "抚州农业银行档案室加固工程（板、梁粘钢、碳纤维加固）,建筑周期20天,所在城市抚州"
        },
        {
          name: "江西上高银海大厦17.5影院加固工程",
          desc:
            "江西上高银海大厦17.5影院加固工程（板、梁粘钢、加固）,建筑周期17天,所在城市宜春"
        },
        {
          name: "南昌弘益科技有限公司工程",
          desc:
            "南昌弘益科技有限公司工程（板、梁粘钢、碳纤维加固）,建筑周期20天,所在城市南昌"
        },
        {
          name: "中国邮政集团公司上饶分公司邮政网点加固工程",
          desc:
            "中国邮政集团公司上饶分公司邮政网点加固工程（柱、梁增大截面、碳纤维加固）,建筑周期45天,所在城市上饶"
        },
        {
          name: "赣州龙南行政服务中心加固工程",
          desc:
            "赣州龙南行政服务中心加固工程（裂缝灌浆、梁碳纤维加固）,建筑周期20天,所在城市赣州"
        },
        {
          name: "景德镇乐平市博浩源化工厂加固工程",
          desc:
            "景德镇乐平市博浩源化工厂加固工程（整体改造加固（碳纤维、粘钢、增大截面））,建筑周期60天,所在城市景德镇"
        },
        {
          name: "江西省国家安全厅加固工程",
          desc:
            "江西省国家安全厅加固工程（柱增大截面、碳纤维加固）,建筑周期15天,所在城市南昌"
        },
        {
          name: "广丰龙溪建设工程公司加固工程",
          desc:
            "广丰龙溪建设工程公司加固工程（第5层柱整体顶升置换加固）,建筑周期40天,所在城市上饶"
        },
        {
          name: "安义县农业银行加固工程",
          desc:
            "安义县农业银行加固工程（安义县农业银行加固工程）,建筑周期20天,所在城市南昌"
        },
        {
          name: "南昌市三店西路农业银行加固工程",
          desc:
            "南昌市三店西路农业银行加固工程（板粘钢加固）,建筑周期25天,所在城市南昌"
        },
        {
          name: "抚州市农业银行加固工程",
          desc:
            "抚州市农业银行加固工程（门洞静力切割、粘钢加固）,建筑周期35天,所在城市抚州"
        },
        {
          name: "新建县新建中心商业体区域加固工程",
          desc:
            "新建县新建中心商业体区域加固工程（梁增大截面、碳纤维加固）,建筑周期30天,所在城市南昌"
        },
        {
          name: "弋阳海联大厦加固工程",
          desc:
            "弋阳海联大厦加固工程整体改造加固（碳纤维、粘钢、增大截面）,建筑周期50天,所在城市上饶"
        },
        {
          name: "龙南康洋加油站加固工程",
          desc:
            "龙南康洋加油站加固工程（梁、柱增大截面、碳纤维加固）,建筑周期40天,所在城市赣州"
        },
        {
          name: "江西省中医院综合楼第18层加固工程",
          desc:
            "江西省中医院综合楼第18层加固工程（江西省中医院综合楼第18层加固工程）,建筑周期25天,所在城市南昌"
        },
        {
          name: "利字街还迁房加固工程",
          desc: "利字街还迁房加固工程（板碳纤维加固）,建筑周期20天,所在城市南昌"
        },
        {
          name: "新余海澜之家加固工程",
          desc:
            "新余海澜之家加固工程整体改造加固（碳纤维、粘钢、增大截面）,建筑周期50天,所在城市新余"
        },
        {
          name: "上饶海澜之家加固工程",
          desc:
            "上饶海澜之家加固工程整体改造加固（碳纤维、粘钢、增大截面）,建筑周期45天,所在城市上饶"
        },
        {
          name: "湾里区行政中心加固工程",
          desc:
            "湾里区行政中心加固工程（梁、柱增大截面、碳纤维加固）,建筑周期30天,所在城市南昌"
        },
        {
          name: "贵溪兰亭苑小区加固工程",
          desc:
            "贵溪兰亭苑小区加固工程（梁、柱增大截面、碳纤维加固）,建筑周期30天,所在城市贵溪"
        },
        {
          name: "江西华强医疗器械有限公司加固工程",
          desc:
            "江西华强医疗器械有限公司加固工程（柱整体置换、梁、柱增大截面）,建筑周期50天,所在城市南昌"
        },
        {
          name: "宜黄农村信用社神岗支行加固工程",
          desc:
            "宜黄农村信用社神岗支行加固工程（承重墙体拆除加固）,建筑周期30天,所在城市抚州"
        },
        {
          name: "江西外贸专修学院加固工程",
          desc:
            "江西外贸专修学院整体改造加固（楼板、梁增大截面、楼板静力切割、新增砼楼梯）,建筑周期45天,所在城市南昌"
        },
        {
          name: "南昌洪城开关厂加固工程",
          desc:
            "南昌洪城开关厂加固工程整体改造加固（楼板、梁增大截面、墙体钢筋网加固）,建筑周期60天,所在城市南昌"
        },
        {
          name: "汇融大厦第12层加固工程",
          desc:
            "汇融大厦第12层加固工程（梁碳纤维、粘贴钢板加固）,建筑周期30天,所在城市南昌"
        },
        {
          name: "上高万象广场加固工程",
          desc:
            "上高万象广场加固工程（梁碳纤维、粘贴钢板加固）,建筑周期45天,所在城市上高"
        },
        {
          name: "金溪钢结构屋面整体顶升1.5米工程",
          desc:
            "金溪钢结构屋面整体顶升1.5米工程（钢结构顶升）,建筑周期30天,所在城市抚州"
        },
        {
          name: "九江东林大佛佛台加固工程",
          desc:
            "九江东林大佛佛台加固工程（九江东林大佛佛台加固工程）,建筑周期20天,所在城市九江"
        },
        {
          name: "新干鸿州佳苑地下室加固工程",
          desc:
            "新干鸿州佳苑地下室加固工程（柱包钢、增大截面加固）,建筑周期35天,所在城市新干"
        },
        {
          name: "中国农业银行瑞昌支行加固工程",
          desc:
            "中国农业银行瑞昌支行加固工程（粘贴钢板）,建筑周期30天,所在城市九江"
        },
        {
          name: "横店大厦剪力墙置换加固工程",
          desc:
            "横店大厦剪力墙置换加固工程（剪力墙顶升置换加固）,建筑周期20天,所在城市杭州"
        },
        {
          name: "九江机场航站楼改造加固工程",
          desc:
            "九江机场航站楼改造加固工程（整体改造加固（楼板、梁增大截面、碳纤维、墙体钢筋网加固）,建筑周期60天,所在城市九江"
        },
        {
          name: "进贤九颂山河地下室堵漏工程",
          desc:
            "进贤九颂山河地下室堵漏工程（地下室剪力墙、顶板堵漏）,建筑周期30天,所在城市南昌"
        },
        {
          name: "南城建昌镇光塔村杨柳巷72号房屋止倾加固工程",
          desc:
            "南城建昌镇光塔村杨柳巷72号房屋止倾加固工程（静压锚杆桩加固）,建筑周期35天,所在城市抚州"
        }
      ]
    };
  },
  create() {},
  mounted() {
    this.select_index = this.$route.query.index ? this.$route.query.index : 0;
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
      if (this.select_index > 17) {
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
