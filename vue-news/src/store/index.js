import { createStore } from "vuex";
import actions from './actions';
import mutations from './mutations';

export default createStore({
  state: {
    news: [],
    asks: [],
    jobs: [],
    userInfo: {},
    itemInfo: [],
  },
  getters: { //computed와 동일하고 store에 존재함
    fetchedAsk(state) {
        return state.asks;
    },
    // fetchedUserInfo(state) {
    //     return state.userInfo;
    // }
  },
  //mutations: mutations, -> 앞뒤가 같기때문에 아래와 같이 사용 가능
  mutations,
  actions
});