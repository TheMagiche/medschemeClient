<template>
  <div class="team">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Team</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-lg-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="image" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <!-- <v-btn flat class="text-lg-center ma-3" color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>message</span>
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Mark Chege",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        {
          name: "Simon Kibiru",
          role: "Documentation",
          avatar: "/avatar-2.png"
        },
        {
          name: "Alphan Kihara",
          role: "Documentation",
          avatar: "/avatar-5.png"
        },
        {
          name: "Alex Sagwe",
          role: "Documentation",
          avatar: "/avatar-4.png"
        },
        { name: "Mercy Wambui", role: "Research", avatar: "/avatar-3.png" }
      ]
    };
  }
};
</script>
