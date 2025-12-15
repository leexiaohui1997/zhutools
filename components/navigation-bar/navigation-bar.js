import { TABBAR_LIST } from '../../constants/config'
import { isTabbarPage } from '../../utils/page'

const menuButtonRect = wx.getMenuButtonBoundingClientRect()
const windowInfo = wx.getWindowInfo()
const gapH = windowInfo.screenWidth - menuButtonRect.right
const gapV = menuButtonRect.top - windowInfo.statusBarHeight
const asideWidth = menuButtonRect.width + 2 * gapH
const height = menuButtonRect.height + 2 * gapV

Component({
  properties: {
    title: {
      type: String,
      value: '珠鸿工具箱'
    },
    showStar: {
      type: Boolean,
      value: false
    },
    isStar: {
      type: Boolean,
      value: false
    },
    noTop: {
      type: Boolean,
      value: false
    }
  },
  data: {
    asideWidth,
    height,
    gapH,
    gapV,
    showBack: false,
    backHome: false,
    simpleAction: true
  },
  lifetimes: {
    attached() {
      const pages = getCurrentPages()
      const current = pages[pages.length - 1]
      const showBack = !isTabbarPage(current)
      const backHome = showBack && pages.length === 1
      const { showStar } = this.data

      this.setData({
        backHome,
        showBack,
        showStar,
        simpleAction: [
          showBack,
          showStar,
        ].filter(Boolean).length <= 1
      })
    }
  },
  methods: {
    back() {
      if (this.data.backHome) {
        wx.switchTab({ url: `/${TABBAR_LIST[0].page}` })
      } else {
        wx.navigateBack()
      }
    },

    toggleStar() {
      this.triggerEvent('toggle-star')
    }
  }
})
