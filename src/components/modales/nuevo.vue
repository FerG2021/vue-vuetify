<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-btn class="btn" @click="cerrar()"> Cerrar </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    abrir() {
      this.dialog = true;
    },

    cerrar() {
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>