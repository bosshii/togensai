<template>
  <v-dialog width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on"> Add new Project </v-btn>
    </template>
    <v-card>
      <v-card-title>Add a New Project</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>
          <v-menu max-width="290" v-model="menu">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                readonly
                label="Due Date"
                prepend-icon="mdi-calendar"
                clearable
                :value="computedDateFormattedDatefns"
                :rules="inputRules"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="date" @change="menu = false">
            </v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="mx-0 mt-3" color="success" dark @click="submit()">
          Add Project
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";
export default {
  data() {
    return {
      title: "",
      content: "",
      menu: false,
      date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
      inputRules: [
        (value) => value.length >= 3 || "Minimum length is 3 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) console.log(this.title, this.content);
    },
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
    },
  },
};
</script>

<style></style>
