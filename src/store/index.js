import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    disease_definition: {},
    message: "",
    disease_list: [],
    alternate_disease: [],
    disease: ""
  },
  mutations: {
    get_disease_def(state, d_def) {
      state.disease_definition = d_def;
    },
    get_message(state, msg) {
      state.message = msg;
    },
    get_diseases(state, d_list) {
      state.disease_list = d_list;
    },
    get_alternate_disease(state, alt_disease) {
      state.alternate_disease = alt_disease;
    },
    get_disease(state, my_disease) {
      state.disease = my_disease;
    }
  },
  actions: {
    get_all_diseases(context) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/api/diseases",
          methods: "GET"
        })
          .then(resp => {
            const d_list = resp.data.disease_list;
            const msg = resp.data.message;

            context.commit("get_diseases", d_list);
            context.commit("get_message", msg);
            resolve(resp);
          })
          .catch(err => {
            const msg = "Failed to retrieve disease";
            context.commit("get_message", msg);
            reject(err);
          });
      });
    },
    get_specific_disease(context, mydisease) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/api/diseases/${mydisease}`,
          method: "GET"
        })
          .then(resp => {
            const d_def = {
              name: resp.data.name,
              description: resp.data.description,
              treatment: resp.data.treatment
            };
            const msg = resp.data.message;
            context.commit("get_disease_def", d_def);
            context.commit("get_message", msg);
            context.commit("get_disease", d_def.name);
            resolve(resp);
          })
          .catch(err => {
            const msg = "Failed to retrieve definition";
            context.commit("get_message", msg);
            reject(err);
          });
      });
    },
    get_my_disease(context, patient) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/api/get-diseases",
          method: "POST",
          data: {
            patients_symptoms: patient.symptoms
          }
        })
          .then(resp => {
            const d_def = {
              name: resp.data.name,
              description: resp.data.description,
              treatment: resp.data.treatment
            };
            const msg = resp.data.message;
            context.commit("get_disease_def", d_def);
            context.commit("get_message", msg);
            resolve(resp);
          })
          .catch(err => {
            const msg = "Failed to retrieve definition";
            context.commit("get_message", msg);
            reject(err);
          });
      });
    },
    get_alt_disease(context, patient) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/api/get-other-diseases",
          method: "POST",
          data: {
            patients_symptoms: patient.symptoms
          }
        })
          .then(resp => {
            const d_def = {
              name: resp.data.name,
              description: resp.data.description,
              treatment: resp.data.treatment
            };
            const msg = resp.data.message;
            context.commit("get_disease_def", d_def);
            context.commit("get_message", msg);
            resolve(resp);
          })
          .catch(err => {
            const msg = "Failed to retrieve definition";
            context.commit("get_message", msg);
            reject(err);
          });
      });
    }
  },
  getters: {
    patient_disease_def: state => {
      return state.disease_definition;
    },
    patient_message: state => {
      return state.message;
    },
    patient_disease_list: state => {
      return state.disease_list;
    },
    patient_alternate_disease: state => {
      return state.alternate_disease;
    },
    patient_disease: state => {
      return state.disease;
    }
  }
});
