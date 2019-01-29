<template>
  <div class="home">
    <Header/>
    <Nav/>
    <router-view></router-view>
    <Carousel/>
    <Content/>
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
export default {
  name: "home",
  components: {
    Header,
    Nav,
    Carousel,
    Content,
    Footer,
    Sidebar
  },
  create() {}
};
</script>
