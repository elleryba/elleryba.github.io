<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon
          v-if="this.$vuetify.breakpoint.mdAndUp"
          size="28"
          color="background"
        >
          mdi-newspaper-variant-outline
        </v-icon>
        <span
          class="name"
          :style="{ color: $vuetify.theme.themes[theme].background }"
        >
          ELLE RYBA
        </span>
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <PhoneInfo />
      </v-toolbar-items>

      <v-toolbar-items>
        <EmailInfo />
      </v-toolbar-items>

      <v-toolbar-items>
        <LinkedInInfo />
      </v-toolbar-items>

      <v-toolbar-items>
        <GitHubInfo />
      </v-toolbar-items>

      <v-toolbar-items>
        <ThemeChanger />
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container class="d-flex justify-center">
        <v-col cols="12">
          <AboutMe />
          <TechnicalExperience />
          <PersonalInfo />
        </v-col>
      </v-container>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import AboutMe from '@/components/AboutMe.vue'
import EmailInfo from '@/components/EmailInfo.vue'
import GitHubInfo from '@/components/GitHubInfo.vue'
import LinkedInInfo from '@/components/LinkedInInfo.vue'
import PersonalInfo from '@/components/PersonalInfo.vue'
import PhoneInfo from '@/components/PhoneInfo.vue'
import TechnicalExperience from '@/components/TechnicalExperience.vue'
import ThemeChanger from '@/components/ThemeChanger.vue'

// lets use composition api here to defineComponent
export default Vue.extend({
  name: 'App',
  components: {
    AboutMe,
    EmailInfo,
    GitHubInfo,
    LinkedInInfo,
    PersonalInfo,
    PhoneInfo,
    TechnicalExperience,
    ThemeChanger
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&family=Roboto&family=Ubuntu&display=swap');

.v-application{
  font-family: 'Nunito', sans-serif;
}
</style>
