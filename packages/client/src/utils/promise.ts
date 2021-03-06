// 包裹async/await错误处理
export const to = <T>(promise: Promise<T>) =>
  promise.then(data => [null, data]).catch(err => [err]);
