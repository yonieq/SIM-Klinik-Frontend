<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Pemgembalian Gas Medis Kosong ke Gudang</h3>
        </v-flex>
        <v-flex sm12>
          <a href="/kepala_apotek/gas_medis/pengembalian/tambah">
            <v-btn class="primary"> Tambah Data</v-btn></a
          >
        </v-flex>
        <v-flex lg12>
          <v-toolbar card color="white">
            <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Tuliskan Nama Tempat"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <!-- <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn> -->
          </v-toolbar>
          <v-divider></v-divider>
          <v-card class="pa-0">
            <v-data-table
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :rows-per-page-items="[5, 10, 25, 50, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.index }}</td>
                <td>{{ props.item.nama }}</td>
                <td>{{ props.item.jumlah }}</td>
                <td>
                  <v-btn depressed outline icon fab dark color="warning" small>
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn depressed outline icon fab dark color="pink" small>
                    <v-icon>delete</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import { Items as Distribusi } from "@/api/kepala_apotek/gas_medis/distribusi";
export default {
  layout: "kepala_apotek/dashboard",
  components: {
    MiniStatistic,
  },
  data() {
    return {
      search: "",
      complex: {
        selected: [],
        headers: [
          {
            text: "No. ",
            value: "no",
          },
          {
            text: "Nama Tempat",
            value: "nama",
          },
          {
            text: "Jumlah",
            value: "jumlah",
          },
          {
              text: 'Action',
              value: ''
            },
        ],
        items: Distribusi,
      },
    };
  },
};
</script>

<style scoped>
</style>
