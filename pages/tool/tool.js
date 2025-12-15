import tools from '../../behaviors/tools'
import toolStar from '../../behaviors/tool-star'

Component({
  behaviors: [tools, toolStar],
  properties: {
    name: String,
    isMenu: {
      type: Number,
    }
  },
  methods: {
    toggleStar() {
      const { name, starTools } = this.data
      this.setStarTool(name, !starTools.includes(name))
    }
  }
})
