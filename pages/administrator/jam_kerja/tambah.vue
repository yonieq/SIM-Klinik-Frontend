<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="." outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Tambah Data Tipe Ruangan</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg12 sm12>
              <v-select
                label="Hari"
                :items="hari"
                v-model="e7"
                autocomplete
                item-text="hari"
                item-value="hari"
                required
              ></v-select>
            </v-flex>
            <v-flex sm4 lg4>
              <v-menu
                ref="startTime"
                lazy
                :close-on-content-click="false"
                v-model="startTimeMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-24"
                max-width="290px"
                :return-value.sync="startTime"
              >
                <v-text-field
                  slot="activator"
                  label="Masuk"
                  v-model="startTime"
                  append-icon="access_time"
                  readonly
                  required
                ></v-text-field>
                <v-time-picker v-model="startTime">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="startTimeMenu = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.startTime.save(startTime)"
                    >OK</v-btn
                  >
                </v-time-picker>
              </v-menu>
            </v-flex>
            <v-flex sm4 lg4>
              <v-menu
                ref="terlambat"
                lazy
                :close-on-content-click="false"
                v-model="terlambatMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-24"
                max-width="290px"
                :return-value.sync="terlambat"
              >
                <v-text-field
                  slot="activator"
                  label="Keterlambatan"
                  v-model="terlambat"
                  append-icon="access_time"
                  readonly
                  required
                ></v-text-field>
                <v-time-picker v-model="terlambat">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="terlambatMenu = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.terlambat.save(terlambat)"
                    >OK</v-btn
                  >
                </v-time-picker>
              </v-menu>
            </v-flex>
            <v-flex sm4 lg4>
              <v-menu
                ref="endTime"
                lazy
                :close-on-content-click="false"
                v-model="endTimeMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-24"
                max-width="290px"
                :return-value.sync="endTime"
              >
                <v-text-field
                  slot="activator"
                  label="Pulang"
                  v-model="endTime"
                  append-icon="access_time"
                  readonly
                  required
                ></v-text-field>
                <v-time-picker v-model="endTime">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="endTimeMenu = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.endTime.save(endTime)"
                    >OK</v-btn
                  >
                </v-time-picker>
              </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
            <v-card-actions class="pb-4 pl-3">
              <v-btn type="submit" color="primary" depressed>Simpan</v-btn>
              <v-btn type="reset" color="pink" outline depressed
                >Kosongkan</v-btn
              >
            </v-card-actions>
          </v-layout>
        </b-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Hari from "@/api/hari";

export default {
  layout: "administrator/dashboard",
  data() {
    return {
      form: {
        tipe: "",
      },
      show: true,
      startTimeMenu: false,
      startTime: null,
      terlambat:null,
      endTimeMenu: false,
      endTime: null,
      terlambatMenu:false,
      modal: false,
      hari: Hari,
    };
  },
  methods: {
    onSubmit(event) {
      // event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.tipe = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>