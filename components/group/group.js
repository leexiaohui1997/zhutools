import { getCurrentPage } from '../../utils/page'

Component({
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    tools: {
      type: Array,
      value: []
    },
    emptyText: {
      type: String,
      value: '暂无数据'
    }
  },
  methods: {
    clickTool(e) {
      const current = getCurrentPage()
      const { name } = e.currentTarget.dataset
      const isMenu = current.route === 'pages/menu/menu'
      
      wx.navigateTo({
        url: `/pages/tool/tool?name=${name}&isMenu=${isMenu ? 1 : 0}`,
        ...(isMenu ? {
          routeType: 'wx://cupertino-modal',
          routeConfig: {
            fullscreenDrag: false,
            popGestureDirection: 'vertical'
          }
        } : {})
      })
    }
  }
})
