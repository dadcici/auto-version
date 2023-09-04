/**
 * 引用图片资源
 * @param name 文件名,带扩展名
 * @returns 图片资源url
 */
export const  getImageUrl = (name: string) => {
  // const url = new URL(`/images/${name}`, import.meta.url).href

  return `/images/${name}?_t=${new Date().valueOf()}`
}