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
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

/*
News	https://api.hnpwa.com/v0/news/1.json
Newest	https://api.hnpwa.com/v0/newest/1.json
Ask	https://api.hnpwa.com/v0/ask/1.json
Show	https://api.hnpwa.com/v0/show/1.json
Jobs	https://api.hnpwa.com/v0/jobs/1.json
*/

export { fetchNewsList, fetchAskList, fetchJobsList };