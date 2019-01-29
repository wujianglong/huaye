<template>
  <div class="layout">
    <div class="layout_content1 common tal layoutFlex">
      <div class="content1_l">
        <!-- 业务范围 -->
        <div class="scope">
          <p class="commonHeader"><span>技术类型</span></p>
          <ul>
            <router-link to="./technology?index=0" tag="li">
              <span class="arrow"></span>
              <span>种植钢筋锚固</span>
            </router-link>
            <router-link to="./technology?index=1" tag="li">
              <span class="arrow"></span>
              <span>裂缝修补加固</span>
            </router-link>
            <router-link to="./technology?index=2" tag="li">
              <span class="arrow"></span>
              <span>外粘型钢</span>
            </router-link>
            <router-link to="./technology?index=3" tag="li">
              <span class="arrow"></span>
              <span>粘贴钢板加固</span>
            </router-link>
            <router-link to="./technology?index=4" tag="li">
              <span class="arrow"></span>
              <span>增大截面加固</span>
            </router-link>
            <router-link to="./technology?index=5" tag="li">
              <span class="arrow"></span>
              <span>粘贴碳纤维加固</span>
            </router-link>
            <router-link to="./technology?index=6" tag="li">
              <span class="arrow"></span>
              <span>锚杆桩加固</span>
            </router-link>
            <router-link to="./technology?index=7" tag="li">
              <span class="arrow"></span>
              <span>钢筋混凝土切割与增补</span>
            </router-link>
            <router-link to="./technology?index=8" tag="li">
              <span class="arrow"></span>
              <span>建筑物的纠偏平移</span>
            </router-link>
            <router-link to="./technology?index=9" tag="li">
              <span class="arrow"></span>
              <span>墙体加固</span>
            </router-link>
            <router-link to="./technology?index=10" tag="li">
              <span class="arrow"></span>
              <span>桥梁顶升施工</span>
            </router-link>
            <router-link to="./technology?index=11" tag="li">
              <span class="arrow"></span>
              <span>高压旋喷桩</span>
            </router-link>
            <router-link to="./technology?index=12" tag="li">
              <span class="arrow"></span>
              <span>碳纤维预应力板</span>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="content1_r">
        <div class="layoutFlex">
          <!-- 公司简介 -->
          <div class="profile">
            <p class="commonHeader"><span>公司介绍</span></p>
            <router-link class="profile_content" tag="div" to="/profile">
              <a>
                <img class="fl" src="../static/images/team/team1.png" width="183" height="122">
              </a>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;江西华冶特种工程技术有限公司成立于2012年，2013年6月获得特种工程（结构补强）专业承包资质。公司办公地址位于江西省西湖区抚河中路419号华财大厦21楼B座。
                公司创始人孙芝舲女士系教授级高级工程师、国家一级结构工程师、建筑工程鉴定委员会专家成员、特种专业加固行业协会理事，曾参与锚杆静压桩国家规范编制工作。公司现有工程技术人员30余名，其中一、二级建造师3名，国家一级结构工程师3名，高级工程师2名，工程师3名。
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司主要经营项目：建筑结构加固设计；建筑物倾斜、纠偏、平移加固；基础不均匀沉降加固；粘贴碳纤维布加固；钢筋植筋加固；粘贴钢板及包钢加固...
                <!-- 混凝土构件增大截面加固；住宅及商业体结构改造加固；混凝土构件顶升置换加固；静压锚杆桩加固；钢结构加固；混凝土构件静力切割；裂缝修补；防水堵漏；水利水电工程加固；桥梁、涵洞的除险加固等技术问题 -->
                <!-- <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自始建以来，公司已承接各种除险、加固、改造项目300余项，许多工程都是在克服现场施工环境差、工期紧、技术难度高、危险系数大等情况下，保质保量完成了业主委托的任务，受到质监、监理、设计单位的一致好评，并得到上级主管单位的认可。经过多年的探索，我们总结出许多先进经验：如锚杆桩逆向施工法等，同时还拥有一批有着实际经验的专业技术工人施工队伍，为公司今后的发展奠定了坚实的基础。
                我们公司一直坚持“以人为本，锐意进取”的经营理念，以完善的人才和技术优势，为广大客户提供安全有效的结构加固技术，让新老建筑实现更完美的社会价值。 -->
              </p>
            </router-link>
          </div>
          <!-- 公司资质 -->
          <div class="carousel">
            <p class="commonHeader"><span>公司资质</span></p>
            <div class="carouselImg">
              <div>
                <img style="width:100%;height:100%;" src="../static/images/license/l4.png" alt="">
              </div>
              <div>
                <span>
                </span>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="layoutFlex mt3">
          <!-- 公司新闻 -->
          <div class="news mr5">
            <p class="commonHeader"><span>公司新闻</span></p>
            <ul>
              <template v-for="(item,index) in companyInfo">
                <router-link tag="li" :to="'./companyInfo?index=' + index " :key="index">
                  <span>{{item.name}}</span>
                  <span class="fr">2018-8-27</span>
                </router-link>
              </template>
              <!-- <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li> -->
            </ul>
          </div>
          <!-- 行业资讯 -->
          <div class="info">
            <p class="commonHeader"><span>行业资讯</span></p>
            <ul>
              <template v-for="(item,index) in tradeInfo">
                <router-link tag="li" :to="'./tradeInfo?index=' + index " :key="index">
                  <span>{{item.name}}</span>
                  <span class="fr">2018-8-27</span>
                </router-link>
              </template>
              <!-- <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li>
              <li>
                <span>公司更名为北京天祥诚建设工程有限公司</span>
                <span class="fr">2018-8-27</span>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="layout_content2 common tal layoutFlex">
      <div class="content2_l">
        <div class="case mr5">
          <p class="commonHeader mb2"><span>工程案例</span></p>
          <ul class="layoutFlex">
            <router-link tag="li" to="./caselist?index=9">
              <img src="../static/images/cart/c2.jpg" alt="">
              <p>新建中心</p>
            </router-link>
            <router-link tag="li" to="./caselist?index=10">
              <img src="../static/images/cart/c3.jpg" alt="">
              <p>欧尚超市</p>
            </router-link>
            <router-link tag="li" to="./caselist?index=15">
              <img src="../static/images/cart/c4.jpg" alt="">
              <p>铜锣湾</p>
            </router-link>
            <router-link tag="li" to="./caselist?index=1">
              <img src="../static/images/cart/c5.jpg" alt="">
              <p>万象广场</p>
            </router-link>
            <router-link tag="li" to="./caselist?index=14">
              <img src="../static/images/cart/c6.jpg" alt="">
              <p>湾里行政中心</p>
            </router-link>
            <router-link tag="li" to="./caselist?index=4">
              <img src="../static/images/cart/c7.jpg" alt="">
              <p>南昌弘益科技</p>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="content2_r">
        <div class="contact">
          <p class="commonHeader"><span>联系我们</span></p>
          <div>
            <p class="fw tac">
              <a class="ft6" style="color:#0090cf" href="tel:13767072116">
                <img class="mt5" src="../static/images/tel1.jpg" alt="">
                陈先生:13767072116<br>
                0791-82101888
                <br>
                <span class="tac color ft5">点击即可咨询</span>
              </a>
            </p>

            <p class="ft4 tac color mt2 fw">江西省内加固行业领导者</p>
            <p class="tac mt2">江西华冶特种工程技术有限公司</p>
            <div class="tal mt2">
              <p>公司地址：南昌市抚河中路419号华财大厦21楼B座</p>
              <!-- <p>邮编：430223</p> -->
              <p class="mt2">电话：<a href="tel:0791-82101888">0791-82101888</a>&nbsp;&nbsp;<a href="tel:13767072116">13767072116</a></p>
              <p class="mt2">网址：https://www.huayejiagu.com</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      companyInfo: [
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
        }
      ],
      tradeInfo: [
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
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  .layout
    padding-top 0.4rem
  .commonHeader
    font-size 0.35rem
    font-weight bold
    border-bottom 1px solid #0090cf
    color #0090cf
    >span
      padding-bottom 0.07rem
      display inline-block
  .layout_content1
    .content1_l
      flex 1
      .scope
        width 80%
        font-size 0.3rem
        li
          cursor pointer
          height 0.8rem
          line-height 0.8rem
          border-bottom: 1px dotted #D8D8D8
          display flex
          -webkit-display flex
          align-items center
          .arrow
            display block
            width 0
            height 0
            border-width 0.15rem 0 0.15rem 0.2rem
            border-style solid
            border-color transparent transparent transparent #0090cf
            position relative
            top 0px
            left 0px
            margin-right 0.3rem
          &:hover
            color #066c98
            .arrow
              transform rotate(90deg)
              
    .content1_r
      flex 3
      .profile
        flex 3
        font-size 0.3rem
        .profile_content
          line-height 1.8
          margin-top 0.2rem
          img
            margin-right 0.15rem
        li
          span
      .carousel
        flex 2
        padding-left 5%
        .carouselImg
          border 1px solid #ccc
          margin-top 0.2rem
          height 85%
          >div
            height 100%
          img
            width 100%
            height 100%
      .news
        flex 1
        ul
          li
            list-style square inside
            height 0.8rem
            line-height 0.8rem
            font-size 0.3rem
            border-bottom: 1px dotted #d8d8d8;
            &:hover
              cursor pointer
              span
                color #066c98
      .info
        flex 1
        ul
          li
            list-style square inside
            height 0.8rem
            line-height 0.8rem
            font-size 0.3rem
            border-bottom 1px dotted #d8d8d8
            &:hover
              cursor pointer
              span
                color #066c98

  .layout_content2
    padding-top 0.3rem
    .content2_l
      flex 3
      .case
        ul
          flex-wrap wrap
          justify-content space-between
          li
            overflow hidden
            cursor pointer
            img
              width 6rem
              height 3.5rem
            p
              font-size 0.4rem
              text-align center
              margin-top 0.1rem
              margin-bottom 0.2rem
            &:hover
              img
                transition all 1s
                transform scale(1.1)
    .content2_r
      flex 1
      .contact
        font-size 0.35rem
        >div
          p
      a
        color #2c3e50
        


</style>
