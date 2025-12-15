import toolStar from '../../behaviors/tool-star'

Component({
  behaviors: [toolStar],
  data: {
    group: [
      {
        title: '最近在用',
        tools: [],
        empty: '近期未使用过工具喔～'
      },
      {
        title: '我的收藏',
        tools: [],
        empty: '还没找到喜欢的工具吗？'
      }
    ]
  },
  observers: {
    starTools(tools) {
      const { group } = this.data
      group[1].tools = tools
      this.setData({ group })
    }
  }
})
