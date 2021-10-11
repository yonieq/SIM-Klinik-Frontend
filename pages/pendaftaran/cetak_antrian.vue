<template>
  <!-- <h2>- nama klinik
    - alamat klinik
    - nomor antrian
    - poli
    - ruang poli
    - banyaknya antrian
    - mohon tunggu! kami akan segera melayani anda
    - tanggal
</h2> -->

  <v-container>
    <v-layout>
      <v-flex lg4 sm12>
        <v-card>
          <v-card-title class="pb-0">
            
          </v-card-title>
          <v-card-text align="center">
            <h3>SRI Klinik</h3>
            <h5>Tegal</h5>
            <v-divider></v-divider>
            <h6>08/10/2021</h6>
            <h4>Antrian Anda<h1>: 012</h1></h4>
            <h4>Poli Umum</h4>
            <h4>Ruangan : Poli Umum</h4>
            <h4>Banyaknya antrian : 11 pasien</h4>
            <h4>Mohon Menunggu!</h4>
            <h4>Kami akan segera melayani anda.</h4>
            
          </v-card-text>
          <v-card-actions>
            <v-btn flat small outline color="info">Cetak</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "pendaftaran/dashboard",
  data() {},
};
</script>