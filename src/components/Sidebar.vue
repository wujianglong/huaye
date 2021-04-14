<template>
  <div class="sidebar" v-if="sideShow">
    <ul>
      <li>
        <div class="collection" title="收藏">
          收藏
        </div>
      </li>
      <li>
        <div class="close" @click="sideHide()" title="隐藏">
          
        </div>
      </li>
      <li>
        <div class="tel" @click="tel()" title="点击拨打">

        </div>
      </li>
      <li>
        <div class="ercode" title="小程序二维码">
          <!-- <div class="ercodeImg">
            <img src="../static/images/erweima.jpg" alt="">
          </div> -->
        </div>
      </li>
      <li>
        <div class="gotop" @click="goTop" title="置顶">

        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sideShow: true
    };
  },
  methods: {
    sideHide() {
      this.sideShow = false;
    },
    goTop() {
      window.scrollTo(0, 0);
    },
    tel() {
      window.location.href = "tel:86-0791-15179188784";
    }
  }
};
</script>

<style scoped lang="stylus">
  .sidebar
    position fixed
    z-index 999
    right 0.125rem
    top 30vh
    .ercodeImg
      position absolute
      transition all .3s
      top 335px
      right 50px
      width 2.5rem
      height 2.5rem
      img
        width 100%
        height 100%
    ul
      li
        cursor pointer
        margin-bottom 0.05rem
        >div
          width 1.25rem
          height 1.25rem
      .collection
        font-size 0.4rem
        line-height 1.25rem
        background #374b73
        color #fff
        text-align center
      .close
        background url('../static/images/sidebar1.png') -50px 0 no-repeat
      .tel
        background url('../static/images/sidebar1.png') -50px -51px no-repeat
      .ercode
        background url('../static/images/sidebar1.png') -50px -102px no-repeat
        &:hover
          .ercodeImg
            top 135px
      .gotop
        background url('../static/images/sidebar1.png') -50px -258px no-repeat
</style>
