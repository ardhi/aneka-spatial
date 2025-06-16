function isSet (item) {
  return ![null, undefined].includes(item)
}

export default function (lng, lat) {
  if (!isSet(lng) || !isSet(lat)) return false
  if (isNaN(lng) || isNaN(lat)) return false
  return lng >= -180 && lng <= 180 && lat >= -90 && lat <= 90
}
