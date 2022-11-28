<template>
  <div class="text-center">
    <v-dialog v-model="dialog" transition="dialog-top-transition" persistent>
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="cerrar()">
            Disagree
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="cerrar()">
            Agree
          </v-btn>
        </v-card-actions>
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