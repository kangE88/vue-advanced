//import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from "../api/index.js";
import { fetchList, fetchUserInfo, fetchItemInfo, fetchJobsList, fetchAskList } from "../api/index.js";

export default {
  // 비동기 데이터 호출
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //         console.log(response);
  //         // this.state.news = response.data;
  //         context.commit('SET_NEWS', response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // //디스트럭처링 처리
  // FETCH_ASKS({ commit }) {
  //     return fetchAskList()
  //         .then( ({ data }) => { commit("SET_ASKS", data) })
  //         .catch(error => { console.log(error) });
  // },
  // FETCH_JOBS({ commit }) {
  //     return fetchJobsList()
  //         .then(({ data }) => { commit('SET_JOBS', data) })
  //         .catch(error => { console.log(error); });
  // },
  ////////////////////////////////////////////////////
  //   FETCH_USER_INFO({ commit }, userName) {
  //     return fetchUserInfo(userName)
  //       .then(({ data }) => {
  //         commit("SET_USER_INFO", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   FETCH_ITEM_INFO({ commit }, userId) {
  //     return fetchItemInfo(userId)
  //       .then(({ data }) => {
  //         commit("SET_ITEM_INFO", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   FETCH_LIST({ commit }, pageName) {
  //     //case 1
  //     return fetchList(pageName)
  //       .then(({ data }) => {
  //         commit("SET_LIST", data);
  //         return data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  ////////////////////////////////////////////////////
  // async  await 적용
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //         console.log(response);
  //         // this.state.news = response.data;
  //         context.commit('SET_NEWS', response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },
  // FETCH_JOBS({ commit }) {
  //     return fetchJobsList()
  //         .then(({ data }) => { commit('SET_JOBS', data) })
  //         .catch(error => { console.log(error); });
  // },
  async FETCH_JOBS({ commit }) {
      try {
        const response = await fetchJobsList();
        commit("SET_JOBS", response.data);
        return response;
      } catch (error) {
          console.log(error);
      }
  },
  // FETCH_ASKS({ commit }) {
  //     return fetchAskList()
  //         .then( ({ data }) => { commit("SET_ASKS", data) })
  //         .catch(error => { console.log(error) });
  // },
  async FETCH_ASKS({ commit }) {
    const response = await fetchAskList();
    commit("SET_ASKS", response.data);
    return response;
  },
  //   FETCH_USER_INFO({ commit }, userName) {
  //     return fetchUserInfo(userName)
  //       .then(({ data }) => {
  //         commit("SET_USER_INFO", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_USER_INFO({ commit }, userName) {
    try {
        const response = await fetchUserInfo(userName);
        commit("SET_USER_INFO", response.data);
        return response;
    } catch (error) {
       console.log(error); 
    }
  },
  //   FETCH_ITEM_INFO({ commit }, userId) {
  //     return fetchItemInfo(userId)
  //       .then(({ data }) => {
  //         commit("SET_ITEM_INFO", data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_ITEM_INFO({ commit }, userId) {
    const response = await fetchItemInfo(userId);
    commit("SET_ITEM_INFO", response.data);
    return response;
  },
  //   FETCH_LIST({ commit }, pageName) {
  //     //case 1
  //     return fetchList(pageName)
  //       .then(({ data }) => {
  //         commit("SET_LIST", data);
  //         return data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};