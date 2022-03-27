<template>
  <v-row>
    <v-col>
      <v-card
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
            <div align="left" class="text-subtitle-3">
              <p>In my personal time I am playing through the
              <a
                href="https://www.ea.com/games/mass-effect/mass-effect-legendary-edition"
                target="_blank"
              >
                Mass Effect</a> trilogy via
              <a
                href="https://www.xbox.com/en-US/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0"
                target="_blank"
              >
                Xbox Game Pass</a>. Happy to report I have finished the first two games, 
                and I am working through the third.</p>
               <p>I am also working on this resume project, which I hope is obvious.</p>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PersonalInfo'
})
</script>
