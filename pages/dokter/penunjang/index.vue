<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <h3>Kebutuhan Penunjang</h3>
            </v-toolbar>
            <v-divider></v-divider>
            <v-layout row>
              <v-toolbar card color="transparent">
                <v-flex xs2>
                  <v-subheader>Nama</v-subheader>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                    name="input-1"
                    placeholder="Nama"
                    color="primary"
                    id="testing"
                    type="text"
                  ></v-text-field>
                </v-flex>

                <v-flex xs2>
                  <v-subheader>Jumlah</v-subheader>
                </v-flex>
                <v-flex xs2>
                  <v-text-field
                    name="input-1"
                    placeholder="Jumlah"
                    color="primary"
                    id="testing"
                    type="number"
                  ></v-text-field>
                </v-flex>

                <v-btn color="success" type="submit">Kirim</v-btn>
              </v-toolbar>
            </v-layout>
            <v-divider></v-divider>

            <v-toolbar card color="white">
              <h3>Tabel Kebutuhan Penunjang</h3>
            </v-toolbar>
            <v-flex lg12>
              <v-card>
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
                    <template slot="items" slot-scope="props">
                      <td>{{ props.index }}</td>
                      <td>{{ props.item.nama }}</td>
                      <td>{{ props.item.jumlah }}</td>
                      <td>
                        <v-btn color="info" depressed outline small round>Diterima</v-btn>
                      </td>
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import { Items as Users } from "@/api/dokter/penunjang";

export default {
  layout: "dokter/dashboard",
  components: {
    VWidget,
  },
  data() {
    return {
      search: "",
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
          {
            text: "No",
            // value: "avatar",
          },
          {
            text: "Nama",
            value: "nama",
          },
          {
            text: "Jumlah",
            value: "jumlah",
          },
          {
            text: "Status",
          },
        ],
        items: Users,
      },
    };
  },
};
</script>