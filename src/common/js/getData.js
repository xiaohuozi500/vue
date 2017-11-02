import axios from 'axios'
let apiUrl = 'https://www.vue-js.com/api/v1/topics'
export function getTopicList (param) {
  var top = {
    page: 1,
    tab: 'all',
    limit: 30
  }
  let paramsData = Object.assign({}, top, param)
  return axios.get(apiUrl, {
    params: paramsData
  })
}
