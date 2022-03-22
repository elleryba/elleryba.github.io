<template>
  <div>
    <v-row
        no-gutters
        style="height: 150px;"
    >
      <div v-if="isLoading">
        <SkeletonLoader />
      </div>
      <v-card
        v-else
        class="my-4 mx-4"
        max-width="500"
        height="650"
        elevation="5"
      >
        <v-img
          max-height="350"
          :src="profilePic"
        ></v-img>

        <v-card-title>Elle Ryba</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0 my-0"
          >
            <div class="text-subtitle-1">
              Front-end only resume
            </div>
          </v-row>
          <v-row class="my-2 mx-0">
            <div align="left" class="text-subtitle-3">
              This project started as front-end only resume app to help refine my skills. I have now built
              out a full stack project with data being served up to the client from Sql Server via a RESTful
              api. The code for that version of this project can be found <a target="blank" href="https://github.com/elleryba/vuetify-resume">here</a>.
              I am now researching how I can deploy the full stack version. While I learn, I have created this front-end
              only version to deploy via Github Pages.
            </div>
          </v-row>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <Resume />

      </v-card>
      <v-row
        no-gutters
        style="height: 150px;"
      >
        <div v-if="isLoading">
          <SkeletonLoader />
        </div>
        <v-card
          v-else
          color="primary"
          class="my-4 mx-4"
          max-width="500"
          height="650"
          elevation="5"
        >
          <TechnicalExperience />
          <PersonalInfo />
        </v-card>
      </v-row>
    </v-row>
  </div>
</template>

<script lang="ts">
import { isEmpty } from 'lodash'
import { computed, defineComponent, ref } from '@vue/composition-api'
import PersonalInfo from '@/components/PersonalInfo.vue'
import Resume from '@/components/Resume.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import TechnicalExperience from '@/components/TechnicalExperience.vue'
import store from '@/store'
import { JobItemInterface } from '@/store/modules/resume/types'
import { ResumeGetters } from '@/store/modules/resume/getters'
import { TechnicalExperienceGetters } from '@/store/modules/technical-experience/getters'
import { TechnicalExperienceInterface } from '@/store/modules/technical-experience/types'
import { TechnicalSkillGetters } from '@/store/modules/technical-skills/getters'
import { TechnicalSkillInterface } from '@/store/modules/technical-skills/types'

export default defineComponent({
  name: 'AboutMe',
  components: {
    PersonalInfo,
    Resume,
    SkeletonLoader,
    TechnicalExperience
  },
  setup() {
    const alignments = [ 'start', 'center', 'end' ]
    const isLoading = ref<boolean>(true)
    const resumeData = computed<Array<JobItemInterface>>(() => store.getters[ResumeGetters.All])
    const experienceData = computed<Array<TechnicalExperienceInterface>>(() => store.getters[TechnicalExperienceGetters.All])
    const skills = computed<Array<TechnicalSkillInterface>>(() => store.getters[TechnicalSkillGetters.All])

    async function loadingCheck() {
      while(isEmpty(resumeData) || isEmpty(experienceData) || isEmpty(skills))
        isLoading.value = true
      
      // let the people see the pretty lil skeleton loader
      setTimeout(() =>
        isLoading.value = false, 2000)
    }

    loadingCheck()

    return {
      alignments,
      isLoading
    }
  },
  data: () => ({
    profilePic: require('../assets/profile_pic.png')
  })
})
</script>