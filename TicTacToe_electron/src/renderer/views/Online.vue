<template>
  <div >
    <online></online>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import VueSocketio from "vue-socket.io"
import Online from "@/components/Online";
export default {
  name: "onlines",
  components: {
    Online
  },
  created () {
    Vue.use(VueSocketio, 'http://localhost:8000')
    this.$socket.connect()
  },
};
</script>
