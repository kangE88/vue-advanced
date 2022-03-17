//import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from "../api/index.js";
import { fetchList, fetchUserInfo, fetchItemInfo } from "../api/index.js";

export default {
    // 비동기 데이터 호출
    // FETCH_NEWS(context) {
    //   fetchNewsList()
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
    //     fetchAskList()
    //         .then( ({ data }) => { commit("SET_ASKS", data) })
    //         .catch(error => { console.log(error) });
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => { commit('SET_JOBS', data) })
    //         .catch(error => { console.log(error); });
    // },
    FETCH_USER_INFO({ commit }, userName) {
        fetchUserInfo(userName)
            .then(({ data }) => { commit("SET_USER_INFO", data); })
            .catch(error => { console.log(error); });
    },
    FETCH_ITEM_INFO({ commit }, userId) {
        fetchItemInfo(userId)
            .then(({ data }) => { commit("SET_ITEM_INFO", data); })
            .catch(error => { console.log(error); });
    },
    FETCH_LIST({ commit }, pageName){
        fetchList(pageName)
            .then(({ data }) =>{ commit('SET_LIST', data) })
            .catch(error => { console.log(error); });

    }
}