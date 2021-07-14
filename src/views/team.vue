<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <!-- <router-view></router-view> -->
    <!-- <Carousel/> -->
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>团队风采</span>
        </div>
      </div>
      <div class="page_main common layoutFlex">
        <div class="page_slide">
          <p>团队风采</p>
          <ul>
            <li v-for="(item, index) in pageSlide" :key="index" @click="profileIndexFnc(index)">
              <span class="arrow1"></span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="page_content">
          <p class="tal">团队风采</p>
          <div class="tal">
            <div class="tac">
              <img class="mb6"  src="../static/images/team/team10.jpeg" alt="">
              <img class="mb6"  src="../static/images/team/team11.jpeg" alt="">
              <img class="mb6" src="../static/images/team/team7.jpg" alt="">
              <img class="mb6"  src="../static/images/team/team9.jpg" alt="">
              <img class="mb6"  src="../static/images/team/team8.jpg" alt="">
              
              <!-- <img class="mb6" src="../static/images/team/team5.jpg" alt="">
              <img class="mb6" src="../static/images/team/team6.jpg" alt=""> -->
              <!-- <img class="mb6"  src="../static/images/team/team2.png" alt="">
              <img class="mb6"  src="../static/images/team/team4.png" alt=""> -->
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
      pageSlide: ["团队风采"],
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
      p
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
      img
        width 100%
</style>
