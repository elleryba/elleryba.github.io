export class TechnicalSkillMutations {
}
TechnicalSkillMutations.SET_SKILLS = 'SET_SKILLS';
export const mutations = {
    SET_SKILLS(state, payload) {
        state.skills = payload.skills;
    }
};
export default mutations;
//# sourceMappingURL=mutations.js.map