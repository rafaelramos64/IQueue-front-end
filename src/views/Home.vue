<template>
  <b-container fluid >
    <b-row class="text-center">
      <b-col>
        <div class="body-home mr-auto ml-auto p-5">
          <p style="color: #F5FFF9; font-family: 'Prociono'; font-size: 4rem;">Bem vindo ao IQueue</p>
        </div>
      </b-col>
    </b-row>
    <!-- <Login/>
    <Register /> -->
  </b-container>
</template>

<script>
// @ is an alias to /src
/* import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue' */

export default {
  name: 'Home',
  components: {
    /* Register,
    Login */
  }
}
</script>

<style lang="scss" scoped>
$gradiente-home: linear-gradient( #38C172 0%, rgba(56, 193, 114, 0.31) 100%);

.body-home {
  /* background: linear-gradient(to top left, #fff 50%, rgba(56, 193, 114, 0.31) 40%) !important; */
  background: linear-gradient( 170deg, $gradiente-home 50%, #fff 50.3% );
  height: 100vh;
  width: 80%;
}
</style>
