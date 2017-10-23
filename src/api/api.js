import wepy from 'wepy'
const host = 'https://api.readhub.me/'
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
const getTopic = (params) => wxRequest(params, host + 'topic/' + params.id)
const getList = (params) => wxRequest(params, host + 'topic/wechat?start=' + params.start + '&end=' + params.end + '&type=' + params.type || 'day')
module.exports = {
  getTopic,
  getList
}
