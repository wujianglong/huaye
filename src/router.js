import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Profile from "./views/profile.vue";
// import License from "./views/license.vue";
// import Expert from "./views/expert.vue";
// import Team from "./views/team.vue";
// import Technology from "./views/technology.vue";
// import Case from "./views/case.vue";
// import CaseList from "./views/caseList.vue";
// import tradeInfo from "./views/tradeInfo.vue";
// import companyInfo from "./views/companyInfo.vue";
// import map from "./views/map.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/profile.vue"),
    },
    {
      path: "/license",
      name: "license",
      component: () => import("./views/license.vue"),
    },
    {
      path: "/expert",
      name: "expert",
      component: () => import("./views/expert.vue")
    },
    {
      path: "/case",
      name: "case",
      component: () => import("./views/case.vue")
    },
    {
      path: "/caseList",
      name: "caseList",
      component: () => import("./views/caseList.vue")
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/team.vue")
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("./views/technology.vue")
    },
    {
      path: "/tradeInfo",
      name: "tradeInfo",
      component: () => import("./views/tradeInfo.vue")
    },
    {
      path: "/companyInfo",
      name: "companyInfo",
      component: () => import("./views/companyInfo.vue")
    },
    {
      path: "/map",
      name: "map",
      component: () => import("./views/map.vue")
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
