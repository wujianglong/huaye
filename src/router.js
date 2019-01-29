import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/profile.vue";
import License from "./views/license.vue";
import Expert from "./views/expert.vue";
import Team from "./views/team.vue";
import Technology from "./views/technology.vue";
import Case from "./views/case.vue";
import CaseList from "./views/caseList.vue";
import tradeInfo from "./views/tradeInfo.vue";
import companyInfo from "./views/companyInfo.vue";
import map from "./views/map.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index",
      name: "index",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/license",
      name: "license",
      component: License
    },
    {
      path: "/expert",
      name: "expert",
      component: Expert
    },
    {
      path: "/case",
      name: "case",
      component: Case
    },
    {
      path: "/caseList",
      name: "caseList",
      component: CaseList
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/technology",
      name: "technology",
      component: Technology
    },
    {
      path: "/tradeInfo",
      name: "tradeInfo",
      component: tradeInfo
    },
    {
      path: "/companyInfo",
      name: "companyInfo",
      component: companyInfo
    },
    {
      path: "/map",
      name: "map",
      component: map
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
