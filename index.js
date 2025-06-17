import angleIn90Deg from './src/angle-in-90-deg.js'
import boundsToTiles from './src/bounds-to-tiles.js'
import ddToDms from './src/dd-to-dms.js'
import divideBounds from './src/divide-bounds.js'
import dmsToDd from './src/dms-to-dd.js'
import enlargeBounds from './src/enlarge-bounds.js'
import getTileBounds from './src/get-tile-bounds.js'
import getTileLocation from './src/get-tile-location.js'
import isCoordInBounds from './src/is-coord-in-bounds.js'
import isValidCoord from './src/is-valid-coord.js'
import latSizeOf from './src/lat-size-of.js'
import latToDms from './src/lat-to-dms.js'
import latToTile from './src/lat-to-tile.js'
import lngSizeOf from './src/lng-size-of.js'
import lngToDms from './src/lng-to-dms.js'
import lngToTile from './src/lng-to-tile.js'
import sanitizeBounds from './src/sanitize-bounds.js'
import tilesToBounds from './src/tiles-to-bounds.js'
import tileToLat from './src/tile-to-lat.js'
import tileToLng from './src/tile-to-lng.js'

export default {
  lngToTile,
  latToTile,
  tileToLng,
  tileToLat,
  boundsToTiles,
  enlargeBounds,
  ddToDms,
  dmsToDd,
  isValidCoord,
  latToDms,
  lngToDms,
  angleIn90Deg,
  tilesToBounds,
  latSizeOf,
  lngSizeOf,
  getTileBounds,
  getTileLocation,
  divideBounds,
  isCoordInBounds,
  sanitizeBounds
}
