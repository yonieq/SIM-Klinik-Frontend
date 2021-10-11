<template>
  <v-container grid-list-xl fluid>
    <v-card>
      <v-toolbar card>
        <h3>Data Profil Klinik</h3>
      </v-toolbar>
      <v-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <v-layout row wrap>
            <v-flex lg12 sm12>
              <v-text-field
                label="Nama Klinik"
                name="nama"
                v-model="form.nama"
                placeholder="Masukan nama klinik"
                required
              >
              </v-text-field>
            </v-flex>
            <v-flex lg12 sm12>
              <v-layout row wrap>
                <v-flex lg6 sm6>
                  <v-text-field
                    textarea
                    label="Alamat"
                    name="alamat"
                    v-model="form.alamat"
                    placeholder="Masukan alamat klinik"
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex lg6 sm6>
                  <v-text-field
                    label="Nomor Telepon"
                    prepend-icon="phone"
                    name="telepon"
                    mask="phone"
                    v-model="form.telepon"
                    placeholder="Masukan nomor telepon"
                    required
                  >
                  </v-text-field>
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
                    :return-value.sync="statDate"
                  >
                    <v-text-field
                      slot="activator"
                      label="Mulai Berporerasi"
                      v-model="form.beroperasi"
                      append-icon="event"
                      readonly
                      required
                    ></v-text-field>
                    <v-date-picker
                      v-model="form.beroperasi"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="startDateMenu = false"
                        >Cancel</v-btn
                      >

                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.statDate.save(statDate)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-spacer></v-spacer>
            <v-card-actions class="pb-4 pl-3">
              <v-btn type="submit" color="primary" depressed>Simpan</v-btn>
            </v-card-actions>
          </v-layout>
        </b-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Items from "@/api/administrator/ruangan/list_tipe";

export default {
  layout: "administrator/dashboard",
  data() {
    return {
      items: [],
      form: {
        nama: "SRI KLINIK",
        alamat: "Tegal. ........",
        telepon: "0281000000",
        beroperasi: "2021-10-01",
      },
      title: null,
      valid: true,
      date: null,
      startDateMenu: false,
      startDate: null,
      startTimeMenu: false,
      startTime: null,
      endDateMenu: false,
      endDate: null,
      endTimeMenu: false,
      endTime: null,
      modal: false,
      tipe: Items,
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
      this.form.nama = "";
      this.form.fasilitas = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>