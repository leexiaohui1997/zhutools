Component({
  properties: {
    title: String,
    tools: {
      type: Array,
      value: []
    }
  },
  methods: {
    clickTool(e) {
      const { name } = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/tool/tool?name=${name}`,
      })
    }
  }
})
