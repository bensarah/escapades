import {trailPointsGenerator, findTrail, extractTrailPortion} from './trail-extractor'

function moveSource (map, layer, trail, start, end, options) {
  var duration = (options && options.duration) || 3000
  var interpolation = (options && options.interpolation) || 'cubic'
  var steps = duration / 10
  var g = trailPointsGenerator(trail, start, end, steps, interpolation)

  // remove previously set interval
  if (map.interval) clearInterval(map.interval)

  var interval = setInterval(() => {
    var p = g.next()
    if (p.done) clearInterval(interval)
    else map.getSource(layer).setData(p.value)
  }, 10)

  map.interval = interval
}

function highlightFromTo (map, trail, start, end, options) {
  trail = findTrail(trail)
  if (!(options && options.trailHighlight === false)) map.getSource('trail-highlight').setData(extractTrailPortion(trail, start, end))
  if (!(options && options.pointHighlight === false)) moveSource(map, 'point-highlight', trail, start, end, options)
}

function removeHighlights (map) {
  var empty = {type: 'FeatureCollection', features: []};
  ['trail-highlight', 'point-highlight'].map((layer) => map.getSource(layer).setData(empty))
}

export {moveSource, highlightFromTo, removeHighlights}
