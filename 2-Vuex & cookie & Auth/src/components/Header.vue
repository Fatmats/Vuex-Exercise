<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <a class="navbar-brand" href="#">Auth İşlemleri</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" tag="li">
          <router-link class="nav-item" to="home">
            <a class="nav-link" href="#">Anasayfa</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item" to="about">
            <a class="nav-link" href="#">Hakkımda</a>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click="actionLogout" class="nav-link" href="#">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";


export default {
  methods: {
    ...mapActions(["actionLogout"])
  },
  computed: {
    logoutClass() {
      return {
        "d-none": !this.$store.getters.isAuth,
      };
    },
  },
};
</script>
