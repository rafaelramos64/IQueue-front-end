<template>
  <b-container fluid >
    <b-row class="text-center">
      <b-col>
        <div class="body-home mr-auto ml-auto p-5">
          <p style="color: #F5FFF9; font-family: 'Prociono'; font-size: 4rem;">Bem vindo ao IQueue</p>
          <img class="mt-5 mb-4" height="220" src="../assets/logo_iqueue.png"/><br>
          <b-button
            v-b-modal.login
            class="mt-5 mb-5 button"
            variant="outline-success">
            Entrar
          </b-button><br>
          <p style="font-family: 'Prociono'; font-size: 1.5rem;">
            É novo por aqui?
            <b style="color: #7B7DCE; ">
              <router-link to="" v-b-modal.register> Cadastre-se </router-link>
            </b>
          </p>
        </div>
      </b-col>
    </b-row>
    <b-modal
      hide-footer
      id="login">
      <Login/>
    </b-modal>
    <b-modal
      hide-footer
      id="register">
      <Register/>
    </b-modal>
  </b-container>
</template>

<script>
import Register from '../components/Register'
import Login from '../components/Login'

export default {
  components: { Register, Login },
  name: 'Home'
}
</script>

<style lang="scss" scoped>
$gradiente-home: linear-gradient( #38C172 0%, rgba(56, 193, 114, 0.31) 100%);

.body-home {
  /* background: linear-gradient(to top left, #fff 50%, rgba(56, 193, 114, 0.31) 40%) !important; */
  background: linear-gradient( 170deg, #38C172 50%, #fff 50.3% );
  height: 100vh;
  width: 80%;
}

.button {
  min-width: 60px !important;
  font-size: 1.5rem !important;
  padding-left: 1.2rem !important;
  padding-right: 1.2rem !important;
}
</style>
