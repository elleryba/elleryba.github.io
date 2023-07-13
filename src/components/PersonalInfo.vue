<template>
  <v-row class="pa-2">
      <SkeletonLoader v-if="isLoading"/>
      <v-card
        v-else
        class="my-auto mx-auto"
        max-width="500"
        elevation="5"
      >
        <v-card-title>Personal</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <div class="text-subtitle-1">A Day in the Life...</div>
          </v-row>
          <v-row class="my-2 mx-0">
            <div align="left" class="text-subtitle-3 my-2">
              <p>In my personal time I enjoy playing
                <a
                  href="https://powerwash-simulator.square-enix-games.com/en-us/"
                  target="_blank"
                >
                  Power Wash Simulator</a> via
                <a
                  href="https://www.xbox.com/en-US/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0"
                  target="_blank"
                >
                  Xbox Game Pass</a>. I am currently reading through
                  <a
                    href="https://www.marvel.com/comics/series/24396/the_amazing_spider-man_2018_-_2022"
                    target="_blank"
                  >
                    The Amazing Spider-Man</a> 2018-2022 comic series.
                    I will also be looking to rewrite this site as a React project in the future...
              </p>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
  </v-row>
</template>

<script lang="ts">
import { isEmpty } from 'lodash'
import { computed, defineComponent, ref } from '@vue/composition-api'

import SkeletonLoader from '@/components/SkeletonLoader.vue'
import store from '@/store'
import { ResumeGetters } from '@/store/modules/resume/getters'
import { JobItemInterface } from '@/store/modules/resume/types'
import { TechnicalExperienceGetters } from '@/store/modules/technical-experience/getters'
import { TechnicalExperienceInterface } from '@/store/modules/technical-experience/types'
import { TechnicalSkillGetters } from '@/store/modules/technical-skills/getters'
import { TechnicalSkillInterface } from '@/store/modules/technical-skills/types'

export default defineComponent({
  name: 'PersonalInfo',
  components: {
    SkeletonLoader
  },
  setup() {
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
      isLoading
    }
  }
})
</script>
