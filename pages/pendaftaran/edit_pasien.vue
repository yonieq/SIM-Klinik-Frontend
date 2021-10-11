<template>
  <div id="page-selects">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <a href="/pendaftaran/daftar_pasien">
          <v-flex sm12>
            <v-btn class="warning">Kembali</v-btn>
          </v-flex>
        </a>

        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <h3>Edit Data Pasien</h3>
            </v-toolbar>
            <v-divider></v-divider>
            <v-flex sm12>
              <v-form @submit="onSubmit" v-if="show">
                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Tanggal Periksa</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Tanggal Periksa"
                      color="primary"
                      id="testing"
                      type="date"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>No. Identitas</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="No. Identitas"
                      value="1234567890"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Nama Pasien</v-subheader>
                  </v-flex>
                  <v-flex xs10>
                    <v-text-field
                      name="input-1"
                      placeholder="Nama Pasien"
                      value="Dessie"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Tempat Lahir</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Tempat Lahir"
                      value="Mayer Greens"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Tanggal Lahir</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Tanggal Lahir"
                      color="primary"
                      id="testing"
                      type="date"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Alamat</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-5"
                      placeholder="Alamat Lengkap"
                      value="street 431 Grimes Common suite Apt. 530 city East Lunahaven state Virginia country Hungary"
                      color="teal"
                      multi-line
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Agama</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="agama"
                      v-model="e2"
                      placeholder="Agama"
                      item-text="agama"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Jenis Kelamin</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-radio-group v-model="radio2" :mandatory="false" row>
                      <v-radio
                        label="Laki-laki"
                        value="laki-laki"
                        color="info"
                      ></v-radio>
                      <v-radio
                        label="Perermpuan"
                        value="perempuan"
                        color="info"
                      ></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Asuransi</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="asuransi"
                      v-model="e2"
                      placeholder="Asuransi"
                      item-text="asuransi"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>No. Asuransi</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="No. Asuransi"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Pekerjaan</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Pekerjaan"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>No. Telp</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="No. Telp"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Usia</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      placeholder="Usia"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Gol. Darah</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="gol_darah"
                      v-model="e2"
                      placeholder="Gol. Darah"
                      item-text="gol_darah"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Poliklinik</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="poli"
                      v-model="e2"
                      placeholder="Poliklinik"
                      item-text="poli"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>

                  <v-flex xs2>
                    <v-subheader>Dokter</v-subheader>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                      :items="dokter"
                      v-model="e2"
                      placeholder="Dokter"
                      item-text="dokter"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-btn type="submit" variant="primary" color="info"
                  >Simpan</v-btn
                >
                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
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
  layout: "pendaftaran/dashboard",
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
  },
};
</script>
