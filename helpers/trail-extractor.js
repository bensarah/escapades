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
  var r = []
  var d = 0

  if (d1 === 0) r.push(c[0])
  for (var i = 1; i < c.length; i++) {
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

function extractTrailPoint (linestring, proportion) {
  // The totalDistance and ruler are optional but make calculations quicker
  var c = linestring.geometry.coordinates
  var ruler = cheapRuler(c[0][1])
  var totalDistance = ruler.lineDistance(c)

  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: ruler.along(c, proportion * totalDistance)
    },
    properties: {}
  }
}

function * trailPointsGenerator (linestring, proportionStart, proportionEnd, steps, interpolation) {
  // The totalDistance and ruler are optional but make calculations quicker
  var c = linestring.geometry.coordinates
  var ruler = cheapRuler(c[0][1])
  var totalDistance = ruler.lineDistance(c)

  for (var i = 0; i < steps; i++) {
    var t = i / steps - 1
    var s = interpolation === 'linear' ? t : t * t * t
    var p = proportionStart + (proportionEnd - proportionStart) * (1 + s)
    yield {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ruler.along(c, p * totalDistance)
      },
      properties: {}
    }
  }
}

function moveSource (map, layer, trail, proportionStart, proportionEnd, duration, interpolation) {
  var steps = duration / 10
  var g = trailPointsGenerator(findTrail(trail), proportionStart, proportionEnd, steps, interpolation)
  var interval = setInterval(() => {
    var p = g.next()
    if (p.done) clearInterval(interval)
    else map.getSource('point-highlight').setData(p.value)
  }, 10)
}

export {extractTrailPortion, extractTrailPoint, findTrail, moveSource}
