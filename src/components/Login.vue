<template>
  <b-container class="modal-containers">
    <b-row class="login ml-auto mr-auto" >
      <b-col md="12">
        <b-row class="text-center"><b-col><h1 style="font-weight: 800">Login</h1></b-col></b-row>
        <b-row class="text-center"><b-col><img height="170" src="../assets/logo_iqueue.png"/></b-col></b-row>
      </b-col>
      <b-col class="pl-5 pr-5" style="top: -1.2rem;">
        <b-form @submit.prevent="Login()">
          <b-form-group
            label="Email address"
            label-for="email"
            label-class="required"
          >
            <span class="icons-forms"><i class="far fa-envelope fa-lg"></i></span>
            <b-form-input
              @change="$v.login.email.$touch()"
              autocomplete="off"
              id="email"
              v-model="login.email"
              type="email"
              placeholder="exemplo@email.com"
            ></b-form-input>
            <p
              class="erros-form"
              v-if="$v.login.email.$error">
              O campo email é obrigatório.
            </p>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="password"
            label-class="required"
          >
            <span class="icons-forms"><i class="fas fa-lock fa-lg"></i></span>
            <b-form-input
              @change="$v.login.password.$touch()"
              autocomplete="off"
              id="password"
              v-model="login.password"
              type="password"
              placeholder="Senha"
            ></b-form-input>
            <p
              class="erros-form"
              v-if="$v.login.password.$error">
              O campo senha é obrigatório.
            </p>
          </b-form-group>
          <b-row class="text-right">
            <b-col>
              <router-link to="#">
                <span
                  style="color: rgb(118, 118, 118); background-color: #fff;">
                  <i class="fas fa-key fa-lg"></i>
                  <span style="color: #D65252">
                    Esqueci minha senha
                  </span>
                </span>
              </router-link>
            </b-col>
          </b-row>
          <b-row class="pt-2 text-center">
            <b-col>
              <b-button
                type="submit"
                class="logar-button"
                variant="outline-success">
                LOGAR
              </b-button>
            </b-col>
          </b-row>
          <b-row class="text-center mt-4">
            <b-col>
              <h6 style="color: rgb(118, 118, 118);">
                Ou entre usando
              </h6>
            </b-col>
          </b-row>
          <b-row class="pt-1 text-center">
            <b-col>
              <router-link to="#">
                <img height="40" class="rounded-pill social-icons" src="../assets/google.png" />
              </router-link>
            </b-col>
            <b-col>
              <router-link to="#">
                <img height="45" class="rounded-pill social-icons facebook-icon" src="../assets/facebook.png" />
              </router-link>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      login: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  validations: {
    login: {
      email: { required },
      password: { required, minLength: minLength(8) }
    }
  },

  methods: {
    Login () {
      this.checkForm()
      if (!this.$v.login.$error) {
        console.log('Usuário logado!')
      }
    },

    checkForm () {
      this.$v.$touch()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  border-radius: 10px;
  background-color: #fff;
  width: 42%;
  padding-top: 2%;
  padding-bottom: 0.5%;
  min-height: 93.6vh;
  position: relative;
  bottom: 18px !important;
  border: 1px solid #f8f8f8;
  /* box-shadow: 0px 5px 10px 0px rgba(153, 153, 153, 0.3); */
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px;
}

span {
  font-style: italic;
}

/* Changes for Logar Button */
.logar-button {
  padding: 0 20px !important;
  width: 100%;
  height: 45px;
  font-size: 1.5rem;
}

.social-icons:hover {
  height: 42px !important;
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
}

.facebook-icon {
  padding: 0 !important;
}

.facebook-icon:hover {
  height: 46.5px !important;
}

</style>
