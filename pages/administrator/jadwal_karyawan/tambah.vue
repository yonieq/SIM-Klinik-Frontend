<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="." outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Tambah Data Jadwal Karyawan</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
              <v-flex lg6 sm6>
              <v-select
                label="Karyawan"
                :items="karyawan"
                v-model="e7"
                autocomplete
                item-text="name"
                item-value="name"
                required
              ></v-select>
            </v-flex>
            <v-flex lg3 sm3>
              <v-select
                label="Hari dan Shif"
                :items="jam_kerja"
                v-model="e7"
                autocomplete
                item-text="kode"
                item-value="kode"
                required
              ></v-select>
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
import Jam_kerja from "@/api//administrator/jam_kerja/data";
import { Items as Karyawan} from "@/api/administrator/karyawan/data";

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
      jam_kerja: Jam_kerja,
      karyawan:Karyawan
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