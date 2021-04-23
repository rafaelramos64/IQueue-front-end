<template>
  <b-container>
    <b-row no-gutters  class="check-box-switch">
      <b-col md="12" class="ml-auto mr-auto text-left">
        <b-row no-gutters>
          <b-form-checkbox v-model="checked" name="check-button" switch switch-variant="danger" size="lg">
            <p class="pb-1" style="font-family: 'Prociono'; font-size: 1.5rem;"> {{ typeRegister }} </p>
          </b-form-checkbox>
        </b-row>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <PpRegister v-if="!checked"/>
      <LpRegister v-else/>
    </b-row>
  </b-container>
</template>

<script>
<<<<<<< HEAD
import PpRegister from '@/components/PpRegister.vue'
import LpRegister from './LpRegister.vue'
=======
import { required, minLength } from 'vuelidate/lib/validators'
import Login from '../components/Login.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
>>>>>>> 935321415bba9269e140beff41346532d252b68c

export default {
  name: 'Register',
  components: {
    PpRegister,
    LpRegister
  },

  data () {
    return {
      checked: false,
      typeRegister: 'Pessoa física'
    }
  },

<<<<<<< HEAD
  watch: {
    checked (newValue, oldValue) {
      if (newValue === true) this.typeRegister = 'Pessoa jurídica'
      else {
        this.typeRegister = 'Pessoa física'
=======
  methods: {
    SuccessOrErrorSaveUser: function (status, statusText) {
      const title = status === 201 ? 'Success' : 'Error'
      const text = status === 201 ? 'User Saved!' : statusText
      const icon = status === 201 ? 'success' : 'error'
      const timer = status === 201 ? 1200 : 2500
      Swal.fire({
        title,
        text,
        icon,
        confirmButtonText: 'OK',
        confirmButtonColor: '#17a2b8',
        timer
      })
    },

    registerUser () {
      const url = process.env.VUE_APP_URL_SERVER
      this.checkForm()
      if (!this.$v.register.$error) {
        axios.post(`${url}/users`, {
          firstName: this.register.name,
          lastName: this.register.lastName,
          email: this.register.email,
          password: this.register.password
        }).then(response => {
          console.log(response)
          this.SuccessOrErrorSaveUser(response.status, response.statusText)
          if (response.status === 201) {
            console.log('Usuário cadastrado!')
          } else {
            return JSON.parse({
              status: response.status,
              statusText: response.statusText
            })
          }
        }).catch(error => console.error(error))
>>>>>>> 935321415bba9269e140beff41346532d252b68c
      }
      return this.typeRegister
    }
  }
}
</script>

<style lang="scss" scoped>
/* Css  to changes of switch */

.custom-switch .custom-control-label::before {
  width: 2rem !important;
}

.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 2rem !important;
  height: 2rem !important;
  pointer-events: none;
  content: "";
  background-color: #38C172 !important;
  border: #adb5bd solid 1px;
}

.custom-control-input:checked ~ .custom-control-label::before {
  background-color: #38C172 !important;
  border-color: #38C172 !important;
}

/* .custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: 0.5rem;
} */
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #18d26e !important;
  background-color: #18d26e !important;
  box-shadow: none !important;
}

.check-box-switch {
  position: absolute;
  bottom: 10rem;
  left: 17rem;
}

</style>
