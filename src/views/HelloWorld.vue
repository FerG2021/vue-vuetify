

<template>
  <div style="display: flex">
    <div style="margin-left: auto">
      <v-btn class="btn" @click="$refs.modalNuevo.abrir()"> NUEVO </v-btn>
    </div>
  </div>

  <div style="margin-top: 20px">
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>

  <!-- <div class="card">
  <h1>{{ msg }}</h1>

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

  <v-switch v-model="switch1" label="Switch" color="red"></v-switch> -->

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
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
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
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
}
</style>
