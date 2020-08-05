<template>
  <v-app style="background:#f7f7f7">
    <navbar/>
    <v-main class=' mx-4 mb-4'>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import navbar from '@/components/navbar'
export default {
  name: 'App',

 components:{
   navbar
 },

  data: () => ({
    //
  }),
};
</script>
