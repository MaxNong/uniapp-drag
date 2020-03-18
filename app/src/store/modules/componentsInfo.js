import api from "@/common/http/api.js";

const state = {
  componentsData: [
	//   {
	// 	  name: 'EashSwiper',
	// 	  data: {
	// 		  name: 'EashSwiper'
	// 	  }
	//   }
  ]
};

const getters = {};

const actions = {};

const mutations = {
  setComponentsData(state, componentsData) {
    state.componentsData = componentsData;
  }
};

export default {
  namespaces: true,
  state,
  getters,
  actions,
  mutations
};
