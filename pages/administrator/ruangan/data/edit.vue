<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="." outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Edit Data Ruangan</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg12 sm12>
              <v-text-field
                label="Nama Ruangan:"
                name="name"
                v-model="form.nama"
                placeholder="Masukan Nama Ruangan"
                required
              >
              </v-text-field>
            </v-flex>
            <v-flex lg12 sm12>
              <v-select
                label="Tipe Ruangan"
                :items="tipe"
                v-model="form.tipe"
                autocomplete
                item-text="tipe_ruangan"
                item-value="tipe_ruangan"
                required
              ></v-select>
            </v-flex>
            <v-flex lg12 sm12>
              <v-text-field
                label="Tipe Ruangan"
                name="fasilitas"
                v-model="form.fasilitas"
                placeholder="Fasilitas Ruangan"
                required
              >
              </v-text-field>
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
import Items from "@/api/administrator/ruangan/list_tipe";

export default {
  layout: "administrator/dashboard",
  data() {
    return {
      items: [],
      form: {
        nama: "Paviliun	",
        fasilitas: "4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi",
        tipe:"BPJS",
      },
      tipe: Items,
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.nama = "";
      this.form.fasilitas = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>