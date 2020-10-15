<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        Home Page :)

        <v-container>
          <v-row class="text-center">
            <v-col cols="12">
              <Card></Card>
              <Card></Card>
            </v-col>
          </v-row>
        </v-container>
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
