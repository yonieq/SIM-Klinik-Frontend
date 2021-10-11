<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Nama Supplier</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-3"
                      type="text"
                      value="Dono"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Jumlah</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-3"
                      type="number"
                      value="10"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Tanggal</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-3"
                      type="date"
                      value="10"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-btn color="blue" outline="">Simpan</v-btn>
                <a href="/kepala_apotek/gas_medis/penyerahan">
                  <v-btn color="red" outline="">Kembali</v-btn>
                </a>
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
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";

export default {
  layout: "kepala_apotek/dashboard",
  components: {
    MiniStatistic,
  },
};
</script>
