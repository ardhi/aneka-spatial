function getTileLocation ({ type, prefix = '', z, x, y, format = '.png' }) {
  const ry = Math.pow(2, z) - y - 1
  if (type === 'tms') return `${prefix}/${z}/${x}/${ry}${format}`
  if (type === 'rtms') return `${prefix}/${ry}/${x}/${z}${format}`
  if (type === 'yxz') return `${prefix}/${y}/${x}/${z}${format}`
  return `${prefix}/${z}/${x}/${y}${format}`
}

export default getTileLocation
