<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Bagian Kerja & Gaji</h3>
        </v-flex>
        <v-flex sm12>
            <v-btn class="primary" nuxt-link to="bagian_kerja/tambah"> Tambah Data</v-btn>
        </v-flex>
        <v-flex lg12>
          <v-toolbar card color="white">
            <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Tuliskan Nama Bagian Kerja"
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
                <td>{{ props.index +1 }}</td>
                <td>{{ props.item.bagian_kerja }}</td>
                <td>{{ props.item.perhari }}</td>
                <td>{{ props.item.cuti }}</td>
                <td>{{ props.item.izin }}</td>
                <td>{{ props.item.lembur }}</td>
                <td>
                  <v-btn v-if="props.item.bagian_kerja =='dokter' " disabled outline icon fab color="grey" small>
                    <v-icon>edit</v-icon>
                  </v-btn>  
                  <v-btn v-else depressed outline icon fab dark nuxt-link to="bagian_kerja/edit" color="warning" small>
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn v-if="props.item.role =='11' " depressed outline icon fab dark color="pink" small>
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <v-btn v-else disabled depressed outline icon fab color="pink" small>
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
import Bagiankerja from "@/api/administrator/bagian_kerja/data";
export default {
  layout: "administrator/dashboard",
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
            text: "Nama",
            value: "bagian_kerja",
          },
          {
            text: "Gaji Perhari",
            value: "perhari",
          },
          {
            text: "Upah Cuti",
            value: "cuti",
          },

          {
            text: "Upah Izin",
            value: "izin",
          },
          {
            text: "Upah Lembue Perjam",
            value: "lembur",
          },
          {
              text: 'Action',
              value: ''
            },
        ],
        items: Bagiankerja,
      },
    };
  },
};
</script>

<style scoped>
</style>
