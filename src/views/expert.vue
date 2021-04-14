<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <!-- <router-view></router-view> -->
    <!-- <Carousel/> -->
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>专家团队</span>
        </div>
      </div>
      <div class="page_main common layoutFlex">
        <div class="page_slide">
          <p>专家团队</p>
          <ul>
            <!-- <li v-for="(item, index) in pageSlide" :key="index" @click="profileIndexFnc(index)">
              <span class="arrow1"></span>
              <span>{{item}}</span>
            </li> -->
          </ul>
        </div>
        <div class="page_content">
          <p class="tal">专家队伍</p>
          <div class="erpertList">
            <div class="tac">
              <img class="expertImg" src="../static/images/expert2.png" alt="">
              <p>李向阳</p>
              <p>建筑结构教授级高工,国务院特殊津贴专家</p>
            </div>
             <div class="tac">
              <img class="expertImg" src="../static/images/expert4.png" alt="">
              <p>谌润水</p>
              <p>江西省桥梁专家,国务院特殊津贴专家</p>
            </div>
             <div class="tac">
              <img class="expertImg" src="../static/images/expert3.png" alt="">
              <p>熊进刚</p>
              <p>南昌大学建筑工程学院教授,结构工程专业博士</p>
            </div>
            <div class="tac">
              <img class="expertImg" src="../static/images/expert5.jpeg" alt="">
              <p>吴敏捷</p>
              <p>建筑结构教授级高工,国务院特殊津贴专家</p>
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
      pageSlide: ["车宇林", "李向阳", "谌润水", "熊进刚"],
      profile_index: 0
    };
  },
  create() {
    let c = "ddd";
    console.log(c);
  },
  methods: {
    profileIndexFnc(i) {
      this.profile_index = i;
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
        height 10rem
      .erpertList
        >div
          float left
          width 50%
</style>
