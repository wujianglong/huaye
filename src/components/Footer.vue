<template>
  <div class="footer">
    <div class="partner layoutFlex common">
      <div class="mr3">
        合作伙伴:
      </div>
      <ul class="layoutFlex">
        <li>
          <img src="../static/images/p1.png" alt="">
        </li>
        <li>
          <img src="../static/images/p2.png" alt="">
        </li>
        <li>
          <img src="../static/images/p3.png" alt="">
        </li>
        <li>
          <img src="../static/images/p4.png" alt="">
        </li>
        <li>
          <img src="../static/images/p5.png" alt="">
        </li>
        <li>
          <img src="../static/images/p6.png" alt="">
        </li>
        <li>
          <img src="../static/images/p7.png" alt="">
        </li>
      </ul>
    </div>
    <div class="footer-content">
      <div class="common layoutFlex tal">
        <div>
          <p>
            <span>公司简介</span>
          </p>
          <ul>
            <li>
              <router-link tag="span" to="./profile">关于我们</router-link>
            </li>
            <li>
              <router-link tag="span" to="./team">团队风采</router-link>
            </li>
            <li>
              <router-link tag="span" to="./expert">专家团队</router-link>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <span>
              公司业务
            </span>
          </p>
          <ul>
            <li>
              <router-link tag="span" to="./technology">技术类型</router-link>
            </li>
            <li>
              <router-link tag="span" to="./case">经典案例</router-link>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <span>
              联系方式
            </span>
          </p>
          <ul>
            <li>
              <a href="tel:0791-82101888">联系我们</a>
            </li>
          </ul>
        </div>
        <div class="erCode">
          <div>
            <p class="erCodeTitle">微信小程序: huayejiagu</p>
            <img src="../static/images/erweima.jpg" alt="">
            <div>
              <p class="">
                电话：0791-82101888
              </p>
              <p>
                地址：南昌市抚河中路419号华财大厦21楼B座
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="common beian">
        <span class="fl">
          Copyright © 2018 华冶加固
        </span>
        <span class="fr">
          赣ICP备18013344号-1
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="stylus">
  a
    color #fff
  .footer
    width 100%
    border-top 2px solid #0090cf
    .partner
      padding: 0.2rem 0;
      >div
        font-weight bold
        font-size 0.4rem
        line-height 1.3rem
      ul
        flex 1
        justify-content space-between
        li
          width 3rem
          border 1px solid #ccc
          height 1.2rem
          &:hover
            transform scale(1.1)
          img
            width 100%
            height 100%
            vertical-align top
    .footer-content
      width 100%
      background #27303f
      font-size 0.35rem
      color #fff
      .beian
        border-top 1px solid #bbb
        margin-top 0.3rem
      .common
        div
          flex 1
        ul
          li
            margin-bottom 0.2rem
            span
              &:hover
                color #0090cf
                cursor pointer
      p
        font-size 0.4rem
        padding-bottom 1px
        color #fff
        margin 0.6rem 0 0.6rem 0
      .erCode
        img
          width 2.5rem
          height 2.5rem
        .erCodeTitle
          color #fff
          font-size 0.4rem
          margin-top 0.5rem
          margin-bottom 0.2rem
        p
          margin 0
          color #fff
          font-size 0.35rem
          margin 0.3rem 0 0rem 0
      .beian
        height: 1rem;
        line-height: 1rem;
</style>
