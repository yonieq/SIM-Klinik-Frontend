<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="." outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Tambah Data Bagian Kerja & Gaji</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg12 sm12>
              <v-text-field
                label="Bagian Kerja"
                name="bagian_kerja"
                v-model="form.bagian_kerja"
                placeholder="Masukan nama bagian kerja"
                required
              >
              </v-text-field>
            </v-flex>
            <v-flex lg6 sm6>
              <v-text-field
                label="Gaji Perhari"
                name="perhari"
                type="number"
                prefix="Rp."
                v-model="form.perhari"
                placeholder="Gaji untuk satu hari"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg6 sm6>
              <v-text-field
                label="Upah Cuti"
                name="cuti"
                type="number"
                prefix="Rp."
                v-model="form.cuti"
                placeholder="Upah cuti untuk satu hari"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg6 sm6>
              <v-text-field
                label="Upah Izin Ruangan"
                name="izin"
                type="number"
                prefix="Rp."
                v-model="form.izin"
                placeholder="Upah izin untuk satu hari"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg6 sm6>
              <v-text-field
                label="Upah Lembur"
                name="lembur"
                type="number"
                prefix="Rp."
                v-model="form.lembur"
                placeholder="Upah lembur untuk satu jam"
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
        bagian_kerja: "",
        perhari: "",
        cuti: "",
        izin: "",
        lembur: "",
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