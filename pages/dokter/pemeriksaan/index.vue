<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <h3>Data Pemeriksaan</h3>
            </v-toolbar>
            <v-divider></v-divider>
            <v-flex sm12>
              <v-form @submit="onSubmit" v-if="show">
                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>No. Antrian</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="No. Antrian"
                      value="001"
                      color="primary"
                      id="testing"
                      type="number"
                      disabled
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>No. Rekam Medik</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="No. Rekam Medik"
                      value="001"
                      color="primary"
                      id="testing"
                      type="number"
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Nama</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Nama"
                      value="Kodir"
                      color="primary"
                      id="testing"
                      type="text"
                      disabled
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Alamat</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-5"
                      placeholder="Alamat Lengkap"
                      value=""
                      color="teal"
                      multi-line
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Poli</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Jenis Poli"
                      value="Umum"
                      color="primary"
                      id="testing"
                      type="text"
                      disabled
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Keluhan</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="keluhan"
                      v-model="multi1"
                      tags
                      placeholder="Keluhan"
                      multi-line
                      item-text="keluhan"
                      item-value="abbr"
                      return-object
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Tindakan</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="tindakan"
                      v-model="multi1"
                      tags
                      placeholder="Tindakan"
                      multi-line
                      item-text="tindakan"
                      item-value="abbr"
                      return-object
                    ></v-select>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Hasil Diagnosa</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-5"
                      placeholder="Hasil Diagnosa"
                      color="teal"
                      multi-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs1>
                    <v-subheader>Obat</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="obat"
                      v-model="e1"
                      placeholder="Obat"
                      item-text="obat"
                      item-value="abbr"
                      single-line
                    ></v-select>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Dosis</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Dosis"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Aturan Minum</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Aturan Minum"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Jumlah</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Jumlah Obat"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs1>
                    <v-subheader>Obat</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="obat"
                      v-model="e1"
                      placeholder="Obat"
                      item-text="obat"
                      item-value="abbr"
                      single-line
                    ></v-select>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Dosis</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Dosis"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Aturan Minum</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Aturan Minum"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Jumlah</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Jumlah Obat"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs1>
                    <v-subheader>Obat</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="obat"
                      v-model="e1"
                      placeholder="Obat"
                      item-text="obat"
                      item-value="abbr"
                      single-line
                    ></v-select>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Dosis</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Dosis"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Aturan Minum</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Aturan Minum"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Jumlah</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Jumlah Obat"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs1>
                    <v-subheader>Obat</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-select
                      :items="obat"
                      v-model="e1"
                      placeholder="Obat"
                      item-text="obat"
                      item-value="abbr"
                      single-line
                    ></v-select>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Dosis</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Dosis"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Aturan Minum</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Aturan Minum"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs1>
                    <v-subheader>Jumlah</v-subheader>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      name="input-1"
                      placeholder="Jumlah Obat"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Catatan</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-5"
                      placeholder="Catatan"
                      color="teal"
                      multi-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-btn color="success" type="submit">Kirim</v-btn>
              </v-form>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "dokter/dashboard",
  data() {
    return {
      form: {
        nama: "",
        no_hp: "",
        nip: "",
        tmp_lahir: "",
        tgl_lahir: "",
        umur: "",
        goldar: "",
        kp: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.photo = "";
      this.form.no_hp = "";
      this.form.nip = "";
      this.form.tmp_lahir = "";
      this.form.tgl_lahir = "";
      this.form.umur = "";
      this.form.goldar = "";
      this.form.kp = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>