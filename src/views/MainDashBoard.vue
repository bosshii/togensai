<template>
  <div class="Maindashboard">
    <h1 class="subtitle-1 grey--text">DashBoard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Sort By Projects Name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort By Person</span>
        </v-tooltip>
      </v-row>
      <v-card
        flat
        class="pa-3"
        v-for="project in projects"
        :key="project.person"
      >
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="3" sm="4" md="2">
            <div class="d-flex justify-end">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Simone",
          due: "01st March 2022",
          status: "ongoing",
          content:
            "Loren djcdsbchjdsbcbscasbjdcSDCSDN SB CJA VCJVAVCVSDVFBHHDSCAFVB",
        },
        {
          title: "Forum",
          person: "Michael",
          due: "01st March 2022",
          status: "complete",
          content:
            "Loren djcdsbchjdsbcbscasbjdcSDCSDN SB CJA VCJVAVCVSDVFBHHDSCAFVB",
        },
        {
          title: "Code",
          person: "Bebeinha",
          due: "01st March 2022",
          status: "complete",
          content:
            "Loren djcdsbchjdsbcbscasbjdcSDCSDN SB CJA VCJVAVCVSDVFBHHDSCAFVB",
        },
        {
          title: "Video",
          person: "Min",
          due: "01st March 2022",
          status: "overdue",
          content:
            "Loren djcdsbchjdsbcbscasbjdcSDCSDN SB CJA VCJVAVCVSDVFBHHDSCAFVB",
        },
      ],
    };
  },
  methods: {
    sortBy(param) {
      this.projects.sort(function (a, b) {
        return a[param] < b[param] ? -1 : a.person > b.person ? 1 : 0;
      });
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.theme--light.v-chip.complete:not(.v-chip--active) {
  background: #3cd1c2;
}

.theme--light.v-chip.ongoing:not(.v-chip--active) {
  background: orange;
}

.theme--light.v-chip.overdue:not(.v-chip--active) {
  background: tomato;
}
</style>
