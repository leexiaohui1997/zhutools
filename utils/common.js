export function promiseify(target, method, opts) {
  return new Promise((resolve, reject) => {
    target[method]({
      ...opts,
      success: resolve,
      fail: reject
    })
  })
}
