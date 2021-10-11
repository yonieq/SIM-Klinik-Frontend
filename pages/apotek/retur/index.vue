<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Retur Obat dan Alkes</h3>
        </v-flex>
        <v-flex sm12>
          <v-btn color="primary" nuxt-link to="retur/tambah" depressed>Tambah Data</v-btn>
        </v-flex>
        <v-flex lg12> 
          <v-toolbar card color="white">
            <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Tuliskan Nama Obat atau Alkes"
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
                <td>{{ props.item.nama }}</td>
                <td>{{ props.item.jumlah }}</td>
                <td>{{ props.item.keterangan }}</td>
                <td>{{ props.item.tanggal }}</td>
                <td>
                  <v-btn depressed outline icon fab dark color="warning" nuxt-link to="retur/edit" small>
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
import Obat from "@/api/apotek/retur";
export default {
  layout: "apotek/dashboard",
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
            text: "Nama Obat",
            value: "nama",
          },
          {
            text: "Jumlah",
            value: "jumlah",
          },
          {
            text: "Keterangan",
            value: "keterangan",
          },
          {
            text: "Tanggal",
            value: "tanggal",
          },
          {
            text: "Tindakan",
            value: "",
          },
        ],
        items: Obat,
      },
    };
  },
};
</script>

<style scoped>
</style>
