<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Detail Penebusan Obat">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs19>
                    <v-card>
                      <v-toolbar card dense color="transparent">
                        <v-toolbar-title
                          ><h4>
                            Data Obat No. Transaksi: TRS-001
                          </h4></v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                        <!-- <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn> -->
                      </v-toolbar>
                      <v-divider></v-divider>
                      <v-card-text class="pa-0">
                        <template>
                          <v-data-table
                            :headers="headers"
                            :items="items"
                            hide-actions
                            class="elevation-0 table-striped"
                          >
                            <template slot="items" slot-scope="props">
                              <td>{{ props.item.obat }}</td>
                              <td>{{ props.item.jumlah }}</td>
                              <td>Rp. {{ props.item.total }}</td>
                            </template>
                          </v-data-table>
                        </template>
                        <v-divider></v-divider>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex sm9>
                    <h4>Total Bayar</h4>
                  </v-flex>
                  <v-flex sm3>
                    <h4>Rp. 35000</h4>
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import items from "@/api/apotek/penjualan";

export default {
  layout: "apotek/dashboard",

  components: {
    VWidget,
  },
  data() {
    return {
      headers: [
        { text: "Nama Obar", value: "obat", align: "center" },
        { text: "Jumlah", value: "jumlah", align: "center" },
        { text: "Total Harga", value: "total", align: "center" },
      ],
      items: items,
      colors: {
        processing: "blue",
        sent: "red",
        delivered: "green",
      },
    };
  },
  computed: {},
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
    },
  },
};
</script>
