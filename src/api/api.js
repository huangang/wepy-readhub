import wepy from 'wepy'
const host = 'https://api.readhub.me/'
const webshotUrl = 'http://127.0.0.1:7001/'
const wxRequest = async (params = {}, url) => {
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  })
  console.log(url)
  let res = await wepy.request({
    url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {'Content-Type': 'application/json'}
  })
  wepy.hideToast()
  return res
}
const getTopic = (params) => wxRequest(params, host + 'topic?pageSize=' + ((params && params.pageSize) || 10) + '&lastCursor=' + ((params && params.lastCursor) || ''))
const getNews = (params) => wxRequest(params, host + 'news?pageSize=' + ((params && params.pageSize) || 10) + '&lastCursor=' + ((params && params.lastCursor) || ''))
const getTechNews = (params) => wxRequest(params, host + 'technews?pageSize=' + ((params && params.pageSize) || 10) + '&lastCursor=' + ((params && params.lastCursor) || ''))
const getHtmlByUrl = (url) => {
  return wxRequest({}, webshotUrl + 'webshot?url=' + url)
}
module.exports = {
  getTopic,
  getNews,
  getTechNews,
  getHtmlByUrl,
  webshotUrl
}
