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
          <p>行业信息</p>
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
                <span>发布时间:2018-04-08</span>
              </div>
              <p class="tal">{{caseList[select_index].desc}}</p>
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
      pageSlide: ["行业资讯"],
      select_index: 0,
      pageIndex: 1,
      prevText: "",
      nextTextL: "",
      caseList: [
        {
          name: "外墙加固要注意的施工问题",
          desc:
            "外墙加固的过程中有的时候会因为某些原因而影响到正常的施工问题，比如说雨季的时候可能施工就会停滞或者是带来诸多的不便，另外在施工的过程中外墙的质量保障有的时候会有一定的难度，因为到底不是在室内施工，所以增加了难度之后我们的加固质量会有一定的问题存在。那么事实上在进行外墙的加固处理时我们要注意哪些施工问题呢？看看下面的介绍您就会知道了。外墙加固的过程中您必须要注意到雨季的施工防护措施，如果您在施工的过程中完全没有做好相应的防护措施，那么在施工的时候肯定会遇到一些问题，从而影响到施工的质量和安全。所以其实不管是雨季还是其他的季节在对外墙进行施工的时候都应该做好相应的防护措施，一些基本的防护措施都做好之后你在施工的时候安全性保障会更高，到时要真的遇到雨水天气外墙的施工质量也不会受到影响，这是我们在进行外墙的加固工作时需要注意的一个施工问题。另外，外墙加固的过程中你还必须要关注到外墙施工的质量保证问题，虽然说在外墙施工的时候难度会很大，但是在施工的过程中务必要保证质量，不要为了省事而做出豆腐渣工程来，这样的加固作业就毫无意义了。所以在进行外墙的加固时必须要密切的关注到施工质量的问题，这样外墙在加固的时候质量才会有最好的保障。"
        },
        {
          name: "关于维修加固的基本工作步骤是什么",
          desc:
            "房屋的维修加固是一件大事，因为这事关日后房屋在居住的过程中是否能够获得好的安全保障，毕竟要是房子的质量跟豆腐渣工程一样的话那么在入住的时候业主自己势必会忧心忡忡，而且也会很担心自己的房子在入住的过程中是否会有安全问题出现。在这个时候房屋的维修加固工程就显得尤为重要了。那么在加固的过程中基本的工作步骤是什么呢？看看下面的介绍您就能够了解了。在维修加固的过程中第一个步骤当然就是先了解一下工程的概况了，因为只有你对工程的基本概况有一定的了解之后你在开展工作任务的时候才会知道到底要怎么样去开展工作会更好，工作质量会更高。所以关于房屋的加固问题第一个步骤就是了解基本的概括。当你对房屋的概括有了基本的了解之后你在开展相关工作的时候第二个步骤就是进行施工计划的安排、部署。在安排施工计划的时候也会有很多的问题需要充分的考虑，比如说施工的安全性保障、施工计划的合理性、施工时长等。当相关的计划完全部署安排好之后才能够开展工作。维修加固的第三个步骤就是施工方案以及相关工艺的设计、确立。在这个过程中繁琐的问题会有很多，但是每一个繁琐的问题都需要细致的去进行安排，并且确保每一个工作内容是合理的，是有一定的保障性的"
        },
        {
          name: "房屋加固资讯：墙体裂缝修补的方法",
          desc:
            "对房屋进行适当的加固，可有效保障房屋在使用过程中的安全性，保障居住人群的生命及财产安全。在房屋加固中，有一个比较明显而且比较普遍出现的问题，这个问题就是墙体裂缝。墙体裂缝需要进行适当的修补，才能够有利于施工单位继续进行下一轮的加固工作。那么现在墙体裂缝修补方法有哪些？我们可以根据具体的情况来看一下。如果在房屋加固的时候，发现墙体上面有裂缝的出现，那么首先就需要根据这些裂缝的尺寸大小，进行现行处理，选择对应的修补方法。对于那些裂缝比较小的地方，工作人员可以直接用一些水泥砂浆或者其他的混合物，直接把裂缝的部位填满就可以了；如果面对一些裂缝比较大的部位，则需要使用到一部分比较专业的方法，需要在裂缝当中嵌入一些比较细的钢筋，然后再用水泥砂浆来进行填补。钢筋的加入，主要是为了提高墙面的坚固性，提升墙体的承重能力。由于墙体裂缝过大，会容易造成较大的安全隐患，而且往往有可能出现墙体倒塌的情况，所以必需要通过钢筋结构的固化，来提升整面墙的承重能力。房屋加固对于墙体裂缝的修补原则，一般都是根据裂缝的大小来进行判断的；当然了，有些裂缝过大的，已经不宜进行加固处理的墙体，就必须要根据现实情况进行拆除或者重建。"
        },
        {
          name: "粘钢板加固提高结构承重能力",
          desc:
            "现在人们对于建筑质量要求是非常严格的。但是很多时候难免有一些小小的误差，或者是本来就应该进行的后期工程，那就是我们说的建筑加固工程，发展到现在。建筑加固的方式多了很多，随着科技的发展各种新型的建筑材质的广泛应用。加固工程的材料也多了很多，其中粘钢板加固就非常实用。以为现在很多的建筑都是使用的混凝土机构这样一来使用粘钢板加固就是最合适的了。在建筑加固最多的地方就是一些主要的房顶房梁的地方因为这些地方都是最要的承重面，粘钢板加固也是为了增加它的结构承重能力，在安装的时候要观察沉重墙有没有破坏过，以免加固的受力点不正确，这样不断是不能加固墙壁的承重能力，反而会破坏墙壁的韧性，时间久了就会让墙壁坍塌。这就是选择错的加固方式活着说是加固技术不到家才引起的。在实际的建筑装修改造项目经常遇到墙体洞口按照使用要求需要增高增宽，这种情况也是经常发生的，但是根据建筑的结构材质不一样，活着是我们选择的加工方式不同也会有很大的区别。但是为了满足结构的正常使用性和安全性，按照尺寸要求和设计规范，需要采取加固措施对墙壁进行加固改造，保证结构的稳固。通常采用粘钢板加固，这种加工好处是施工快重量轻，不增加截面的大小，特别适合使用于混凝土结构的建筑加固。"
        },
        {
          name: "地基加固注浆是最基本也是最实用的加固方式",
          desc:
            "都说万丈高楼平地起，可见打好地基是多么重要，地基牢固了，才会让上层的建筑变得更加的坚固。建筑工程验收是否合格其实对地基的要求非常的严格，特别是现在一般都是高楼大厦的，要是没有一个好的地基，那么稍微一定的震动就会让住在楼上的人觉得非常不安全。就算不是崩塌但是肯定会有轻微毁损的。因为只要是对建筑这行有所了解的人都知道地基加固使用最多的加固方式就是地基加固注浆。这样的方式加固非常的施工工程简单很多。首先，我们要求地基加固注浆其中的一个目的肯定是为了增大截面，通过增大构件截面面积提高钢筋混凝土梁的强度，强度指的就是要让地基的承受能力更强，同时也是为了增强地基的稳定性。因为一些现实的原因，地基加固选择这样的加固方式还是非常好的，一个是因为特殊的地理位置的原因，采用打孔灌注的一种方式好像会更加的简单，也是最好施工的。其次，地基加固注浆就是一种打孔埋管之后再灌注水利的一种加固方式，其实这样这样的方式就为了提高地基上的混凝土的伸展能力，同时也是为了通过改善地基结构从而提高结构整体承载能力。当然传统意义上的地基加固都是如此。这样一来是因为地基非常重要，打好地基，增加地基的承重能力，也就是地基的刚性，能让上层建筑更加坚固，也更加的安全。"
        },
        {
          name: "墙体开洞加固的注意事项",
          desc:
            "现在的房地产竞争也是很激烈的，但是为什么有些房地产开发商的房子卖的要比有些房地产公司的要好太多，是因为人们在装修的时候发现了房屋质量要好很多。但是子再好的房子居住的时间久了就会有维修的必要，一般家庭的房子维修最多的是采用墙体开洞加固，而且一般的家庭的墙多少是砖混结构的，这里就来解释几种砖混结构的到底要如何开洞才会更加的安全。实施这项开动工程的时候要注意什么？第一，就是一般的墙体开洞加固要开多大的洞，当然就是开洞了之后一定要找到一个好的支持点，要不让会让整体崩塌的，做好支撑工作的前提当然是要懂得卸载。当然我们这个开洞的加工方式不是什么墙都可以卸载的。因为有些墙是我们说的主要承载墙壁，那么这样的墙就一定不能卸载了。第二，还有我们的在墙体开洞加固施工的时候一定要看需要开洞的这一层的上面一层是有什么用途的，要是上面一层是作为一个储藏室在使用，有大量的重量级的东西，那么在开洞之前一定要转移这些东西了，就是怕开了洞之后没有办法承重的能力。还有在开洞之前测量面积的时候一定要找好支撑点。在加固的时候还要观察一些楼下的承重墙有没有被破坏，因为一旦被破坏了那么就会受力不均匀，然后就是找不到支撑点。这种加工的方式就是错误的，也是非常不安全的。"
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
