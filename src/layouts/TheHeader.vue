<template>
  <header class="header">
    <b-container class="d-flex justify-content-between">
      <h2 class="header__title">Create your first CV!</h2>
      <cv-stepper class="d-flex align-items-center"></cv-stepper>
    </b-container>
  </header>
</template>

<script>
import CvStepper from "@/components/CvStepper.vue";
export default {
  components: { CvStepper },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 15px 0;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 16%);

  &__title {
    margin: 0;
  }
}
</style>
