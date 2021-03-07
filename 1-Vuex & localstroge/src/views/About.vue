<template>
  <div class="about" >
    <h1>{{image}}</h1>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState([
      'image'
    ])
  },
 
}
</script>
