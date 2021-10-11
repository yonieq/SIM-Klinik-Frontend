<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="room_preferences"
            title="23"
            sub-title="Ruangan"
            color="green darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="person_pin"
            title="30"
            sub-title="Pegawai"
            color="blue darken-1"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="people_alt"
            title="10"
            sub-title="Divisi / Bagian Kerja"
            color="red darken-2"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="fact_check"
            title="10"
            sub-title="Pegawai Telah Hadir Hari Ini"
            color="purple darken-1"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="timelapse"
            title="5"
            sub-title="Akan Lembur Hadir Hari Ini"
            color="cyan darken-2"
          >
          </mini-statistic>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <h3>
    Statistiek pemeriksaan dan data passen <br>
		statistik data karyawan dan bagian kerja <br>
		statistik data ruangan dan fungsinya <br>
		statistik data obat stok pejualan dan masuk <br>
		statistik estimasi data pendapatan klinik dan pengeluaran klinik bulan ini <br>
</h3> -->
  </div>
</template>

<script>
import API from "@/api";
import EChart from "@/components/chart/echart";
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import PostListCard from "@/components/widgets/card/PostListCard";
import ProfileCard from "@/components/widgets/card/ProfileCard";
import PostSingleCard from "@/components/widgets/card/PostSingleCard";
import WeatherCard from "@/components/widgets/card/WeatherCard";
import PlainTable from "@/components/widgets/list/PlainTable";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder";
import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";
import VCircle from "@/components/circle/VCircle";
import BoxChart from "@/components/widgets/chart/BoxChart";
import ChatWindow from "@/components/chat/ChatWindow";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic";

import {Items as Users} from '@/api/administrator/rujukan//data';


export default {
    layout: 'administrator/dashboard',
    components: {
      MiniStatistic,
    },
    data() {
      return {
        search: '',
        complex: {
   
          headers: [
            {
              text: 'No. rekam medis',
              value: 'no_rm'
            },
            {
              text: 'Nama',
              value: 'nama'
            },
            {
              text: 'Alamat',
              value: 'alamat'
            },
            {
              text: 'Tanggal periksa',
              value: 'tanggal_periksa'
            },
            {
              text: 'Nama dokter',
              value: 'dokter'
            },
            {
              text: 'Tindakan',
              value: ''
            },
          ],
          items: Users
        },
      };
    }
  };</script>
