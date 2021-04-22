<template>
  <b-container fluid class="p-5">
    <b-row class="register ml-auto mr-auto" >
      <b-col md="5" class="ml-auto mr-auto ">
        <b-row class="text-center"><b-col><h1>Criar conta</h1></b-col></b-row>
        <b-row class="text-center"><b-col><img height="260" src="../assets/logo_iqueue.png"/></b-col></b-row>
      </b-col>
      <b-col md="7">
        <b-form @submit="onSubmit" class="pt-5">
          <b-row>
            <b-col>
              <b-form-group
                label="Name"
                label-for="name"
                label-class="required"
              >
                <b-form-input
                  autocomplete="off"
                  id="name"
                  @change="$v.register.name.$touch()"
                  v-model="register.name"
                  type="text"
                  placeholder="Nome"
                  required
                ></b-form-input>
                <p
                  class="erros-form"
                  v-if="$v.register.name.$error">
                  O campo nome é obrigatório.
                </p>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Last Name"
                label-for="lastName"
                label-class="required"
              >
                <b-form-input
                 @change="$v.register.lastName.$touch()"
                  autocomplete="off"
                  id="lastName"
                  v-model="register.lastName"
                  type="text"
                  placeholder="Sobrenome"
                  required
                ></b-form-input>
                <p
                  class="erros-form"
                  v-if="$v.register.lastName.$error">
                  O campo sobrenome é obrigatório.
                </p>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group
            label="Email address"
            label-for="email"
            label-class="required"
          >
            <b-form-input
              @change="$v.register.register.email.$touch()"
              autocomplete="off"
              id="email"
              v-model="register.email"
              type="email"
              placeholder="exemplo@email.com"
              required
            ></b-form-input>
            <p
              class="erros-form"
              v-if="$v.register.email.$error">
              O campo email é obrigatório.
            </p>
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group
                label="Password"
                label-for="password"
                label-class="required"
              >
                <b-form-input
                  @change="$v.register.register.password.$touch()"
                  autocomplete="off"
                  id="password"
                  v-model="register.password"
                  type="password"
                  placeholder="Senha"
                  required
                ></b-form-input>
                <p
                  class="erros-form"
                  v-if="$v.register.password.$error">
                  O campo senha é obrigatório.
                </p>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Confirm Password"
                label-for="confirmPassword"
                label-class="required"
              >
                <b-form-input
                  @change="$v.register.confirmPassword.$touch()"
                  id="confirmPassword"
                  v-model="register.confirmPassword"
                  type="password"
                  placeholder="Confimar senha"
                  required
                ></b-form-input>
                <p
                  class="erros-form"
                  v-if="$v.register.confirmPassword.$error">
                  O campo confirmar senha é obrigatório.
                </p>
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
              <b-button @click.prevent="registerUser()" variant="outline-success" pill>CRIAR</b-button>
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
      register: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  validations: {
    register: {
      name: { required },
      lastName: { required },
      email: { required },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, minLength: minLength(8) }
    }
  },

  methods: {
    registerUser () {
      if (!this.$v.register.error) {
        console.log('Usuário cadastrado!')
      }
    },

    verifyFullInputs () {
      this.$v.touch()
    }
  }
}
</script>

<style lang="css" scoped>
.register {
  background-color: #fff;
  width: 80%;
  padding-top: 3%;
  padding-bottom: 3%;
  min-height: 370px;
  position: relative;
  bottom: -45px;
  border: 1px solid #f8f8f8;
  /* box-shadow: 0px 5px 10px 0px rgba(153, 153, 153, 0.3); */
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px;
}

span {
  font-style: italic;
}
</style>
