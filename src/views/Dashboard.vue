<template>
  <div id="dashboard">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Dashboard</h1>

      <div class="imagecontainer text-lg-center">
        <img src="/baymax1.png" alt="image1" height="200px" />
        <h3 class="subheading text-lg-center grey--text">Welcome To Medscheme</h3>
        <h4 class="subheading text-lg-center grey--text">Lets see what ails you</h4>

        <v-col cols="12">
          <v-combobox v-model="pat_symptoms" label="Enter symptoms"></v-combobox>
        </v-col>
        <v-btn>send</v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pat_symptoms: [""]
    };
  },
  methods: {},
  created() {}
};
</script>
<style></style>
