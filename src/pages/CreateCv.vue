<template>
  <div>
    <the-header></the-header>
    <main>
      <b-container>
        <div class="row">
          <div class="col-md-9 col-sm-12">
            <cv-form @setHeadingForm="setHeadingForm"></cv-form>
            <cv-actions class="actions"></cv-actions>
          </div>
          <div class="col-md-3 col-sm-12">
            <cv-result></cv-result>
          </div>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import CvForm from "../components/CvForm.vue";
import CvActions from "../components/CvActions.vue";
import CvResult from "../components/CvResult.vue";
import TheHeader from "@/layouts/TheHeader.vue";
import { computed } from "vue";
export default {
  components: { CvForm, CvActions, CvResult, TheHeader },
  data() {
    return {
      headingForm: {
        firstName: "",
        lastName: "",
        profession: "",
        city: "",
        country: "",
        zip: "",
        phone: "",
        email: "",
      },
      activeStep: 1,
      steps: [
        {
          name: "Heading",
          link: "/heading",
        },
        {
          name: "Work history",
          link: "/work",
        },
        {
          name: "Education",
          link: "/works",
        },
      ],
    };
  },
  provide() {
    return {
      headingForm: this.headingForm,
      activeStep: computed(() => this.activeStep),
      steps: this.steps,
      goBackPage: () => this.goBackPage(),
      goNextPage: () => this.goNextPage(),
    };
  },
  methods: {
    setHeadingForm(newHeadingForm) {
      this.headingForm = newHeadingForm;
    },
    goBackPage() {
      if (this.activeStep === 1) return;
      else {
        this.activeStep -= 1;
      }
    },
    goNextPage() {
      if (this.activeStep === this.steps.length) return;
      else {
        this.activeStep += 1;
      }
    },

    review() {
      console.log("Opened review");
    },
  },
};
</script>

<style scoped>
.actions {
  margin-top: 80px;
}
main {
  margin-top: 50px;
}
</style>
