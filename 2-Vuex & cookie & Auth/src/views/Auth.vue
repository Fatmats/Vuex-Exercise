<template>
  <div class="container">
    <div class="row align-items-center vh-100">
      <div
        class="col-md-4 offset-4 card card-primary p-3 border"
        :class="{ 'border-primary': isUser, 'border-success': !isUser }"
      >
        <h3
          :class="{ 'text-primary': isUser, 'text-success': !isUser }"
          class="text-center mb-3 mt-3"
        >
          Vue.js | Auth
        </h3>
        <hr />
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              placeholder="E-posta adresinizi giriniz"
            />
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Şifreniz..."
            />
          </div>
          <div class="button-container d-flex flex-column align-items-center">
            <button
              type="submit"
              :class="{ 'btn-primary': isUser, 'btn-success': !isUser }"
              class="btn btn-block mb-2"
            >
              {{ isUser ? "Giriş Yap" : "Kayıt Ol" }}
            </button>
            <a
              href="#"
              @click.prevent="isUser = !isUser"
              class="text-secondary"
            >
              {{ isUser ? "Üye değilim" : "Üyeliğim var" }}
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      isUser: false,
    };
  },
  methods: {
    ...mapActions(["actionLogin"]),
    async onSubmit() {
      await this.actionLogin({ ...this.user, isUser: this.isUser }).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
