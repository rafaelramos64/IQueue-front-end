<template>
  <b-container class="modal-containers">
    <b-row class="register ml-auto mr-auto" >
      <b-col md="5" class="ml-auto mr-auto text-center">
        <b-row><b-col><h1>Cadastrar empresa</h1></b-col></b-row>
        <b-row><b-col><img height="260" src="../assets/logo_iqueue.png"/></b-col></b-row>
        <b-row class="pt-4">
          <b-col>
            <h6> Ou faça <b style="color: #7B7DCE;"> <router-link to="#" v-b-modal.login> Login </router-link></b> </h6>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="7">
        <b-form @submit.prevent="registerCompany()" class="pt-5">
          <b-row>
            <b-col>
              <b-form-group
                label="Razão social"
                label-for="socialReason"
                label-class="required"
              >
                <span class="icons-forms"><i class="far fa-user fa-lg"></i></span>
                <b-form-input
                  autocomplete="off"
                  id="socialReason"
                  @change="$v.legalPersonRegister.socialReason.$touch()"
                  v-model="legalPersonRegister.socialReason"
                  type="text"
                  placeholder="Razão social"
                ></b-form-input>
                <span
                  class="erros-form"
                  v-if="$v.legalPersonRegister.socialReason.$error">
                  O campo nome é obrigatório.
                </span>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="CNPJ"
                label-for="cnpj"
                label-class="required"
              >
                <span class="icons-forms"><i class="far fa-user fa-lg"></i></span>
                <b-form-input
                 @change="$v.legalPersonRegister.cnpj.$touch()"
                  autocomplete="off"
                  id="cnpj"
                  v-model="legalPersonRegister.cnpj"
                  type="text"
                  placeholder="CNPJ"
                ></b-form-input>
                <span
                  class="erros-form"
                  v-if="$v.legalPersonRegister.cnpj.$error">
                  O campo sobrenome é obrigatório.
                </span>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group
            label="Email address"
            label-for="email"
            label-class="required"
          >
            <span class="icons-forms"><i class="fas fa-envelope fa-lg"></i></span>
            <b-form-input
              @change="$v.legalPersonRegister.email.$touch()"
              autocomplete="off"
              id="email"
              v-model="legalPersonRegister.email"
              type="email"
              placeholder="exemplo@email.com"
            ></b-form-input>
            <span
              class="erros-form"
              v-if="$v.legalPersonRegister.email.$error">
              O campo email é obrigatório.
            </span>
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group
                label="Password"
                label-for="password"
                label-class="required"
              >
                <span class="icons-forms"><i class="fas fa-lock-open fa-lg"></i></span>
                <b-form-input
                  @change="$v.legalPersonRegister.password.$touch()"
                  autocomplete="off"
                  id="password"
                  v-model="legalPersonRegister.password"
                  type="password"
                  placeholder="Senha"
                ></b-form-input>
                <span
                  class="erros-form"
                  v-if="$v.legalPersonRegister.password.$error">
                  O campo senha é obrigatório.
                </span>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Confirmar senha"
                label-for="confirmPassword"
                label-class="required"
              >
                <span class="icons-forms"><i class="fas fa-lock fa-lg"></i></span>
                <b-form-input
                  @change="$v.legalPersonRegister.confirmPassword.$touch()"
                  id="confirmPassword"
                  v-model="legalPersonRegister.confirmPassword"
                  type="password"
                  placeholder="Confimar senha"
                ></b-form-input>
                <span
                  class="erros-form"
                  v-if="$v.legalPersonRegister.confirmPassword.$error">
                  O campo confirmar senha é obrigatório.
                </span>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="pl-3">
            <b-col>
              <b-row>
                <span>
                  A senha deve conter letras maiúsculas e minúsculas.
                </span>
              </b-row>
              <b-row>
                <span>
                  A senha deve conter pelo menos 1 número.
                </span>
              </b-row>
              <b-row>
                <span>
                  A senha deve conter pelo menos 1 caractere especial.
                </span>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="ml-auto mr-auto pt-3 text-center">
            <b-col>
              <b-button
                class="button"
                type="submit"
                variant="outline-success"
                >CRIAR
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
    <b-modal
      hide-footer
      id="login">
      <Login/>
    </b-modal>
  </b-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import Login from './Login.vue'

export default {
  components: { Login },
  data () {
    return {
      legalPersonRegister: {
        socialReason: '',
        cnpj: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  validations: {
    legalPersonRegister: {
      socialReason: { required },
      cnpj: { required },
      email: { required },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, minLength: minLength(8) }
    }
  },

  methods: {
    registerCompany () {
      this.checkForm()
      if (!this.$v.legalPersonRegister.$error) {
        console.log('Usuário cadastrado!')
      }
    },

    checkForm () {
      this.$v.$touch()
    }
  }
}
</script>

<style lang="css" scoped>
span {
  font-style: italic;
}
</style>
