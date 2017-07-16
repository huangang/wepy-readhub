import wepy from 'wepy'
const host = 'https://api.readhub.me/'
const wxRequest = async (params = {}, url, showToast = true) => {
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

module.exports = {
  getTopic,
  getNews,
  getTechNews
}
