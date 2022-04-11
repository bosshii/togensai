<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar color="blue" size="60">
                <span class="white--text">{{ person.initials }}</span>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Simone", role: "Web Designer", initials: "S" },
        { name: "Michael", role: "Forum", initials: "MIC" },
        { name: "Bebeinha", role: "Coder", initials: "BB" },
        { name: "Min", role: "Video", initials: "MIN" },
      ],
    };
  },
};
</script>

<style></style>
