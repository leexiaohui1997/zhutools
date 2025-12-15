import _tools from '../constants/tools'

const _toolsMap = Object.fromEntries(_tools.map((item) => [
  item.name,
  item
]))

export default Behavior({
  data: {
    _tools,
    _toolsMap
  }
})
