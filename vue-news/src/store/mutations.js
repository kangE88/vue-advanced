export default {
  //actions에서 받아와 mutations를 통해서 state에 전달
  SET_NEWS(state, newsData) {
    state.news = newsData;
  },
  SET_ASKS(state, asksData) {
    state.asks = asksData;
  },
  SET_JOBS(state, jobsData) {
    state.jobs = jobsData;
  },
  SET_USER_INFO(state, userData) {
    state.userInfo = userData;
  },
  SET_ITEM_INFO(state, itemData) {
    state.itemInfo = itemData;
  },
};