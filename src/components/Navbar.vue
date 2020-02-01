<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Med</span>
        <span>Scheme</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in links" :key="item.text">
        <v-btn text router :to="item.route">{{ item.text }}</v-btn>
      </v-toolbar-items>

      <!-- <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
      </template>-->
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Medscheme</v-list-item-title>
          <v-list-item-subtitle>Expert Medical System</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in links" :key="item.text" router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <v-list dense nav>
        <v-list-item @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>mdi-arrow-collapse-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Close</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "mdi-view-dashboard-variant",
          text: "Dashboard",
          route: "/"
        },
        {
          icon: "mdi-account",
          text: "Team",
          route: "/team"
        },
        {
          icon: "mdi-medical-bag",
          text: "Disease",
          route: "/diseases"
        }
      ]
    };
  }
};
</script>
<style></style>
