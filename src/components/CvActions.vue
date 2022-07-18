<template>
  <div class="row justify-content-between mx-0 align-start">
    <b-button
      class="col-sm-6 col-md-3"
      @click="goBackPage()"
      size="lg"
      variant="outline-primary"
      >BACK</b-button
    >
    <b-button
      class="col-sm-6 col-md-3"
      @click="goNextPage()"
      size="lg"
      variant="danger"
      >NEXT</b-button
    >
  </div>
</template>

<script>
export default {
  inject: ["goBackPage", "goNextPage"],
};
</script>
