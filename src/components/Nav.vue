<template>
  <div class="nav">
    <div class="nav-c">
      <ul class="layoutFlex">
        <router-link tag="li" :class="index === 0?'active':''" to="/">首页</router-link>
        <router-link tag="li" :class="index === 1?'active':''" to="/profile">公司介绍</router-link>
        <!-- <router-link tag="li" to="/license">营业执照</router-link> -->
        <router-link tag="li" :class="index === 2?'active':''" to="/expert">专家团队</router-link>
        <router-link tag="li" :class="index === 3?'active':''" to="/technology">技术类型</router-link>
        <router-link tag="li" :class="index === 4?'active':''" to="/case">经典案例</router-link>
      
        <!-- <li>
          公司业绩
          <span></span>
          <div class="nav-ul">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </li> -->
        <router-link tag="li" :class="index === 5?'active':''" to="/team">团队风采</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      index: 0
    };
  },
  props: {
    msg: String
  },
  created() {
    let t = this.$route.path;
    if (t.includes("profile")) {
      this.index = 1;
    } else if (t.includes("expert")) {
      this.index = 2;
    } else if (t.includes("technology")) {
      this.index = 3;
    } else if (t.includes("case")) {
      this.index = 4;
    } else if (t.includes("team")) {
      this.index = 5;
    }
  }
};
</script>

<style scoped lang="stylus">
  .nav
    border-bottom 1px solid #CECECE
    .nav-c
      margin: 0 auto
      width: 25rem
      font-size 0.4rem
    ul
      justify-content space-between
      height 1.1rem
      line-height 1.1rem
      li.active
        background #0090cf
        color #fff
      li
        cursor pointer
        width 3rem
        position relative
        &:hover 
          background #0090cf
          color #fff
          .nav-ul
            display block
          span
            border-top: 1px solid #fff
            border-right: 1px solid #fff
        span
          position: relative
          display: inline-block
          width: 0.12rem
          height: 0.12rem
          border-top: 1px solid #444
          border-right: 1px solid #444
          transform: rotate(-225deg)
          margin-left: 4px
          top: -4px
        .nav-ul
          display none
          position absolute
          width 100%
          z-index 2
          background #0090cf
          color #fff
          

</style>
