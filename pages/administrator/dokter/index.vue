<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Data Dokter</h3>
        </v-flex>
        <a href="/admin/dokter/tambah">
          <v-flex sm12>
            <v-btn class="primary">Tambah Data</v-btn>
          </v-flex>
        </a>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Ketik Nama Dokter"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="name"
                
              >
                <template slot="items" slot-scope="props">
                  
                  <td>{{ props.item.no }}</td>
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="">
                    </v-avatar>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.phone }}</td>
                  <td>{{ props.item.spesialis }}</td>
                  <td>{{ props.item.praktek }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="warning" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import {Items as Users} from '@/api/administrator/dokter/data';

  export default {
    layout: "administrator/dashboard",
    data() {
      return {
        search: '',
        complex: {
   
          headers: [
            {
              text: 'No',
              value: 'no'
            },
            {
              text: 'Photo',
              value: 'avatar'
            },
            {
              text: 'Name',
              value: 'name'
            },
            {
              text: 'Email',
              value: 'email'
            },
            {
              text: 'Phone',
              value: 'phone'
            },
            {
              text: 'Spesialis',
              value: 'spesialis'
            },
            {
              text: 'Praktek',
              value: 'praktek'
            },
            {
              text: 'Action',
              value: ''
            },
          ],
          items: Users
        },
      };
    }
  };
</script>
