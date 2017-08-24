import {trailPointsGenerator, findTrail, extractTrailPortion} from './trail-extractor'
import extent from 'geojson-extent'

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
  var portion = extractTrailPortion(trail, start, end)
  if (!(options && options.trailHighlight === false)) map.getSource('trail-highlight').setData(portion)
  if (!(options && options.pointHighlight === false)) moveSource(map, 'point-highlight', trail, start, end, options)
  if (options && options.fitBounds === true) {
    var bbox = extent(portion)
    map.fitBounds([bbox.slice(0, 2), bbox.slice(2, 4)], {duration: 3000, padding: 60})
  }
}

function removeHighlights (map) {
  var empty = {type: 'FeatureCollection', features: []};
  ['trail-highlight', 'point-highlight'].map((layer) => map.getSource(layer).setData(empty))
}

export {moveSource, highlightFromTo, removeHighlights}
