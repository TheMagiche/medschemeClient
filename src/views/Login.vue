<template>
  <div>
    <v-container class="my-5">
      <h1 class="subheading grey--text">Login / Register</h1>
      
       <v-form
      ref="form"
    >

      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
    <v-text-field
        v-model="password"
        label="Password"
        required
      ></v-text-field>
      <v-btn
        color="error"
        class="mr-4"
        @click="authenticate"
      >
      Login
      </v-btn>

      <v-btn
        color="warning"
        @click="register"
      >
       Register
      </v-btn>
    </v-form>
   </v-container>


  </div>
</template>
<script>
import { EventBus } from '../store/utils'
export default {
  data () {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    authenticate () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(() => this.$router.push('/'))
    },
    register () {
      this.$store.dispatch('register', { email: this.email, password: this.password })
        .then(() => this.$router.push('/'))
    }
  },
  mounted () {
    EventBus.$on('failedRegistering', (msg) => {
      this.errorMsg = msg
    })
    EventBus.$on('failedAuthentication', (msg) => {
      this.errorMsg = msg
    })
  },
  beforeDestroy () {
    EventBus.$off('failedRegistering')
    EventBus.$off('failedAuthentication')
  }
}
</script>