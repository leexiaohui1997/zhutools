import tools from '../../behaviors/tools'
import { IMAGE_DOMAIN } from '../../constants/config'

Component({
  behaviors: [tools],
  properties: {
    name: {
      type: String
    }
  },
  data: {
    IMAGE_DOMAIN,
    isLogoError: false,
  },
  methods: {
    loadLogoFail() {
      if (!this.data.isLogoError) {
        this.setData({ isLogoError: true })
      }
    }
  }
})
