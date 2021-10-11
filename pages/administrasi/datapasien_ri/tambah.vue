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
                    <v-subheader>Nomor RM</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-3"
                      value="RM-21091108-152"
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Nama Pasien</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-select
                      label="Pilih Nama Pasien"
                      :items="name"
                      v-model="e7"
                      autocomplete
                      item-text="nama_pasien"
                      item-value="abbr"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Nama Dokter</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-3"
                      value="Joko"
                      disabled
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Nama Ruangan</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-select
                      label="Pilih Nama Ruangan"
                      :items="ruangan"
                      v-model="e7"
                      autocomplete
                      item-text="nama_ruangan"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Nomor Bed</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-select
                      label="Pilih Nomer Bed"
                      :items="bed"
                      v-model="e7"
                      autocomplete
                      item-text="no_bed"
                      item-value="abbr"
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-btn color="blue" outline="">Simpan</v-btn>
                <a href="/administrasi/datapasien_ri">
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
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import Name from "@/api/administrasi/regispasien_ri/name";

export default {
  layout: "administrasi/dashboard",
  components: {
    MiniStatistic,
  },
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      multi1: [],
      multi2: [],
      multi3: [],
      multi4: [],
      multi5: [],
      name: Name,
    };
  },
  computed: {},
  watch: {
    search(val) {
      val && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.name.filter((e) => {
          return (
            (e.nama_pasien || "")
              .toLowerCase()
              .indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
  },
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      multi1: [],
      multi2: [],
      multi3: [],
      multi4: [],
      multi5: [],
      ruangan: Ruangan,
    };
  },
  computed: {},
  watch: {
    search(val) {
      val && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.ruangan.filter((e) => {
          return (
            (e.nama_ruangan || "")
              .toLowerCase()
              .indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
  },
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      multi1: [],
      multi2: [],
      multi3: [],
      multi4: [],
      multi5: [],
      bed: Bed,
    };
  },
  computed: {},
  watch: {
    search(val) {
      val && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.bed.filter((e) => {
          return (
            (e.no_bed || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>
