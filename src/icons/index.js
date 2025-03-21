// 导入所有SVG图标
const modules = import.meta.glob('../assets/icons/**/*.svg', { eager: true })

// 注册所有SVG图标
export function setupIcons(app) {
  // 创建SVG Sprite
  const sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  sprite.setAttribute('style', 'display: none;')
  sprite.setAttribute('version', '1.1')
  sprite.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  document.body.appendChild(sprite)

  // 处理每个SVG文件
  Object.keys(modules).forEach((key) => {
    const name = key.match(/\/([^/]+)\.svg$/)?.[1]
    if (name) {
      const svgContent = modules[key].default
      const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
      const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 1239 1024' // 默认值

      // 创建symbol元素
      const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol')
      symbol.setAttribute('id', `icon-${name}`)
      symbol.setAttribute('viewBox', viewBox)
      symbol.setAttribute('version', '1.1')
      symbol.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

      // 提取SVG内容
      const contentMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/)
      if (contentMatch) {
        symbol.innerHTML = contentMatch[1].trim()
      } else {
        console.warn(`Invalid SVG content for file: ${key}`)
      }

      sprite.appendChild(symbol)
    }
  })
}