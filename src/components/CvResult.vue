<template>
  <div class="result-container">
    <div class="result row mx-0">
      <div class="result__sidebar col-md-3">
        <div class="result-contact__title">
          <h3>{{ getName || "Your name" }}</h3>
          <span>{{ headingForm.profession || "Your profession" }}</span>
        </div>
        <div class="result-contact-body">
          <h4>Contact</h4>
        </div>
      </div>
      <div class="result__main col-md-9"></div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["headingForm"],
  computed: {
    getName() {
      if (
        this.headingForm.firstName.trim() === "" ||
        this.headingForm.lastName.trim() === ""
      )
        return false;

      return `${this.headingForm.firstName} ${this.headingForm.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  overflow: hidden;
}

.result {
  width: 1920px;

  transform: scale(0.38);
  transform-origin: top left;
}
</style>
