import { TABBAR_LIST } from '../constants/config'

export function isTabbarPage(page) {
  return TABBAR_LIST.some(item => item?.page === page.route)
}

export function getCurrentPage() {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}
