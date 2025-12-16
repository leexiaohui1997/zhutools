import { promiseify } from "./common"

const STORAGE_KEY = 'tool_history'

export async function getHisTools() {
  try {
    const res = await promiseify(wx, 'getStorage', {
      key: STORAGE_KEY
    })
    return res.data || []
  } catch (err) {
    return []
  }
}

export async function addHisTool(name) {
  const tools = await getHisTools()
  const index = tools.indexOf(name)
  if (index !== -1) {
    tools.splice(index, 1)
  }
  tools.unshift(name)
  await promiseify(wx, 'setStorage', {
    key: STORAGE_KEY,
    data: tools
  })
}
