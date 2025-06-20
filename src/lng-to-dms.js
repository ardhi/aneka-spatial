import ddToDms from './dd-to-dms.js'

export default function (value, secPrecision) {
  const dms = ddToDms(value, secPrecision)
  if (dms.substr(0, 1) === '-') return dms.substr(1) + ' W'
  return dms + ' E'
}
