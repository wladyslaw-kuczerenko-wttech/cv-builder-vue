import Vue from "vue";
import VueRouter from "vue-router";
import CreateCV from "@/pages/CreateCv.vue";
import WorkHistoryForm from "@/components/CvStepperForms/WorkHistoryForm.vue";
import HeadingForm from "@/components/CvStepperForms/HeadingForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/create",
  },
  {
    path: "/create",
    component: CreateCV,
    children: [
      {
        path: "",
        component: HeadingForm,
      },
      {
        path: "whistory",
        component: WorkHistoryForm,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
