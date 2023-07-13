import { ActionTree } from 'vuex'
import axios from 'axios'
import { RootState } from '../../types'
import { TechnicalExperienceApiResponseInterface, TechnicalExperienceInterface, TechnicalExperienceStoreInterface } from './types'
import { TechnicalExperienceMutations } from './mutations'
import { isEmpty } from 'lodash'

export class TechnicalExperienceActions {
  /** Loads technical experience from the api. */
  public static GetTechnicalExperience = 'technicalExperience/getTechnicalExperience'

  /** For front-end only version of the app. */
  public static SetTechnicalExperience = 'technicalExperience/setTechnicalExperience'
}

export const actions: ActionTree<TechnicalExperienceStoreInterface, RootState> = {
    getTechnicalExperience({ commit }) {
    axios
      .get<TechnicalExperienceApiResponseInterface>('http://localhost:41368/api/technical_experience')
      .then<TechnicalExperienceInterface>((response) => {
        if (isEmpty(response?.data)) throw new Error('response is empty')
        
        const items = response.data as TechnicalExperienceInterface

        commit(TechnicalExperienceMutations.SET_SKILLS, { items: items })
        return items
      })
      .catch(e => console.error('technicalExperience/getTechnicalExperience :: failed', e))
  },
  setTechnicalExperience({ commit }) {
    const data = { 
      items: [ 'Currently working on a custom inventory control system for third party vendors to track product inventory. Large amounts of data that require strict calculations and recurring cycle counts. Two person dev team working closely with business partners to deliver requested features to help onboard additional users.',
        'Worked on a SaaS site for grantors and grantees to manage grant lifecycles. Worked closely with product owners to plan and deliver new site functionality. Focused on delivering results to assist the company with client retention as well as signing new client contracts. Involved in all aspects of development, including backlog refinement and sprint planning.',
        'Part of a team that engineered a microservice framework within multiple domain driven apis for writing and binding insurance policies. Full-stack project. Involved in all aspects of development. Responsible for maintaining and refining code as well as interpreting user stories to build out new features. Worked closely with testers to resolve bugs as they were reported.' 
      ]} as TechnicalExperienceInterface
    commit(TechnicalExperienceMutations.SET_SKILLS, { items: data.items })
  }
}

export default actions