<template>
  <div class="Carousel">
    <div class="Carousel-c">
      <div class="swiper_content">
        <swiper :options="swiperOption_1">
            <swiper-slide>
                <img src="http://www.txcjz.com/uploads/allimg/150326/150408/4-15040PI024U8.jpg" alt="">
            </swiper-slide>
            <!-- <swiper-slide>
                <img src="http://www.txcjz.com/uploads/allimg/150326/150408/4-15040PHU4917.jpg" alt="">
            </swiper-slide> -->
            <swiper-slide>
                <img src="../static/images/timg1.jpg" width="1440" height="460" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- <video src="@/static/video/video.mp4" autoplay="autoplay" loop="loop" muted="muted" width="1200px" height="200px"></video> -->
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Carousel",
  data() {
    return {
      title: "购物车",
      swiperOption_1: {
        autoplay: {
          delay: 4000, //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
          stopOnLastSlide: false, //当切换到最后一个slide时，是否停止自动切换。
          disableOnInteraction: false //用户操作swiper之后，是否禁止autoplay
        },
        loop: true, //轮播循环
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          clickable: true //是否可点击
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
