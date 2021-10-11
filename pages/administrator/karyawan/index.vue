<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Karyawan & Dokter</h3>
        </v-flex>
        <v-flex sm12>
          <v-btn class="primary" nuxt-link to="karyawan/tambah">
            Tambah Data</v-btn
          >
        </v-flex>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Ketik Nama Karyawan & Dokter"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>
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
                  <!-- <td>{{i++}}</td> -->
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="" />
                    </v-avatar>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>
                    {{ props.item.address.street }}
                    {{ props.item.address.city }}
                  </td>
                  <td>{{ props.item.bagian_kerja }}</td>
                  <td>2019-10-02</td>
                  <td>2023-10-02</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="success" small>
                      <v-icon>check</v-icon>
                    </v-btn>
                  </td>

                  <td>
                    <v-btn
                      depressed
                      outline
                      icon
                      fab
                      dark
                      color="warning"
                      small nuxt-lixk to="karyawan/edit"

                    >
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
import { Items as Users } from "@/api/administrator/karyawan/data";

export default {
  layout: "administrator/dashboard",
  data() {
    return {
      search: "",
      complex: {
        headers: [
          // {
          //   text: 'No',
          //   // value: 'avatar'
          // },
          {
            text: "Photo",
            value: "avatar",
          },
          {
            text: "Name",
            value: "nama",
          },
          {
            text: "Alamat",
            value: "alamat",
          },
          {
            text: "Bagian Kerja",
            value: "bagian_kerja",
          },
          {
            text: "Mulai Kontrak?SIP",
            value: "mulai",
          },
          {
            text: "Akhir Kontrak?SIP",
            value: "akhir",
          },
          {
            text: "Status Sidik jJri",
            value: "sidik_jari",
          },
          {
            text: "Action",
            value: "",
          },
        ],
        i: 1,
        items: Users,
      },
    };
  },
};
</script>
