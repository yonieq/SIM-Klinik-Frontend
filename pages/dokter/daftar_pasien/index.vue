<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-widget title="Daftar Pasien" class="mt-3">
        <div slot="widget-content">
          <v-container>
            <v-layout row wrap>
              <v-flex sm6 lg6>
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
                    label="Start Date"
                    v-model="startDate"
                    append-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="startDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="startDateMenu = false"
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

              <v-flex sm6 lg6>
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
                    label="End Date"
                    v-model="endDate"
                    append-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="endDate" no-title scrollable>
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
          </v-container>
        </div>
      </v-widget>

      <v-flex lg12>
        <v-card>
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
                <td>{{ props.index }}</td>
                <td>{{ props.item.no_rekam_medis }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.alamat }}</td>
                <td>{{ props.item.usia }}</td>
                <td>{{ props.item.jenis_kelamin }}</td>
                <td>{{ props.item.asuransi }}</td>
                <td>{{ props.item.poli }}</td>
                <td>
                  <v-btn color="info" outline to="/dokter/pemeriksaan"
                    >Periksa</v-btn
                  >
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import { Items as Users } from "@/api/dokter/data_pasien";

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

      complex: {
        headers: [
          {
            text: "No",
            // value: "avatar",
          },
          {
            text: "No. RM",
            value: "no_rekam_medis",
          },
          {
            text: "Name",
            value: "name",
          },
          {
            text: "Alamat",
            value: "alamat",
          },
          {
            text: "Usia",
            value: "usia",
          },
          {
            text: "Jenis Kelamin",
            value: "jenis_kelamin",
          },
          {
            text: "Asuransi",
            value: "asuransi",
          },
          {
            text: "Poli",
            value: "poli",
          },
          {
            text: "Aksi",
            value: "",
          },
        ],
        items: Users,
      },
    };
  },
};
</script>

