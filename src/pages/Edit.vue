<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="6">

            </v-col>
            <v-col cols="4">
                <v-list>
                    <v-subheader>REPORTS</v-subheader>
                    <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                    >                    
                        <v-list-item
                            v-for="(item, idx) in items"
                            :key="idx"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
    import getDesserts from '../lib/sample';

    export default {
        data: () => ({
            selectedItem: null,
            items: getDesserts(),
            current: null
        })
    }
</script>
