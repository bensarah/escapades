import cheapRuler from 'cheap-ruler'

function findTrail (trail) {
  if (trail.type === 'Feature' && trail.geometry.type === 'LineString') return trail
  else if (trail.type === 'FeatureCollection') {
    return trail.features.filter(t => t.geometry.type === 'LineString')[0]
  }
}

function extractTrailPortion (linestring, start, end) {
  var c = linestring.geometry.coordinates
  var ruler = cheapRuler(c[0][1])
  var totalDistance = ruler.lineDistance(c)
  var d1 = start * totalDistance
  var d2 = end * totalDistance
  console.log(totalDistance, d1, d2)
  var r = []
  var d = 0

  if (d1 === 0) r.push(c[0])
  for (var i = 1; i < c.length; i++) {
    console.log(ruler.distance(c[i - 1], c[i]))
    d += ruler.distance(c[i - 1], c[i])
    if (d > d2) break
    if (d >= d1) r.push(c[i])
  }

  return {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: r
    },
    properties: {}
  }
}

function extractTrailPoint (linestring, proportion, totalDistance, ruler) {
  // The totalDistance and ruler are optional but make calculations quicker
  var c = linestring.geometry.coordinates
  if (!ruler) ruler = cheapRuler(c[0][1])
  if (!totalDistance) totalDistance = ruler.lineDistance(c)

  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: ruler.along(c, proportion * totalDistance)
    },
    properties: {}
  }
}

export {extractTrailPortion, extractTrailPoint, findTrail}
