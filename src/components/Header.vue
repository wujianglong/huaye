<template>
  <div class="header">
    <div class="header-c layoutFlex">
      <div class="header-c-icon fl">
        <img src="../static/images/icon.png" alt="">
      </div>
      <div class="header-c-name">
        <img src="../static/images/logoName.png" alt="">
      </div>
      <div class="header-c-right tar layoutFlex">
        <p class="ft3 mt1"><span class="hover" @click="setIndex">设为首页</span> | <span @click="addshou" class="hover">加入收藏</span></p>
        <div class="header-c-tel mt5">
          <img src="../static/images/tel.png" alt="">
          <div class="fr tel">
            <p class="ft5 fw">全国统一服务热线</p>
            <p class="color fw" style="font-size:0.55rem;">
              <a class="color" href="tel:13767072116">
                13767072116<br>
                0791-82101888
              </a>
            </p>
          </div>
        </div>
        <!-- <div>
          <p class="fw color" style="font-size:0.6rem"></p>
        </div> -->
        <!-- <p class="ft4">诚信为本；质量第一。科学管理；热情服务</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  methods: {
    setIndex() {},
    addshou() {
      // var url = window.location;
      // var title = document.title;
      // var ua = navigator.userAgent.toLowerCase();
      // if (ua.indexOf("msie 8") > -1) {
      //   external.AddToFavoritesBar(url, title, ""); //IE8
      // } else {
      //   try {
      //     window.external.addFavorite(url, title);
      //   } catch (e) {
      //     try {
      //       window.sidebar.addPanel(title, url, ""); //firefox
      //     } catch (e) {
      //       alert("加入收藏失败，请使用Ctrl+D进行添加");
      //     }
      //   }
      // }
    }
  }
};
</script>
<style scoped lang="stylus">
img
  vertical-align middle
.header
  background #fff
  width 100%
  border-top 2px solid #0090cf
  border-bottom 1px solid #ccc
  .header-c
    height 3.5rem
    overflow hidden
    align-items center
    margin 0 auto
    width 25rem
    .header-c-icon
      cursor pointer
      width 3rem
      img
        width 100%
  .header-c-name
    width 60%
    img
      width 100%
  .header-c-right
    height 100%
    flex 1
    flex-direction column
    .header-c-tel
      img 
        width 2rem
        margin-top 0.2rem
  .tel
    cursor pointer

</style>
