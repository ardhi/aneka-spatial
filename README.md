# aneka-spatial

ES6 geospatial functions for daily life

## Installation

```bash
$ npm install aneka-spatial
```

## Usage

```javascript
import { isValidCoord } from 'aneka-spatial/index.js'

const longitude = 200
const latitude = 100
const valid = isValidCoord(longitude, latitude)
console.log(valid) // false

```

## Functions

### angleIn90Deg (angle)

### boundsToTiles (bounds, zoom, allTiles, withZ)

### ddToDms (value, secPrecision)

Convert latitude/longitude in decimal degree to its string representation in degree, minute and second.

*Parameter*:
  - ```value (float)```: value to convert to
  - ```secPrecision (integer)```: number of digits after period in second (defaults to: 2)

*Return*: ```string```

### divideBounds (bounds, count)

Divide bounds into smaller pieces of bounds

*Parameter*:
  - ```bounds (array of floats)```: bounds to divide
  - ```count (integer)```: number of pieces (horizontally AND vertically)

*Return*: ```array``` of bounds

### dmsToDd (value)

Parse string representation of a coordinate value in degree, minute, second into its decimal value

*Parameter*:
  - ```value (string)```: dms value

*Return*: ```float```

### enlargeBounds (bounds, zoom)

Enlarge bounds at zoom level

*Parameter*:
  - ```bounds (array)```: bounds to enlarge
  - ```zoom (integer)```: zoom level

*Return*: ```array```

### getTileBounds (x, y, zoom)

### getTileLocation ({ type, prefix = '', z, x, y, format = '.png' })

### isCoordInBounds (lng, lat, bounds)

### isValidCoord (lng, lat)

### latSizeOf (value)

### latToDms (val, secPrecision)

### latToTile (lat, zoom)

### lngSizeOf (value, lat)

### lngToDms (val, secPrecision)

### lngToTile (lng, zoom)

### sanitizeBounds (bounds)

### tileToLat (y, zoom)

### tileToLng (x, zoom)

### tilesToBounds (x1, y1, x2, y2, zoom, returnObject)

## License
[MIT](LICENSE)