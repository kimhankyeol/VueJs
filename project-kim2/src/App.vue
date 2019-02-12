<template>
<v-contatiner>
  <v-layout>
    <v-flex xs12>
      <User></User>
    </v-flex>
  </v-layout>
</v-contatiner>
</template>

<script>
import User from './components/User.vue'
export default {
  components:{
    User
  }
}
</script>
