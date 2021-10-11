<template>
  <div id="page-selects">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-btn color="warning" nuxt-link to="." outline depressed
            >Kembali</v-btn
          >
        </v-flex>

        <v-flex sm12>
          <v-card>
            <v-toolbar card color="white">
              <h3>Edit Data Karyawan & Dokter</h3>
            </v-toolbar>
            <v-divider></v-divider>
            <v-flex sm12>
              <v-form @submit="onSubmit" @reset="onReset" v-if="show">
                <v-layout row>
                  <v-flex lg4 sm4>
                    <b-form-group
                      id="input-group-1"
                      label="Photo Karyawan & Dokter"
                      label-for="input-1"
                    >
                      <b-form-file
                        v-model="form.photo"
                        :state="Boolean(photo)"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        accept="image/jpeg, image/png, image/gif, image/jpg"
                      ></b-form-file>
                    </b-form-group>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      label="No. Identitas"
                      v-model="form.nik"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field
                  ></v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs8>
                    <v-text-field
                      name="input-1"
                      label="Nama Karyawan & Dokter"
                      color="primary"
                      v-model="form.nama"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      label="Tempat Lahir"
                      v-model="form.tmp_lahir"
                      color="primary"
                      id="testing"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex sm4 lg4>
                    <v-menu
                      class="pr-2"
                      ref="statDate"
                      lazy
                      :close-on-content-click="false"
                      v-model="tglDateMenu"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-bottom="-22"
                      max-width="290px"
                      :return-value.sync="startDate"
                    >
                      <v-text-field
                        slot="activator"
                        label="Mulai Kontrak/SIP"
                        v-model="form.tgl_lahir"
                        append-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker
                        v-model="form.tgl_lahir"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="tglDateMenu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          flat
                          color="primary"
                          @click="$refs.statDate.save(startDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-text-field
                      name="input-5"
                      label="Alamat Lengkap"
                      v-model="form.alamat"
                      color="teal"
                      multi-line
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs4>
                    <v-select
                      :items="agama"
                      label="Agama"
                      v-model="form.agama"
                      item-text="nama"
                      item-value=""
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-subheader class="pa-0">Jenis Kelamin</v-subheader>
                <v-radio-group v-model="radio2" :mandatory="false" row>
                  <v-radio
                    label="Laki-laki"
                    value="laki-laki"
                    color="secondary"
                  ></v-radio>
                  <v-radio
                    label="Perermpuan"
                    value="perempuan"
                    color="secondary"
                  ></v-radio>
                </v-radio-group>

                <v-layout row>
                  <v-flex xs4>
                    <v-select
                      label="Bagian Kerja"
                      :items="bagian_kerja"
                      v-model="form.bagian_kerja"
                      autocomplete
                      item-text="bagian_kerja"
                      item-value="bagian_kerja"
                      required
                    ></v-select>
                  </v-flex>

                  <v-flex xs4>
                    <v-select
                      v-if="form.bagian_kerja != 'dokter'"
                      disabled
                      :items="poli"
                      v-model="e2"
                      label="Poli (diisi untuk dokter)"
                      item-text="poli"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                    <v-select
                      v-else
                      :items="poli"
                      v-model="e2"
                      label="Poli (diisi untuk dokter)"
                      item-text="poli"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      label="Usia"
                      v-model="form.usia"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs4>
                    <v-select
                      :items="goldar"
                      v-model="form.goldar"
                      label="Gol. Darah"
                      item-text="nama"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      label="No. Telp"
                      v-model="form.no_hp"
                      color="primary"
                      id="testing"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                      name="input-1"
                      label="Status Sidik Jari"
                      color="success"
                      id="testing"
                      value="Sudah"
                      readonly
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4 lg4>
                    <v-menu
                      class="pr-2"
                      ref="statDate"
                      lazy
                      :close-on-content-click="false"
                      v-model="startDateMenu"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-bottom="-22"
                      max-width="290px"
                      :return-value.sync="startDate"
                    >
                      <v-text-field
                        slot="activator"
                        label="Mulai Kontrak/SIP"
                        v-model="form.mulai"
                        append-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="form.mulai" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn
                          flat
                          color="primary"
                          @click="startDateMenu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          flat
                          color="primary"
                          @click="$refs.statDate.save(startDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex sm4 lg4>
                    <v-menu
                      ref="endDate"
                      lazy
                      class="pr-2"
                      :close-on-content-click="false"
                      v-model="endDateMenu"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-bottom="-22"
                      min-width="290px"
                      :return-value.sync="endDate"
                    >
                      <v-text-field
                        slot="activator"
                        label="Akhir Kontrak/SIP"
                        v-model="form.akhir"
                        append-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="form.akhir" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="endDateMenu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          flat
                          color="primary"
                          @click="$refs.endDate.save(endDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
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
import Bagian_kerja from "@/api/administrator/bagian_kerja/data";

export default {
  layout: "administrator/dashboard",
  data() {
    return {
      form: {
        bagian_kerja: "apotek",
        nama: "Hobart",
        photo: "Hobart.png",
        alamat: "706 Padberg Knoll Port Mablefurt	",
        no_hp: "098098098",
        nik: "667855545675654",
        tmp_lahir: "Jakarta",
        tgl_lahir: "17-09-1987",
        usia: "30",
        agama: "Islam",
        mulai: "2019-10-02",
        akhir: "2023-10-02",
        goldar: "B",
        kp: "",
      },
      agama: [
        { nama: "Islam" },
        { nama: "Kristen" },
        { nama: "Katholik" },
        { nama: "Hindu" },
        { nama: "Budha" },
      ],
      goldar: [
        { nama: "A" },
        { nama: "B" },
        { nama: "AB" },
        { nama: "O" },
      ],
      title: null,
      valid: true,
      date: null,
      tglDateMenu: false,
      startDateMenu: false,
      startDate: null,
      startTimeMenu: false,
      startTime: null,
      endDateMenu: false,
      endDate: null,
      endTimeMenu: false,
      endTime: null,
      modal: false,
      show: true,
      bagian_kerja: Bagian_kerja,
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
