import { TABBAR_LIST } from '../constants/config'

Component({
  options: {},
  data: {
    list: TABBAR_LIST,
    activePage: ''
  },
  methods: {
    updateRouteInfo() {
      const pages = getCurrentPages()
      const activePage = pages[pages.length - 1].route
      this.setData({ activePage })
    },

    clickTab(e) {
      const { item } = e.currentTarget.dataset
      wx.switchTab({
        url: `/${item.page}`,
      })
    },

    openMenu() {
      wx.navigateTo({
        url: '/pages/menu/menu',
        routeType: 'wx://cupertino-modal',
        routeConfig: {
          fullscreenDrag: false,
          popGestureDirection: 'vertical'
        }
      })
    }
  },
  lifetimes: {
    attached() {
      this.$updateRouteInfo = this.updateRouteInfo.bind(this)
      wx.onAppRouteDone(this.$updateRouteInfo)
    },
    detached() {
      wx.offAppRouteDone(this.$updateRouteInfo)
    }
  }
})
