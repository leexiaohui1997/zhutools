import tools from '../../behaviors/tools'
import toolStar from '../../behaviors/tool-star'
import { addHisTool } from '../../utils/tool-history'

Component({
  behaviors: [tools, toolStar],
  properties: {
    name: String,
    isMenu: {
      type: Number,
    }
  },
  observers: {
    name(name) {
      if (name) {
        addHisTool(name)
      }
    }
  },
  methods: {
    toggleStar() {
      const { name, starTools } = this.data
      this.setStarTool(name, !starTools.includes(name))
    }
  }
})
