<template>
  <div id="app">
    <!-- 0 -->
    <!-- 1 -->
    <!-- 2 -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <Header/>
    <Nav/> -->
    <router-view />
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->

    <!-- 3 -->
    <!-- 4 -->
  </div>
</template>
<style lang="stylus">
* {
  padding: 0px;
  margin: 0px;
}

html, body {
  font-size: 44px !important;
}

body {
  background: #fafafa;
}

a {
  text-decoration: none;
}

.color {
  color: #0090cf;
}

.fw {
  font-weight: bold;
}

.hover {
  cursor: pointer;
}

.hover:hover {
  color: #0090cf;
}

li {
  list-style: none;
}

.tal {
  text-align: left;
}

.tac {
  text-align: center;
}

.tar {
  text-align: right;
}

.fl {
  float: left;
  display: inline;
}

.fr {
  float: right;
  ddisplay: inline;
}

.hide {
  display: none;
}

.show {
  display: block;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.layoutFlex {
  display: -webkit-flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}

.ml3 {
  margin-left: 0.3rem;
}

.ml4 {
  margin-left: 0.4rem;
}

.ml5 {
  margin-left: 0.5rem;
}

.ml6 {
  margin-left: 0.6rem;
}

.ml7 {
  margin-left: 0.7rem;
}

.ml10 {
  margin-left: 1rem;
}

.ml15 {
  margin-left: 1.5rem;
}

.ml20 {
  margin-left: 2rem;
}

.ml25 {
  margin-left: 2.5rem;
}

.ml30 {
  margin-left: 3rem;
}

.mr3 {
  margin-right: 0.3rem;
}

.mr4 {
  margin-right: 0.4rem;
}

.mr5 {
  margin-right: 0.5rem;
}

.mr6 {
  margin-right: 0.6rem;
}

.mr7 {
  margin-right: 0.7rem;
}

.mr10 {
  margin-right: 1rem;
}

.mr15 {
  margin-right: 1.5rem;
}

.mr20 {
  margin-right: 2rem;
}

.mr25 {
  margin-right: 2.5rem;
}

.mr30 {
  margin-right: 3rem;
}

.mt1 {
  margin-top: 0.1rem;
}

.mt2 {
  margin-top: 0.2rem;
}

.mt3 {
  margin-top: 0.3rem;
}

.mt4 {
  margin-top: 0.4rem;
}

.mt5 {
  margin-top: 0.5rem;
}

.mt6 {
  margin-top: 0.6rem;
}

.mt7 {
  margin-top: 0.7rem;
}

.mt10 {
  margin-top: 1rem;
}

.mt15 {
  margin-top: 1.5rem;
}

.mt20 {
  margin-top: 2rem;
}

.mt25 {
  margin-top: 2.5rem;
}

.mt30 {
  margin-top: 3rem;
}

.mb2 {
  margin-bottom: 0.2rem;
}

.mb3 {
  margin-bottom: 0.3rem;
}

.mb4 {
  margin-bottom: 0.4rem;
}

.mb5 {
  margin-bottom: 0.5rem;
}

.mb6 {
  margin-bottom: 0.6rem;
}

.mb7 {
  margin-bottom: 0.7rem;
}

.mb10 {
  margin-bottom: 1rem;
}

.mb15 {
  margin-bottom: 1.5rem;
}

.mb20 {
  margin-bottom: 2rem;
}

.mb25 {
  margin-bottom: 2.5rem;
}

.mb30 {
  margin-bottom: 3rem;
}

.mb60 {
  margin-bottom: 6rem;
}

.ft3 {
  font-size: 0.3rem !important;
}

.ft4 {
  font-size: 0.4rem !important;
}

.ft5 {
  font-size: 0.5rem !important;
}

.ft6 {
  font-size: 0.6rem !important;
}

.ft7 {
  font-size: 0.7rem !important;
}

.ft10 {
  font-size: 1rem !important;
}

.ft15 {
  font-size: 1.5rem !important;
}

.ft20 {
  font-size: 2rem !important;
}

.ft25 {
  font-size: 2.5rem !important;
}

.ft30 {
  font-size: 3rem !important;
}

.gray9 {
  color: #999 !important;
}

img {
  display: inline-block;
  vertical-align: middle;
}

.common {
  width: 25rem;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.route {
  font-size: 0.35rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #CECECE;

  span {
    cursor: pointer;

    &:hover {
      color: #066c98;
    }
  }
}

.arrow1 {
  display: block;
  width: 0;
  height: 0;
  border-width: 0.08rem 0 0.08rem 0.12rem;
  border-style: solid;
  border-color: transparent transparent transparent #0090cf;
  position: relative;
  top: 0px;
  left: 0px;
  margin-right: 0.3rem;
}
</style>
