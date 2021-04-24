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
import PpRegister from '@/components/PpRegister.vue'
import LpRegister from './LpRegister.vue'

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

  watch: {
    checked (newValue, oldValue) {
      if (newValue === true) this.typeRegister = 'Pessoa jurídica'
      else {
        this.typeRegister = 'Pessoa física'
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
  position: absolute !important;
  bottom: 35rem !important;
  left: 60rem !important;
}

</style>
