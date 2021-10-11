<template>
  <v-container grid-list-xl fluid>
    <v-btn color="warning" nuxt-link to="../dashboard" outline depressed>Kembali</v-btn>
    <br />
    <br />

    <v-card>
      <v-toolbar card>
        <h3>Layanan Penjualan Luar Klinik</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg4 sm4>
              <v-select
                label="Obat / Alkes"
                :items="obat"
                v-model="form.obat1"
                autocomplete
                item-text="nama"
                item-value="harga"
                required
              ></v-select>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Jumlah"
                name="jumlah"
                v-model="form.jumlah1"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Total Harga"
                name="jumlah"
                v-model="form.total1"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
                disabled
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
              <v-select
                label="Obat / Alkes"
                :items="obat"
                v-model="form.obat2"
                autocomplete
                item-text="nama"
                item-value="harga"
                required
              ></v-select>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Jumlah"
                name="jumlah"
                v-model="form.jumlah2"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Total Harga"
                name="jumlah"
                v-model="form.total2"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
                disabled
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
              <v-select
                label="Obat / Alkes"
                :items="obat"
                v-model="form.obat3"
                autocomplete
                item-text="nama"
                item-value="harga"
                required
              ></v-select>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Jumlah"
                name="jumlah"
                v-model="form.jumlah3"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Total Harga"
                name="jumlah"
                v-model="form.total3"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
                disabled
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
              <v-text-field
                label="Total Pembayaran"
                name="jumlah"
                v-model="form.bayar"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
                disabled
              >
              </v-text-field>
            </v-flex><v-flex lg4 sm4>
              <v-text-field
                label="Uang Diterima"
                name="jumlah"
                v-model="form.diterima"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
              >
              </v-text-field>
            </v-flex><v-flex lg4 sm4>
              <v-text-field
                label="Kembalian"
                name="jumlah"
                v-model="form.kembalian"
                placeholder="Masukan Nama Ruangan"
                required
                type="number"
                disabled
              >
              </v-text-field>
            </v-flex>
            <v-flex lg4 sm4>
                <v-text-field
                  label="Tanggal"
                  v-model="startDate"
                  append-icon="event"
                  readonly
                ></v-text-field>
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
      startDate: "12-10-2021",
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