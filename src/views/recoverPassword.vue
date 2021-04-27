<template>
  <b-container fluid style="padding: 5rem">
    <b-row align-v="center">
      <b-col md="6" class="ml-auto mr-auto recover-password ">
        <b-row class="text-center mb-4">
          <b-col><span  style="font-family: 'Prociono'; font-size: 2.5rem;">Recuperação de senha</span></b-col>
        </b-row>
        <b-row class="text-center">
          <b-col><span>Será enviado um email com instruções para redefinir sua senha.</span></b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form @submit.prevent="recoverPassword()" class="mt-3">
              <b-form-group
                label="Email"
                label-for="Email"
                label-class="required"
              >
                <span class="icons-forms"><i class="far fa-user fa-lg"></i></span>
                <b-form-input
                  autocomplete="off"
                  id="Email"
                  required
                  v-model="email"
                  type="text"
                  placeholder="Email"
                ></b-form-input>
                <!-- <span
                  class="erros-form"
                  v-if="$v.legalPersonRegister.socialReason.$error">
                  O campo razão social é obrigatório.
                </span> -->
              </b-form-group>
              <b-row align-h="around" no-gutters>
                <b-col md="5">
                  <b-button
                    style="width: 100%"
                    class="button mt-4"
                    type="submit"
                    variant="outline-success"
                    >ENVIAR CÓDIGO
                  </b-button>
                </b-col>
                <b-col md="5">
                  <b-button
                    to="/"
                    style="width: 100%"
                    class="button mt-4"
                    type="cancel"
                    variant="outline-danger"
                    >CANCELAR
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },

  recoverPassword () {
    console.log('Send')
  }
}
</script>

<style lang="scss" scoped>
.recover-password {
  border-radius: 10px !important;
  background-color: #fff !important;
  width: 100% !important;
  padding: 5% 3% 5% 3% !important;
  min-height: 100% !important;
  border: 1px solid #f8f8f8 !important;
  /* box-shadow: 0px 5px 10px 0px rgba(153, 153, 153, 0.3); */
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px 0px !important;
}
</style>
