<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <!-- <router-view></router-view> -->
    <!-- <Carousel/> -->
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>公司介绍</span>
        </div>
      </div>
      <div class="page_main common layoutFlex">
        <div class="page_slide">
          <p>公司介绍</p>
          <ul>
            <li v-for="(item, index) in pageSlide" :key="index" @click="profileIndexFnc(index)">
              <span class="arrow1"></span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="page_content">
          <p class="tal">{{pageSlide[profile_index]}}</p>
          <div class="tal" v-show="profile_index === 0" style="line-height:2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;江西华冶特种工程技术有限公司成立于2012年6月，目前已获得特种工程（结构补强）专业承包、市政公用工程专业总承包叁级及房屋建筑总承包叁级等施工资质。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司创始人孙芝舲女士系教授级高级工程师、国家一级结构工程师、建筑工程鉴定委员会专家成员、特种专业加固行业协会理事，曾参与锚杆静压桩国家规范编制工作。公司现有工程技术人员30余名，其中一、二级建造师3名，国家一级结构工程师3名，高级工程师3名，工程师3名。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司主要经营项目:建筑加固工程、水利水电加固工程、隧道工程、钢结构工程、道路、桥梁加固工程、室内为装饰工程、房屋建筑工程、亮化工程、机电安装工程、土石方工程、房屋拆迁工程、地基与基础工程、地质灾害治理服务、建筑材料、装饰材料的批发、零售等。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自始建以来，公司已承接各种除险、加固、改造项目500余项，许多工程都是在克服现场施工环境差、工期紧、技术难度高、危险系数大等情况下，保质保量完成了业主委托的任务，受到质监、监理、设计单位的一致好评，并得到上级主管单位的认可。经过多年的探索，我们总结出许多先进经验：如锚杆桩逆向施工法等，同时还拥有一批有着实际经验的专业技术工人施工队伍，为公司今后的发展奠定了坚实的基础。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现公司发展稳定，产能效益良好，于2020年通过国家级“高新技术企业”及诚信企业“AAA”认定，得到了省内外知名专家及大学院校学者的支持，使我司在处理技术难度高、危险性大等特殊加固工程有了强大的技术力量。公司现已获实用新型专利2项，获软件著作权登记证书10项。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，公司与省内外工业建筑材料产商、科学技术研究院及省内外各大高校达成了合作，为诸多全国30强地产商及世界500强企业提供系统性加固解决方案。
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们公司一直秉承“以人为本，锐意进取”的经营理念，以完善的人才和技术优势，为广大客户提供安全有效的结构加固技术，让新老建筑实现更高的使用价值。
          </div>
          <div class="tal fw licenseImg" v-show="profile_index === 1">
            <!-- <img src="../static/images/license/l4.png" alt="">
            <img style="margin-top:1rem" src="../static/images/license/l1.jpg" alt=""> -->

            <img class="img1" src="../static/images/profile/img1.jpeg" alt="">
            <img class="img1" src="../static/images/profile/img13.jpg" alt="">
            <!-- <img src="../static/images/profile/img1.jpeg" alt=""> -->
            <img src="../static/images/profile/img9.jpg" alt="">
            <img src="../static/images/profile/img10.jpg" alt="">
            <img src="../static/images/profile/img8.jpg" alt="">
            <img src="../static/images/profile/img8.jpg" alt="">
            <img src="../static/images/profile/img11.jpg" alt="">
            <img src="../static/images/profile/img2.jpg" alt="">
            <img src="../static/images/profile/img3.jpg" alt="">
            <img src="../static/images/profile/img4.jpg" alt="">
            <img src="../static/images/profile/img5.jpg" alt="">
            <img src="../static/images/profile/img6.jpg" alt="">
            <img src="../static/images/profile/img7.jpg" alt="">
            
            
            <img src="../static/images/profile/img12.jpg" alt="">
            

            <img src="../static/images/profile/img14.jpg" alt="">
            <img src="../static/images/profile/img15.jpg" alt="">
            <img src="../static/images/profile/img16.jpg" alt="">
            <img src="../static/images/profile/img17.jpg" alt="">


            <!-- <div>
              <img style="display:inline-block;width:50%" src="../static/images/license/l2.jpg" alt="">
              <img style="display:inline-block;width:50%" src="../static/images/license/l3.png" alt="">
            </div> -->
          </div>
          <div class="tal" v-show="profile_index === 2" style="line-height:2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎访问江西华冶特种工程技术有限公司网站！<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先非常感谢您对我公司的关注！<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非常希望通过这个小网站，让您初步了我们，希望我们在建筑结构加固领域的；专业的行业经验、专业施工团队、优秀管理思想，完善的运营模式，能够对您所面临的问题有所帮助<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;江西华冶特种工程技术有限公司是以建筑工程加固工程技术研究开发，工程前期施工鉴定，设计一体化的特种专业施工企业，公司营业范围有建筑、桥梁、隧道、钢结构、水利水电工程的加固设计；桥梁顶升及基础加固施工；文物加固和修缮施工；建筑物倾斜、纠偏、平移加固施工；基础不均匀沉降加固施工；预应力加固施工；粘贴碳纤维布加固施工；钢筋植筋加固施工；粘贴钢板及包钢加固施工；混凝土构件增大截面加固施工；住宅及商业体结构改造加固施工；混凝土构件顶升置换加固施工；静压锚杆桩加固施工；钢结构加固施工；混凝土构件静力切割施工；裂缝修补施工；防水堵漏施工等专业加固技术业务，公司现有科技人员和特种专业施工队伍，人员都参加过结构加固的培训考核，经过数年的努力和创新，使企业有长足的发展，目前企业拥有各种生产，施工和检测设备.<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;江西华冶加固为国内客户提供技术咨询与专业加固施工服务已经有6年时间，我们在民用建筑、商用建筑、桥梁、公共设施等领域，为大中型国营企业、民营企业、跨国公司、事业单位、政府等机构，提供了优异的技术咨询与专业施工服务，获得了客户高度的评价 ，我公司先后施工赣州市龙南县行政服务中心改造项目，湾里区行政大楼加固项目。广丰龙溪集团龙华一品柱置换加固项目等工程的质量受到了众业主的好评，也获得到了各级检测部门的安全合格报告。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在未来，我们将继续以用户为关注焦点，坚持“诚信，创新，科学，优质”的经营理念，大力推进技术进步，不断提高管理水平，认真履行社会责任，竭诚为用户提供一流的服务和产品，努力创造和提升用户投资价值，与各界朋友进一步增进了解，加强合作，携手并进，共创美好的未来。<br>
          </div>
          <div class="tac fw" v-show="profile_index === 3">
            <div class="mt10 ml30 ft10 idea">
              <!-- <span>诚信为本，质量第一</span><br>
              <span>科学管理，热情服务</span><br>
              <span>以诚待人，以信誉成大业</span> -->
              <div class="idea_txt">
                <ul>
                <li>
                  <div class="idea_header tal">
                    立业宗旨
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    公司目标
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    质量方针
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    质量目标
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    质量承诺
                  </div>
                </li>
              </ul>
              </div>
              <div class="idea_line tal">
                <span class="idea_line_circle">

                </span>
                <div>

                </div>
                <span class="idea_line_circle">

                </span>
                <div>
                  
                </div>
                <span class="idea_line_circle">

                </span>
                <div>
                  
                </div>
                <span class="idea_line_circle">

                </span>
                <div>
                  
                </div>
                <span class="idea_line_circle">

                </span>
              </div>
              <ul class="idea_txt1 gray9">
                <li>
                  <div class="idea_header tal gray9">
                    诚信为本，质量第一。科学管理，热情服务。
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    以诚待人，以信誉成大业。
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    优质服务是您的基本需求，是我的生存之本。
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    100%的合同履约率，+100%的顾客满意率。
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    严格履行合同义务，努力实现客户期望。
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="tac fw" v-show="profile_index === 4">
            <div class="mt10 ml30 ft10 idea">
              <!-- <span>诚信为本，质量第一</span><br>
              <span>科学管理，热情服务</span><br>
              <span>以诚待人，以信誉成大业</span> -->
              <div class="idea_txt">
                <ul>
                <li>
                  <div class="idea_header tal">
                    公司名称
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    公司地址
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    联系电话
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    公司网址
                  </div>
                </li>
                <li>
                  <div class="idea_header tal">
                    小程序
                  </div>
                </li>
              </ul>
              </div>
              <div class="idea_line tal">
                <span class="idea_line_circle">

                </span>
                <div>

                </div>
                <span class="idea_line_circle">

                </span>
                <div>
                  
                </div>
                <span class="idea_line_circle">

                </span>
                <div>
                  
                </div>
                <span class="idea_line_circle">

                </span>
                <div>
                  
                </div>
                <span class="idea_line_circle">

                </span>
              </div>
              <ul class="idea_txt1 gray9">
                <li>
                  <div class="idea_header tal gray9">
                    江西华冶特种工程技术有限公司
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    南昌市抚河中路419号华财大厦21楼B座
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    13755651021 15179188784
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    http://www.huayejiagu.com
                  </div>
                </li>
                <li>
                  <div class="idea_header tal gray9">
                    <img src="../static/images/erweima.jpg" alt="" width="200" height="200">
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="mt20">
              江西省内加固行业领导者<br><br>
              江西华冶特种工程技术有限公司<br><br>
              公司地址：南昌市抚河中路419号华财大厦21楼B座<br><br>
              电话：13755651021  15179188784<br><br>
              网址：https://www.huayejiagu.com
            </div> -->
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
      pageSlide: ["公司介绍", "企业证件", "总经理致词", "经营理念", "联系我们"],
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
    .idea
      .idea_txt1
        margin-left 50px
      .idea_txt
        margin-right 20px
        padding-top 0px
      ul
        li
          margin-bottom 80px
      display flex
      flex-direction row
      .idea_line
        width 10px
        >div
          height 80px
          width 2px
          background #ccc
        .idea_line_circle
          width 6px
          height 6px
          display inline-block
          background #0090cf
          border-radius 6px 
          position relative
          left -2px
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
      .licenseImg
        img
          width 50%
        .img1
          width 100%
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
</style>
