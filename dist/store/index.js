import Vue from 'vue';
import Vuex from 'vuex';
import resume from './modules/resume';
import technicalExperience from './modules/technical-experience';
import technicalSkills from './modules/technical-skills';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        resume,
        technicalExperience,
        technicalSkills
    },
});
//# sourceMappingURL=index.js.map