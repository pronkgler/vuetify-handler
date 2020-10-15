<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="n in 10" :key="n" cols="2">
        <Card></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Card from '../components/Card'

  export default {
    name: 'HomePage',

    components: {
      Card
    },

    data: () => ({
    }),
  }
</script>
