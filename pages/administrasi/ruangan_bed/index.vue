<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Ruangan & Bed</h3>
        </v-flex>
        <v-flex lg12>
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
                <td>{{ props.item.nama_ruangan }}</td>
                <td>{{ props.item.bed }}</td>
                <td>
                  <a href="administrasi/ruangan_bed/detail">
                    <v-btn
                      depressed
                      outline
                      icon
                      fab
                      dark
                      color="primary"
                      small
                      title="Detail"
                    >
                      <v-icon>visibility</v-icon>
                    </v-btn>
                  </a>
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
import { Items as Tipe_ruangan } from "@/api/administrasi/ruangan_bed/bed_ruangan";
export default {
  layout: "administrasi/dashboard",
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
            text: "Nama Ruangan",
            value: "nama",
          },
          {
            text: "Jumlah Bed",
            value: "bed",
          },
          {
            text: "Action",
            value: "",
          },
        ],
        items: Tipe_ruangan,
      },
    };
  },
};
</script>

<style scoped>
</style>
