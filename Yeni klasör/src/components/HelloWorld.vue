<template >
  <div class="hello">
    <h1 class="h1">{{ text }}</h1>
    <!-- <input type="text" v-model="image" /> -->
    <input type="text" v-model="text" />
 
<input type="text" v-model="image">
    <button @click="isimDegistir">Resmi Değiştir</button>
    <!-- <input type="file" value="image" @change="onChange($event)" /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      text: "Ayşe",
      image: "",
    };
  },
  computed: {
    ...mapState(["img"]),
  
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
    },
    ...mapActions(["uptededİmage"]),

    isimDegistir() {
      this.uptededİmage(this.image);
    },
  },
 }
</script>

