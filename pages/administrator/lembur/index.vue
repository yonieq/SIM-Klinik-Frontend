<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-widget title="Absen Karyawan Hari Ini" class="mt-3">
      </v-widget>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Lembur</h3>
        </v-flex>
        <v-flex lg12>
          <v-card>
            <div>
            <v-btn color="primary" nuxt-link to="lembur/tambah" depressed>Tambah Data</v-btn>
            </div>
            <!-- <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Ketik Nama Dokter"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar> -->
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]"
                class="elevation-1"
                item-key="name"
              >
                <template slot="items" slot-scope="props">
                  <!-- <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="">
                    </v-avatar>
                  </td> -->
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.bagian_kerja }}</td>
                  <td>{{ props.item.tanggal }}</td>
                  <td>{{ props.item.jam }}</td>
                  <td>
                  <v-btn depressed outline icon fab dark color="warning" nuxt-link to="lembur/edit" small>
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn depressed outline icon fab dark color="pink" small>
                    <v-icon>delete</v-icon>
                  </v-btn>
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
import VWidget from "@/components/VWidget";
import { Items as Lembur } from "@/api/administrator/lembur/data";

export default {
  layout: "administrator/dashboard",
  components: {
    VWidget,
  },
  data() {
    return {
      picker: null,
      picker2: null,
      //
      arrayEvents: null,
      date1: null,
      date2: null,
      //
      date: null,
      menu: false,
      modal: false,

      complex: {
        headers: [
          //   {
          //     text: "Photo",
          //     value: "avatar",
          //   },
          {
            text: "Name",
            value: "name",
          },
          {
            text: "Bagian Kerja",
            value: "bagian_kerja",
          },
          {
            text: "Tanggal",
            value: "tanggal",
          },
          {
            text: "Jumlah Jam",
            value: "jam",
          },
          {
            text: "Aksi",
            value: "",
          },
        ],
        items: Lembur,
      },
    };
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },

  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      return parseInt(day, 10) % 3 === 0;
    },
  },
};
</script>

<style scoped>
</style>
