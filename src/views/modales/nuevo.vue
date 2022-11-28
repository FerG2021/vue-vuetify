<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      persistent
      style="width: 50%"
      class=""
    >
      <v-card class="modal">
        <v-card-title>
          <span class="titulo">Nuevo usuario</span>
        </v-card-title>
        <menu-icon class="icon-2x" />
        <menu-icon :size="30" fillColor="#fff" />

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="NOMBRE"
                  required
                  class="item-form"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="APELLIDO"
                  required
                  class="item-form"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-MAIL"
                  required
                  class="item-form"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="flat" color="error" @click="cerrar()"> Cerrar </v-btn>
          <v-btn variant="flat" color="success" @click="cerrar()">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="timeout" color="error">
      <p style="text-align: center">Modal cerrado con éxito</p>
    </v-snackbar>
  </div>
</template>

<script>
import { User } from "vue-icon-packs/ti";

export default {
  data() {
    return {
      dialog: false,
      snackbar: false,
    };
  },

  methods: {
    abrir() {
      this.dialog = true;
    },

    cerrar() {
      this.snackbar = true;
      this.dialog = false;
    },
  },
};
</script>

<style>
.modal {
  background-color: #242424 !important;
}

.titulo {
  color: #fff;
}

.item-form {
  background-color: #fff;
}

/* .material-design-icon.icon-2x {
  height: 3em;
  width: 3em;
} */

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 3em;
  width: 3em;
  margin: 0px;
  color: red;
}
</style>