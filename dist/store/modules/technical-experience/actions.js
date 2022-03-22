import axios from 'axios';
import { TechnicalExperienceMutations } from './mutations';
import { isEmpty } from 'lodash';
export class TechnicalExperienceActions {
}
/** Loads technical experience from the api. */
TechnicalExperienceActions.GetTechnicalExperience = 'technicalExperience/getTechnicalExperience';
/** For front-end only version of the app. */
TechnicalExperienceActions.SetTechnicalExperience = 'technicalExperience/setTechnicalExperience';
export const actions = {
    getTechnicalExperience({ commit }) {
        axios
            .get('http://localhost:41368/api/technical_experience')
            .then((response) => {
            if (isEmpty(response?.data))
                throw new Error('response is empty');
            const items = response.data;
            commit(TechnicalExperienceMutations.SET_SKILLS, { items: items });
            return items;
        })
            .catch(e => console.error('technicalExperience/getTechnicalExperience :: failed', e));
    },
    setTechnicalExperience({ commit }) {
        const data = {
            items: ['Engineered a back-end microservice framework within multiple domain driven apis. Full-stack project. Involved in all aspects of development. Responsible for maintaining and refining code as well as interpreting user stories to build out new features. Worked closely with testers to resolve bugs as they were reported.'
            ]
        };
        commit(TechnicalExperienceMutations.SET_SKILLS, { items: data.items });
    }
};
export default actions;
//# sourceMappingURL=actions.js.map