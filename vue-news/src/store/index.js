import { createStore } from "vuex";
import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index.js";

export default createStore({
  state: {
    news: [],
    asks: [],
    jobs: [],
  },
  getters: { //computed와 동일하고 
    fetchedAsk(state) {
        return state.asks;
    }
  },
  mutations: {
    //actions에서 받아와 mutations를 통해서 state에 전달
    SET_NEWS(state, newsData) {
        state.news = newsData;
    },
    SET_ASKS(state, asksData) {
        state.asks = asksData;
    },
    SET_JOBS(state, jobsData) {
        state.jobs = jobsData;
    }
  },
  actions: {
    // 비동기 데이터 호출
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
            console.log(response);
            // this.state.news = response.data;
            context.commit('SET_NEWS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //디스트럭처링 처리
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then( ({ data }) => { commit("SET_ASKS", data ); })
            .catch(error => { console.log(error) });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => { commit('SET_JOBS', data) })
            .catch(error => { console.log(error); });
    }
  },
});