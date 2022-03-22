import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
    //return axios.get('https://api.hnpwa.com/v0/news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}
async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
    //return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (error) {
    console.log(error);
  }
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemInfo(userId){
  return axios.get(`${config.baseUrl}item/${userId}.json`);
  //https://api.hnpwa.com/v0/item/13831370.json
}



/*
News	https://api.hnpwa.com/v0/news/1.json
Newest	https://api.hnpwa.com/v0/newest/1.json
Ask	https://api.hnpwa.com/v0/ask/1.json
Show	https://api.hnpwa.com/v0/show/1.json
Jobs	https://api.hnpwa.com/v0/jobs/1.json
*/

export { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo };