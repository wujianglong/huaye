<template>
  <div class="profile">
    <Header/>
    <Nav/>
    <!-- <router-view></router-view> -->
    <!-- <Carousel/> -->
    <div>
      <div class="route tal">
        <div class="common">
          <router-link to="/" tag="span">首页</router-link> > <span>技术类型</span>
        </div>
      </div>
      <div class="page_main common layoutFlex">
        <div class="page_slide">
          <p>技术类型</p>
          <ul>
            <li v-for="(item, index) in pageSlide" :key="index" @click="profileIndexFnc(index)">
              <span class="arrow1"></span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="page_content">
          <p class="tal">{{pageSlide[profile_index]}}</p>
          <div class="tal" v-show="profile_index === 0">
            <p>采用化学植筋法将钢筋植入混凝土结构，相当于在结构体内加上了预埋钢筋。多用于结构改造、接建、续建时新旧混凝土间钢筋锚固和采用加大截面法加固时新增钢筋的锚固。</p>
            <h4>工艺流程</h4>
            <p>弹线定位一钻孔+清孔+注胶→植筋→固化养护抗拔试验</p>
            <h4>适用范围</h4>
            <p>1、适用于普通混凝土强度等级大于等于C15 (末开裂混凝土)。</p>
            <p>2、广泛应用于建筑物新增梁、柱、板、墙的各种埋件及设备地脚螺栓的锚固、生根和固定。</p>
            <h4>技术特点</h4>
            <p>(1)施工温度范围较宽，从15°C-40°C。</p>
            <p>(2)无膨胀力锚固，对混凝土不产生挤压应力，适用于各种基材，在强度较差的混凝土上表现更佳。</p>
            <p>(3)安全方便(如喜利得螺栓药剂管特殊倒挂外形，保证垂直面吊挂施工时不坠落)。</p>
            <p>(4)间距，边距小，适用于空间狭小处。</p>
            <p>(5)安装操作便利，安装后能迅速固结.有较高的承载力。</p>
            <p>(6)适用于重载及各种震动负载。锚固厚度较大。</p>
            
            <p>裂缝的修补必须以结构可靠性鉴定为依据。通过现场调查、检测和分析，对裂缝的起因、属性和类别作出判断，并根据裂缝的发展程度、所处的位置与环境，检测裂缝可能造成的危害作出鉴定。据此，才能有针对性地选择适用的修补方法进行防治。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t1/t1.png" alt="">
              <img src="../static/images/tech/t1/t2.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 1">
            <h4>工艺流程</h4>
            <p>裂缝清理+粘贴注浆嘴和封闭裂缝一 +试漏- +配制注浆液 压力注浆一+次注浆一 +清理表面。</p>
            <h4>适用范围</h4>
            <p>(1)低压注浆法:适用于宽度为0.2-3.0mm的混凝土裂缝修补</p>
            <p>(2)高压注浆法:适用于处理大型结构贯穿性裂缝.大体积混凝土的蜂窝状严重缺陷以及深而蜿蜒的裂缝。</p>
            <p>(3)涂膜封闭法:适用于宽度小于0.2mm的微细裂缝的修补.也可用于混凝土外表面的装饰和防水处理，以及防止混凝土保护层的碳化和有害离子对混凝士的腐蚀。</p>
            <p>(4)开槽填补法:适用于结构允许开槽而宽度较大但数量不多的裂缝，如墩台或路面混凝士的裂缝。采取掺混凝土修补配制的聚合物修补砂浆修补混凝土裂缝，具有粘结力高，耐久性好等特点。</p>
            <h4>技术特点</h4>
            <p>(1)抵御诱发钢筋锈蚀的介质侵入，延长结构实际使用寿命;</p>
            <p>(2)通过对混凝土补强，保持构件的完整性;</p>
            <p>(3)恢复结构使用功能，提高其防水，抗渗能力;</p>
            <p>(4)消除裂缝对人们形成的心理压力;</p>
            <p>(5)改善结构外观</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t2/t1.png" alt="">
              <img src="../static/images/tech/t2/t2.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 2">
            <p>外粘型钢(角钢或槽钢)是将型钢与原构件采用改性环氧树脂灌注胶粘结，使两者能粘结成整体并共同受力工作的加固方法。适用于需要大幅度提高截面承载力和抗震能力的钢筋混凝土梁、构件的加固。</p>
            <h4>工艺流程</h4>
            <p>界面处理一→钢件制作-固定角钢- +焊接连接缀板 +钢板封边 +灌注胶配制-压力灌胶- +表面防护。</p>
            <h4>适用范围</h4>
            <p>外粘型钢加固技术主要适用于需要大幅度提高截面承载力和抗震能力的钢筋混凝土梁、柱构件的加固。</p>
            <h4>技术特点</h4>
            <p>(1)坚固耐用:结构的强度和刚度都能满足设计的要求。施工工艺精巧，质量优秀，工程合格率为100%。胶粘剂30年老化试验耐久性能满足要求。</p>
            <p>(2)施工快速:在保证粘钢加固结构质量的前提下，快速完成施工任务.</p>
            <p>(3)简洁轻巧:与其它加固方法比较，粘钢加固的施工，干净利落，不会导致建筑物内其他构件的连锁加固。</p>
            <p>(4)灵活多样:适应性很强，能够解决生产上和生活上各种有关问题。</p>
            <p>(5)经济合理:由于施工快，避免或减少工厂停产时间，节约加固材料经济效益很高。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t3/t1.png" alt="">
              <img src="../static/images/tech/t3/t2.png" alt="">
              <img src="../static/images/tech/t3/t3.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 3">
            <p>建筑结构胶将钢板(型钢)与混凝士紧密粘接，将加固件与被加固体合为一体，结构胶固化时间短，完全固化后即可以正常受力工作。施工简便、快捷、基本不增加被加固构件截面尺寸和重量。</p>
            <h4>工艺流程</h4>
            <p>砼表面处理-钢板表面处理-粘钢胶配制-钢板表面抹胶-粘贴钢板-加压固定-表面防护</p>
            <h4>适用范围</h4>
            <p>对构件截面缺乏受拉能力的部位、一般均可考虑用粘贴钢板加固;</p>
            <p>(1)受弯构件正截面受弯、斜截面受剪加固;</p>
            <p>(2)大偏心受压构件受拉侧加固;</p>
            <p>(3)受拉承载力加固。</p>
            <h4>技术特点</h4>
            <p>用粘贴钢板来加固混凝土构件，在国外已得到广泛的应用，国内也有不少实例，这是因为这种加固法具有以下优点:</p>
            <p>(1)不需要破坏被加固的原有结构物;</p>
            <p>(2)加固工程几乎不增大原结构物的尺寸;</p>
            <p>(3)能在短期内完成加固工程;</p>
            <p>(4)几乎可以不改变具有历史价值建筑的原有艺术特点。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t4/t1.png" alt="">
              <img src="../static/images/tech/t4/t2.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 4">
            <p>由于它具有工艺简单、施工经验丰富、受力可靠、加固费用经济等优点，很容易为人们所接受。</p>
            <h4>工艺流程</h4>
            <p>卸载支撑→新旧混凝土结合面凿毛处理一+植筋一 +绑扎钢筋- +模板安装一+ 浇筑混凝土+养护+拆模。</p>
            <h4>适用范围</h4>
            <p>增大截面加固法是种传统的加固方法 ，通过增大原结构构件的截面尺 寸并增配计算所需的钢筋与原结构共同受力.提高构件的强度和刚度，适用于梁、板、墙、柱构件的加固。</p>
            <h4>技术特点</h4>
            <p>增大截面加固法为传统的加固施工工艺，此方法主要适用于梁的刚度、抗弯或抗剪承载力不足且相差较大的情况或原柱的强度或刚度不足的加固。其主要特点有:</p>
            <p>(1)能充分发挥钢材和混凝士整体工作性能，加固效果好。</p>
            <p>(2)混凝土硬化时间长，需长期养护。</p>
            <p>(3)本方法不适用于素混凝士构件.原构件混凝士强度等级不应低于C10。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t5/t1.png" alt="">
              <img src="../static/images/tech/t5/t2.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 5">
            <h4>工艺流程</h4>
            <p>施工准备→混凝土表面处理一+ 配置并涂刷底层树脂- + 配制找平材料并对不平整处进行找平处理-→配制并涂刷浸渍树脂或粘贴树脂→粘贴碳纤维片材→表面防护</p>
            <h4>适用范围</h4>
            <p>本加固方法普遍适用于房屋建筑和一般构筑物中承受静力作用的一般受弯及受拉构件,对于受压构件、刚度不足构件、承受动荷载的结构构件均适合使用。对砌体结构、木结构和钢结构构件加固中也可以应用。</p>
            <h4>技术特点</h4>
            <p>(1)施工简便、快捷。使用碳纤维加固构件不需大型施工机械及周转材料，易于操作，施工周期短，经济性好。</p>
            <p>(2)抗酸碱盐类介质的腐蚀，应用面广。加固后能大提高结构的耐腐性耐久性，可以应用于各种工作环境的构件加固。</p>
            <p>(3)可以有效的封闭混凝土结构的裂缝,延长结构的使用寿命。</p>
            <p>(4)易于保持结构原状，基本不增加结构自重及截面尺寸</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t6/t1.png" alt="">
              <img src="../static/images/tech/t6/t2.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 6">
            <h4>技术特点</h4>
            <p>锚杆静压桩作为一种沉桩方法，是利用原基础底板或桩基承台及上部结构传递来的重量作为压桩反力，通过预埋的锚杆、反力架、千斤顶等压桩设备,将桩段从压桩孔处压入地基土中,然后将桩与基础底板或桩基承台连接形成整体，使新桩基与原建筑物基础共同承担荷载、提高加桩区域的承载力，达到阻止或减少沉降的目的。锚杆静压桩与其它基础加固或托换技术相比具有施工时无振动、无噪音、设备简单、操作方便、移动灵活、施工所需空间小等特点。利用锚杆静压桩新技术特殊工艺，充分利用其特点，改进桩型、桩材、压桩设备，将其应用到高层建筑中桩基加固和托换中, 取得了成功。为高层建筑病害工程桩加固提供了一种更方便、更合理、更有效、更经济的加固方法。</p>
            <h4>工艺流程</h4>
            <p>确定桩位孔及定位→锚杆加工制作及埋设→桩段养护及锚杆保护安装压桩反力架第一节桩就位、校正压桩→入土深度及压力值记录下节桩就位、校正→焊接接桩一压桩→待压桩到设计要求→最终深度及压桩力验收→拆除压比桩反力架→切割桩头+清孔(配制微膨胀早强混凝士)焊接交叉筋→封桩</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t7/t1.png" alt="">
              <img src="../static/images/tech/t7/t2.png" alt="">
              <img src="../static/images/tech/t7/t3.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 7">
            <p>(1)钢筋混凝土切割</p>
            <p>此技术不受环境条件限制，可以任意角度架设。如钢筋混凝土墙开门窗，楼板开孔,梁柱切割拆除、高架桥改造，水底切割拆除等多方面多角度安装施工，其锯头下有轨道安置，可以随意固定，还能单独架设，任意拉长距离，锯头工作面积大，可根据墙体的厚度任意调整锯片的大小，我公司拥有多种锯片，最大锯片直径是120cm,最大切割深度可达53cm,施工面广，操作灵活简便、低噪音、无震动、无粉尘污染对整体建筑结构不会有破坏，符合环保要求。</p>
            <h4>(2)钢筋混凝土增补</h4>
            <p>灌浆料以特种水泥作为结合剂，特选高强度材料为骨料，辅以高流态，微膨胀，防离析等物质配制而成。具有自流性好，快硬、早强、高强，无收缩，微膨胀:无毒、无害、不老化、对水质及周围环境无污染自密性,防锈等特点。</p>
            <h4>技术特点</h4>
            <p>(1)早强高强:浇后1天可达到C30强度、3天可达到C50强度、28天可达到C70强度，缩短工期。</p>
            <p>(2)自流态:现场只需加水搅拌，直接灌入，浆料自流，施工免振，确保无振动、长距离的灌浆施工。</p>
            <p>(3)微膨胀:浇注体长期使用无收缩，保证设备与基础紧密接触，基础与基础之间无收缩，适当的膨胀压力可确保设备长期安全运行。</p>
            <h4>适用范围</h4>
            <p>路桥工程的加固、钢结构与地基接口、设备基础的二次灌浆、栽埋钢筋、混凝土结构加固和改造、旧混凝土结构的裂缝治理、轨道及钢结构安装、静力压桩工程封桩,墙体结构的加厚及渗漏水的修复，各种基础工程的塌陷灌浆以及各种抢修工程等。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t8/t1.png" alt="">
              <img src="../static/images/tech/t8/t2.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 8">
            <p>已有建筑产生了倾斜要进行纠偏时，纠偏工作的程序为:</p>
            <p>(1)观测倾斜是否仍在发展，记录下每日倾斜的发展情况。</p>
            <p>(2)根据地质条件,相邻建筑，地下管线、洞穴分布，建筑本身的上部结构现状与荷载分布等资料，分析倾斜原因。</p>
            <p>(3)提出纠偏方案并论证其可行性。在选择方案时宜优先选择迫降纠偏，但不可行时再选用顶升纠偏，因为迫降纠偏比较容易实施。</p>
            <p>(4)对上部结构的已有破损进行调查与评价，提出加固方案，当对纠偏结构有不利影响时，应在纠偏之前先对结构进行加固。</p>
            <p>(5)纠偏工程设计包括选择该方法的依据，纠偏施工的结构内力分析，纠偏方法与步骤，检测手段与安全措施等。</p>
            <p>(6) 纠偏的施工。 纠偏的方法分为两大类 ，即迫降纠偏和顶升纠偏。 迫降纠偏是将下沉的建筑物一 侧令其产生缓缓的下沉(迫降)，直到倾斜得到纠正。顶升纠偏则相反，是用抬升的办法使下沉多的一侧比下沉少的一侧升得多些，最后达到扶正的目的。</p>
            <h4>建筑物平移的技术原理</h4>
            <p>整体平移的基本原理是将房屋整体托换到移动位置上，用千斤顶施加推力或拉力，使建筑物和滚顶装置在轨道上行走，到房屋新位置后进行就位连接。拖换有两种思路，一是将房屋连同基础整体托换;另一种是在基础以上部位切断，将上部结构移到新基础上。</p>
            <h4>建筑物平移的主要工艺流程:</h4>
            <p>(1)过渡段地基处理及新基础施工。</p>
            <p>(2)制作下轨道梁并安放滚动(滑动)装置。</p>
            <p>(3)施工上加固梁系以及柱托换节点;切断柱和墙体，使建筑物支撑在移动装置上。同时切断水、电管线。</p>
            <p>(4)施工(安放)反力支座装置。</p>
            <p>(5)施加水平推力(或拉力)，建筑物在轨道上移动。</p>
            <p>(6)就位连接，恢复。</p>
            <p>建筑物的平移中的关键是托换技术(将建筑物荷载转换到滚动。移动装置上)、同步移动施力系统、柱切割技术和就位连接技术。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t9/t1.png" alt="">
              <img src="../static/images/tech/t9/t2.png" alt="">
              <img src="../static/images/tech/t9/t3.png" alt="">
            </div>
          </div>
          <div class="tal" v-show="profile_index === 9">
            <h4>工艺流程</h4>
            <p>定位放线+ 基础开挖→墙面打穿墙孔+ 钢筋网片安装+ 拉结筋安装一通过楼 板处集中配筋扎接基层湿润+ 砂浆分层抹制→养护</p>
            <h4>技术特点</h4>
            <p>(1)进厂的钢筋、砂浆必须严格控制质量，并进行现场取样试验,如不合格必须立即退场。</p>
            <p>(2)定位放线必须准确，必须根据施工现场的原有构件尺寸及图纸进行放线，防止因定位的误差影响结构加固的施工质量。</p>
            <p>(3)确定孔位时,必须综合考虑新增钢筋网片绑扎的要求，杜绝废孔情况的出现。</p>
            <p>(4)钢筋网片安装时，必须严格控制与原结构墙净间距，及拉结筋间距和布置方式,确保工程质量。</p>
            <p>(5)钢筋网外保护层厚度>10mm。</p>
            <p>(6)现场需做好成品保护工作。</p>
            <h4>适用范围</h4>
            <p>适用于:对砖砌墙体裂缝、风化墙体严重及墙体砌体强度不满足规范要求的墙体。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t10/t1.png" alt="">
            </div>
          </div>

          <div class="tal" v-show="profile_index === 10">
            <h4>工艺流程</h4>
            <p>搭设施工平台→设置支撑千斤顶的平台(台帽及盖梁顶面上)→安装千斤顶及油泵→安装监控测设施-→梁体顶升→更换支座及垫石→卸载及梁板回落复位→拆除千斤顶及施工平台→安装伸缩缝-接顺引道路面。</p>
            <h4>技术特点</h4>
            <p>施工时对周围的干扰少不需要征地拆迁或占用大量的施I场地能缩短施工周期避免重复投资，具有良好的社会和经济效应。</p>
            <h4>适用范围</h4>
            <p>在梁净空不足的航道桥梁、跨线立交桥梁以及桥梁支座的更换中运用。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t11/t1.png" alt="">
              <img src="../static/images/tech/t11/t2.png" alt="">
            </div>
          </div>

          <div class="tal" v-show="profile_index === 11">
            <h4>工艺流程</h4>
            <p>场地平整→桩位放样→修建排污和灰浆拌制系统→钻机就位→引孔钻进→下喷射管喷浆材料及制浆→喷射提升→回灌→纪录</p>
            <h4>技术特点</h4>
            <p>可提高地基的抗剪强度;能利用小直径钻孔旋喷成比孔大8 ~ 10倍的大直径固结体;可用于已有建筑物地基加固而不扰动附近土体;施工噪声低，振动小;可用于任何软弱士层，可控制加固范围;设备较简单、轻便，机械化程度高;料源广阔，施工简便、粉土、砂、湿陷性黄土、人工填土及碎石土等的地基加固。</p>
            <h4>适用范围</h4>
            <p>既有建筑和新建筑的地基处理，深基坑侧壁挡土或挡水，基坑底部加固防止管涌与隆起，坝的加固与防水帷幕等工程。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t12/t1.png" alt="">
              <img src="../static/images/tech/t12/t2.png" alt="">
              <img src="../static/images/tech/t12/t3.png" alt="">
            </div>
          </div>


          <div class="tal" v-show="profile_index === 12">
            <h4>工艺流程</h4>
            <p>定位、放样→切槽→钻锚栓孔+清孔基面清理、拉毛、涂找平胶-植化学锚栓→支座垫板安装→碳板下料、锚具安装→碳纤维板涂胶、安装→张拉机具安装→张拉碳纤维板+碳纤维板粘贴、安装压紧条→锚固防护</p>
            <h4>技术特点</h4>
            <p>1、高强高效:抗拉强度是普通钢材的数倍以上，弹性模量优于钢材，具有优异的抗蠕变性能，耐腐蚀性和抗震性。</p>
            <p>2、重量轻、柔韧性好，碳纤维比强度高、质量仅为钢材的1/5，有较高的韧性,可以盘卷，能以较大长度供应而无须搭接。</p>
            <p>3、施工便捷,施工质量易保证:材料不用预加工，工序方便，板材允许交叉。</p>
            <p>4、良好的耐久性和耐腐蚀性:耐酸、碱、盐及大气环境的腐蚀，不须定期维护。</p>
            <p>5、经济效益高:同等强设计。其主要的应用领域为混凝土梁抗弯、抗剪加固，混凝士楼板、桥板加固补强、砖砌体墙，剪刀墙补强，桥墩、桩等加固补强，烟囱、隧道、水池、混凝士管等加固补墙，该技术适用领域相当广泛。</p>
            <div class="techImg layoutFlex">
              <img src="../static/images/tech/t13/t1.png" alt="">
              <img src="../static/images/tech/t13/t2.png" alt="">
              <img src="../static/images/tech/t13/t3.png" alt="">
              <!-- <img src="../static/images/tech/t13/t4.png" alt=""> -->
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
      pageSlide: [
        "种植钢筋锚固",
        "裂缝修补加固",
        "外粘型钢",
        "粘贴钢板加固",
        "增大截面加固",
        "粘贴碳纤维加固",
        "锚杆桩加固",
        "钢筋混凝土切割与增补",
        "建筑物的纠偏平移",
        "墙体加固",
        "桥梁顶升施工",
        "高压旋喷桩",
        "碳纤维预应力板"
      ],
      profile_index: 0
    };
  },
  create() {},
  mounted() {
    this.profile_index = Number(this.$route.query.index)
      ? Number(this.$route.query.index)
      : 0;
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
  .techImg
    width 100%
    img
      height auto
      width 5.7rem
      height 5rem
      margin-right 0.5rem
</style>
