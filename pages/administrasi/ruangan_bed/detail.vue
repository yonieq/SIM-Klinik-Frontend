<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget  title="Data Detail Ruangan">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs9>
                    <v-card>
                      
                      <v-divider></v-divider>
                      <v-card-text class="">
                        <template>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Nama Ruangan
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: Paviliun</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Fasilitas
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: 8 Bed</div><br>
                              <div class="title">: 4 Kipas Angin</div><br>
                              <div class="title">: 16 Kursi</div><br>
                              <div class="title">: 8 Tempat Infus</div><br>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Jumlah Bed
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: 8</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                              <div class="title primary--text text--darken-1">
                                Jumlah Bed Kosong
                              </div>
                            </v-flex>
                            <v-flex xs6>
                              <div class="title">: 4</div>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs4>
                            </v-flex>
                            <v-flex xs6>
                              <!-- <div class="title">: Pasien terbaring lemah,</div> -->
                              <v-divider></v-divider>
                              <!-- <v-btn color="info" outline="">Cetak</v-btn> -->
                              <a href="/administrasi/ruangan_bed">
                                <v-btn color="red" outline="">Kembali</v-btn>
                              </a>
                            </v-flex>
                          </v-layout>
                        </template>
                        <v-divider></v-divider>
                      </v-card-text>
                    </v-card>
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
import items from "@/api/apotek/permintaan_obat";

export default {
  layout: "administrasi/dashboard",

  components: {
    VWidget,
  },
  data() {
    return {
      headers: [
        { text: "Layanan", value: "layanan", align: "center", sortable: false },
        {
          text: "Keterangan",
          value: "keterangan",
          align: "center",
          sortable: false,
        },
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

function goBack() {
  window.history.back();
}
</script>
