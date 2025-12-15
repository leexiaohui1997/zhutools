import { promiseify } from '../utils/common'

const STORAGE_KEY = 'star_tools'

export default Behavior({
  data: {
    starTools: [],
  },
  pageLifetimes: {
    show() {
      this.fetchStarTools()
    }
  },
  methods: {
    async fetchStarTools() {
      const starTools = await promiseify(wx, 'getStorage', {
        key: STORAGE_KEY
      })
        .then((res) => res.data)
        .catch(() => [])

      this.setData({ starTools })
    },
    async setStarTool(name, isStar) {
      const starTools = this.data.starTools.slice(0)
      const index = starTools.indexOf(name)
      if (isStar && index === -1) {
        starTools.push(name)
      } else if (!isStar && index >= 0) {
        starTools.splice(index, 1)
      }
      try {
        await promiseify(wx, 'setStorage', {
          key: STORAGE_KEY,
          data: starTools
        })
        this.setData({ starTools })
      } catch (err) {
        wx.showToast({
          title: `${err}`,
          icon: 'error',
        })
      }
    }
  }
})
