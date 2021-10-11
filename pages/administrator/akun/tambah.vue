<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="." outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Tambah Akun Karyawan & Dokter</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg12 sm12>
              <v-select
                label="Pilih Karyawan & Dokter"
                :items="items"
                v-model="form.nama"
                autocomplete
                item-text="name"
                item-value="name"
                required
              ></v-select>
            </v-flex>
            <v-flex lg5 sm5>
              <v-text-field
                label="Email"
                name="email"
                v-model="form.email"
                placeholder="Masukkan email.."
                required
              >
              </v-text-field>
            </v-flex>
            <v-flex lg5 sm5>
              <v-text-field
                label="Kata Sandi"
                name="password"
                type="password"
                v-model="form.password"
                placeholder="Masukan kata sandi.."
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
import { Items as Users } from "@/api/administrator/karyawan/data";

export default {
  layout: "administrator/dashboard",
  data() {
    return {
      form: {
        nama: "",
        fasilitas: "",
        tipe: "",
      },
      items: Users,
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
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>