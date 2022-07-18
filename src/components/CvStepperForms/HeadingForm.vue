<template>
  <div>
    <div class="form__title">
      <h3>What's the best way for employers to contact you?</h3>
      <p>We suggest including an email and phone number.</p>
    </div>
    <b-form @submit.prevent="submitForm" class="mt-5">
      <div class="row">
        <b-form-group
          id="input-group-1"
          label="Your first name"
          label-for="input-first-name"
          class="col-sm-12 col-md-6"
        >
          <b-form-input
            id="input-first-name"
            v-model.lazy="headingForm.firstName"
            placeholder="e.g. Gustavo"
            class="rounded-0"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Your last name"
          label-for="input-last-name"
          class="col-sm-12 col-md-6"
        >
          <b-form-input
            id="input-last-name"
            v-model.lazy="headingForm.lastName"
            placeholder="e.g. Sierra"
            class="rounded-0"
            required
          ></b-form-input>
        </b-form-group>
      </div>

      <b-form-group
        id="input-group-2"
        label="Your profession"
        label-for="input-profession"
      >
        <b-form-input
          id="input-profession"
          v-model.lazy="headingForm.profession"
          class="rounded-0"
          placeholder="e.g. Senior Frontend Developer"
          required
        ></b-form-input>
      </b-form-group>

      <div class="row">
        <b-form-group
          id="input-group-city"
          label="City"
          label-for="input-city"
          class="col-md-6 col-sm-12"
        >
          <b-form-input
            id="input-city"
            v-model.lazy="headingForm.city"
            class="rounded-0"
            placeholder="e.g. Geneva"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Country"
          label-for="input-country"
          class="col-md-3 col-sm-12"
        >
          <b-form-input
            id="input-country"
            v-model.lazy="headingForm.country"
            class="rounded-0"
            placeholder="e.g. Switzerland"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Postal Code"
          label-for="input-zip"
          class="col-md-3 col-sm-12"
        >
          <b-form-input
            id="input-zip"
            class="rounded-0"
            v-model.lazy="headingForm.zip"
            placeholder="e.g. 80331"
            required
          ></b-form-input>
        </b-form-group>
      </div>

      <div class="row">
        <b-form-group
          id="input-group-2"
          label="Phone"
          label-for="input-phone"
          class="col-md-6 col-sm-12"
        >
          <b-form-input
            id="input-phone"
            v-model="headingForm.phone"
            placeholder="e.g. +48 123 456 789"
            class="rounded-0"
            required
            type="tel"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Email"
          label-for="input-email"
          class="col-md-6 col-sm-12"
        >
          <b-form-input
            id="input-email"
            v-model="headingForm.email"
            placeholder="e.g. wlad@sample.com"
            class="rounded-0"
            required
          ></b-form-input>
        </b-form-group>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  inject: ["headingForm"],
  emits: ["setHeadingForm"],
  data() {
    return {
      headingForm: Object.assign(this.headingForm, {}),
      timeout: null,
    };
  },
  watch: {
    headingForm: {
      handler(val) {
        this.$emit("setHeadingForm", val);
      },
      deep: true,
    },
  },
};
</script>
