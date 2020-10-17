<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="4">
                <v-list>
                    <v-subheader>REPORTS</v-subheader>
                    <v-list-item-group
                        v-model="selectedItem"
                        color="primary"
                        @change="onItemClick"
                    >                    
                        <v-list-item
                            v-for="(item, idx) in items"
                            :key="idx"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name + ` - cal: ${item.calories}`"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>

            <v-col cols="6">
                <v-form
                    ref="form"
                    v-model="form.valid"
                    lazy-validation
                >
                    <v-text-field
                        v-model="form.item.name"
                        :counter="10"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="form.item.calories"
                        label="Calories"
                        required
                    ></v-text-field>

                    <v-btn
                        :disabled="!form.valid"
                        color="success"
                        class="mr-4"
                    >
                        Validate
                    </v-btn>

                    <v-btn
                        color="error"
                        class="mr-4"
                    >
                        Reset Form
                    </v-btn>

                    <v-btn
                        color="warning"
                    >
                        Reset Validation
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
    import getDesserts from '../lib/sample';

    export default {
        methods: {
            onItemClick(event) {
                console.log('onItemClick', {event, sel: this.selectedItem, item: this.items[this.selectedItem]});
            }
        },
        watch: {
            selectedItem(value, oldValue) {
                console.log('watch.selectedItem', {ths: this, value, oldValue});

                this.form.item = this.items[this.selectedItem];
            }
        },
        data: () => ({
            selectedItem: null,
            items: getDesserts(),
            form: {
                item: {
                    name: null,
                    calories: 0,
                },
                valid: null,
            },
        })
    }
</script>
