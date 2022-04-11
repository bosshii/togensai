<template>
  <div class="project">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
        {
          title: "FullStack Developer",
          person: "Michael",
          due: "01st March 2022",
          status: "complete",
          content:
            "Loren djcdsbchjdsbcbscasbjdcSDCSDN SB CJA VCJVAVCVSDVFBHHDSCAFVB",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => project.person === "Michael");
    },
  },
};
</script>

<style></style>
