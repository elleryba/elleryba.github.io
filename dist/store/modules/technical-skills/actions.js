import axios from 'axios';
import { TechnicalSkillMutations } from './mutations';
import { isEmpty } from 'lodash';
export class TechnicalSkillActions {
}
/** Loads all technical skills from the api. */
TechnicalSkillActions.GetTechnicalSkills = 'technicalSkills/getTechnicalSkills';
/** For use in front-end only version of app. */
TechnicalSkillActions.SetTechnicalSkills = 'technicalSkills/setTechnicalSkills';
export const actions = {
    getTechnicalSkills({ commit }) {
        axios
            .get('http://localhost:41368/api/technical_skills')
            .then((response) => {
            if (isEmpty(response?.data))
                throw new Error('response is empty');
            const skills = response.data;
            commit(TechnicalSkillMutations.SET_SKILLS, { skills: skills });
            return skills;
        })
            .catch(e => console.error('technicalSkills/getTechnicalSkills :: failed', e));
    },
    setTechnicalSkills({ commit }) {
        const data = {
            skills: [
                'JavaScript',
                'HTML',
                'CSS',
                'Vue.js',
                'Visual Studio Code',
                'TypeScript',
                'C#',
                '.NET',
                'SQL',
                'NoSQL',
                'SQL Server Management Studio',
                'MongoDB',
                'Visual Studio',
                'Azure DevOps',
                'Postman'
            ]
        };
        commit(TechnicalSkillMutations.SET_SKILLS, { skills: data.skills });
    }
};
export default actions;
//# sourceMappingURL=actions.js.map