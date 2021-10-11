<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="3"
            sub-title="Pasien Menunggu Pembayaran"
            color="red darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="2"
            sub-title="Pasien Menunggu Konfirmasi Obat"
            color="yellow darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="7"
            sub-title="Pasoen Selesai Pembayaran"
            color="blue darken-1"
          >
          </mini-statistic>
        </v-flex>
        <!-- linear statistic  end -->
        <v-flex sm12>
          <h3>Antrian Pembayaran</h3>
        </v-flex>
        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Tuliskan Nama Pasien"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <!-- <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn> -->
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[
                  10,
                  25,
                  50,
                  { text: 'All', value: -1 },
                ]"
                class="elevation-1"
                item-key="name"
              >
                <!-- select-all
                v-model="complex.selected" -->
                <template slot="items" slot-scope="props">
                  <td>{{ props.index }}</td>
                  <td>{{ props.item.no_rm }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.alamat }}</td>
                  <td>{{ props.item.jenis_kelamin }}</td>
                  <td>{{ props.item.usia }}</td>
                  <td>
                    <v-btn color="info" depressed outline small round to="/kasir/data_pasien/detail_pembayaran">Bayar</v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import { Items as Users } from "@/api/kasir/pasien";

export default {
  layout: "kasir/dashboard",
  components: {
    MiniStatistic,
  },
  data() {
    return {
      search: "",
      complex: {
        headers: [
          {
            text: "No",
            // value: 'no_rm'
          },
          {
            text: "No. Rekam Medis",
            value: 'no_rm'
          },
          {
            text: "Nama",
            value: "nama",
          },
          {
            text: "Alamat",
            value: "alamat",
          },
          {
            text: "Jenis Kelamin",
            value: "jenis_kelamin",
          },
          {
            text: "Usia",
            value: "usia",
          },
          {
            text: "Aksi",
            // value: "",
          },
        ],
        items: Users,
      },
    };
  },
};
</script>