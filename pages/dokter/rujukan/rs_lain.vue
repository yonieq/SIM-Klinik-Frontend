<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <h3>Rujukan Ke Rumah Sakit</h3>
            </v-toolbar>
            <v-divider></v-divider>
            <v-flex sm12>
              <v-form @submit="onSubmit" @reset="onReset" v-if="show">
                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Nama Dokter</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-1"
                      placeholder="Masukan nama dokter"
                      color="primary"
                      id="testing"
                      type="text"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Nama Rumah Sakit</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-1"
                      placeholder="Masukan nama rumah sakit"
                      color="primary"
                      id="testing"
                      type="text"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Nama Pasien</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-1"
                      placeholder="Masukan nama pasien"
                      color="primary"
                      id="testing"
                      type="text"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Usia</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-1"
                      placeholder="Masukan usia pasien"
                      color="primary"
                      id="testing"
                      type="number"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Alamat</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-5"
                      placeholder="Masukan alamat lengkap"
                      color="teal"
                      multi-line
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Hasil Pemeriksaan Sementara</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-5"
                      placeholder="Masukan hasil pemeriksaan sementara"
                      color="teal"
                      multi-line
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Hasil Tindakan Sementara</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-5"
                      placeholder="Masukan hasil tindakan sementara"
                      color="teal"
                      multi-line
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Kondisi Pasien</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-5"
                      placeholder="Kondisi pasien saat akan dirujuk"
                      color="teal"
                      multi-line
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs2>
                    <v-subheader>Catatan</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      name="input-5"
                      placeholder="Catatan"
                      color="teal"
                      multi-line
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-btn type="submit" color="success">Simpan</v-btn>
                <v-btn type="reset" color="red">Reset</v-btn>
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