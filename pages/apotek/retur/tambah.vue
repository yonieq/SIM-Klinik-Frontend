<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="." outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Tambah Data Retur Barang</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg10 sm10>
              <v-select
                label="Obat / Alkes"
                :items="obat"
                v-model="form.obat"
                autocomplete
                item-text="nama"
                item-value="nama"
                required
              ></v-select>
            </v-flex>
            <v-flex lg5 sm5>
              <v-text-field
                label="Jumlah"
                name="jumlah"
                v-model="form.jumlah"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg5 sm5>
              <v-select
                label="Keterangan"
                :items="keterangan"
                v-model="form.keterangan"
                autocomplete
                item-text="keterangan"
                item-value="keterangan"
                required
              ></v-select>
            </v-flex>
            <v-flex lg5 sm5>
              <v-menu
                class="pr-2"
                ref="statDate"
                lazy
                :close-on-content-click="false"
                v-model="startDateMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-22"
                max-width="290px"
                :return-value.sync="startDate"
              >
                <v-text-field
                  slot="activator"
                  label="Tanggal"
                  v-model="startDate"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="startDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="startDateMenu = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.statDate.save(startDate)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-flex>
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
import Obat from "@/api/obat/data";

export default {
  layout: "apotek/dashboard",
  data() {
    return {
      items: [],
      form: {
        nama: "",
        fasilitas: "",
        tipe: "",
      },
      obat: Obat,
      keterangan: [
        { keterangan: "Barang Rusak" },
        { keterangan: "Kadaluarsa" },
      ],
      title: null,
      valid: true,
      date: null,
      startDateMenu: false,
      startDate: null,
      startTimeMenu: false,
      startTime: null,
      endDateMenu: false,
      endDate: null,
      endTimeMenu: false,
      endTime: null,
      modal: false,
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