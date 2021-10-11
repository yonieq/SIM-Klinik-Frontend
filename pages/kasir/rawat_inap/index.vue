<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Pasien Rawat Inap</h3>
        </v-flex>
        <v-flex lg12>
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
                  5,
                  10,
                  25,
                  50,
                  { text: 'All', value: -1 }
                ]"
                class="elevation-1"
                item-key="name"
              >
                <!-- select-all
                v-model="complex.selected" -->
                <template slot="items" slot-scope="props">
                  <!-- <td>
                    <v-checkbox
                      primary
                      hide-details
                      v-model="props.selected"
                    ></v-checkbox>
                  </td>
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="">
                    </v-avatar>
                  </td> -->
                  <td>{{ props.index }}</td>
                  <td>{{ props.item.no_rm }}</td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.alamat }}</td>
                  <td>
                    <v-btn
                      depressed
                      outline
                      dark
                      color="success"
                      small
                      nuxt-link to="/kasir/data_pasien/riwayat_detail_pembayaran"
                    >
                      Detail
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <h3>
      Tabel aftrian pembayaran,->klik konfirmasi pembayaran
    </h3> -->
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import { Items as Users } from "@/api/kasir/pasien";

export default {
  layout: "kasir/dashboard",
  components: {
    MiniStatistic
  },
  data() {
    return {
      search: "",
      complex: {
        selected: [],
        headers: [
          // {
          //   text: 'Avatar',
          //   value: 'avatar'
          // },
          {
            text: "No",
            // value: "waktu"
          },
          {
            text: "No. Rekam Medis",
            value: "no_rm"
          },
          {
            text: "Nama",
            value: "name"
          },
          {
            text: "Alamat",
            value: "alamat"
          },
          {
            text: "Konfirmasi",
            value: "konifrmasi"
          }
        ],
        items: Users
      }
    };
  }
};

</script>
<style scoped></style>
