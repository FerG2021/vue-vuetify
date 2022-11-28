

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <v-switch v-model="switch1" label="Switch" color="red"></v-switch>

  <v-btn class="btn" @click="$refs.modalNuevo.abrir()"> Abrir </v-btn>

  <modal-nuevo ref="modalNuevo"></modal-nuevo>
</template>

<script>
import { ref } from "vue";

import ModalNuevo from "./modales/nuevo.vue";

// defineProps({
//   msg: String,
// });

const count = ref(0);

export default {
  components: {
    ModalNuevo,
  },

  data() {
    return {
      switch1: false,
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.btn {
  border-radius: 0px;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
}
</style>
