<template>
  <div class="disease">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Diseases</h1>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name of disease</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in disease_list" :key="item">
              <td>{{ item }}</td>
            </tr>
            <!-- <tr>{{disease_list}}</tr> -->
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // disease_list: []
      // d_list: ["malaria", "hepatitis"]
    };
  },
  computed: {
    disease_list: function() {
      return this.$store.getters.patients_disease_list;
    }
  },
  methods: {
    getDiseases: function() {
      this.$store
        .dispatch("get_all_diseases")
        .then()
        .catch();
    }
  },

  mounted() {
    this.getDiseases();
  }
};
</script>
<style></style>
