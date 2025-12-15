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
    hasTabbar: false
  },
  lifetimes: {
    attached() {
      this.getTabBar?.((tabbar) => {
        this.setData({
          hasTabbar: !!tabbar
        })
      })
    }
  },
  methods: {
    toggleStar() {
      this.triggerEvent('toggle-star')
    }
  }
})
