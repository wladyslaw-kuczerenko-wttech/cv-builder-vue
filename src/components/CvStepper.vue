<template>
  <div class="stepper" v-if="steps">
    <router-link
      v-for="(step, idx) in steps"
      :to="step.link"
      :key="step.name"
      :class="{ active: idx + 1 <= activeStep }"
    >
      <span class="stepper-icon">{{ idx + 1 }}</span>
      <span>{{ step.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
a {
  background-color: white;
  z-index: 2;
  color: #21252946;
  position: relative;
  pointer-events: none;
  cursor: default;

  &:hover {
    text-decoration: none;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }

  &:not(:last-child)::after {
    content: "";
    background-color: #21252946;
    height: 2px;
    width: 15px;
    position: absolute;
    top: 50%;
    right: -22.5px;
  }
}

a.active {
  color: #212529;
  pointer-events: auto;
  cursor: pointer;
  .stepper-icon {
    background-color: #212529;
  }
  &:not(:last-child)::after {
    background-color: #212529;
  }
}

.stepper {
  justify-content: flex-end;
  display: flex;

  position: relative;
}

.stepper-icon {
  color: white;
  font-size: 0.875em;
  border-radius: 50%;
  justify-content: center;
  width: 1.5em;
  display: inline-flex;
  height: 1.5em;
  margin-right: 7.5px;
  background-color: #21252946;
}
</style>

<script>
export default {
  inject: ["steps", "activeStep"],
};
</script>
