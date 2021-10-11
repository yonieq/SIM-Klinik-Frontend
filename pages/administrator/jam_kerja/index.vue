<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Ruangan</h3>
        </v-flex>
        <v-flex sm12>
            <v-btn class="primary" nuxt-link to="jam_kerja/tambah"> Tambah Data</v-btn>
        </v-flex>
        <v-flex lg12>
          <v-toolbar card color="white">
            <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Tuliskan Nama Hari atau Jam"
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
                <td>{{ props.item.hari }}</td>
                <td>{{ props.item.maxberangkat }}</td>
                <td>{{ props.item.naxterlambat }}</td>
                <td>{{ props.item.pulang }}</td>
                <td>
                  <v-btn depressed outline icon fab dark nuxt-link to="jam_kerja/edit" color="warning" small>
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
import jam_kerja from "@/api/administrator/jam_kerja/data";
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
            text: "Hari",
            value: "hari",
          },
          {
            text: "Masuk",
            value: "maxberangkat",
          },
          {
            text: "Keterlambatan",
            value: "naxterlambat",
          },
          {
            text: "Pulang",
            value: "pulang",
          },
          {
              text: 'Action',
              value: ''
            },
        ],
        items: jam_kerja,
      },
    };
  },
};
</script>

<style scoped>
</style>
