import {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BlipMarker from './blip-marker'
import palette from '../../styles/palette'
import style from '../../styles/style-dark'
import extent from 'geojson-extent'

/* global mapboxgl */

class MapHighlights extends Component {
  componentWillMount () {
    this.setState({
      id: Math.random().toString(36).substr(2, 10), // random id
      markers: []
    })
  }

  render () {
    return (
        <div id={'map' + this.state.id} className='h-full w-full'>
        <style jsx global>{`
          .mapboxgl-ctrl-logo {
            opacity: 0.2 !important;
          }
        `}</style>
      </div>
    )
  }

  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjaW83enIwNjYwMnB1dmlsejN6cDBzbm93In0.0ZOGwSLp8OjW6vCaEKYFng'

    const map = new mapboxgl.Map({
      container: 'map' + this.state.id,
      style: style,
      center: [-33, 40],
      zoom: 1,
      maxZoom: 4,
      interactive: false,
      attributionControl: false
    })

    var bbox = extent(this.dotsToGeoJSON(this.props.dots))
    var dotsBounds = [bbox.slice(0, 2), bbox.slice(2, 4)]
    map.fitBounds(dotsBounds, {animate: false, padding: {top: 30, bottom: 30, left: 30, right: 30}})

    this.map = map

    map.on('load', () => {
      var dotsGeoJSON = this.dotsToGeoJSON(this.props.dots)
      map.addLayer({
        id: 'dots',
        type: 'circle',
        source: {
          type: 'geojson',
          data: dotsGeoJSON
        },
        paint: {
          'circle-color': palette.tournesol,
          'circle-opacity': 0.7,
          'circle-radius': 2.2
        }
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    const size = 20 // px
    if (nextProps.highlight) {
      let el = document.createElement('div')
      el.id = 'marker-' + new Date().getDate()
      let marker = new mapboxgl.Marker(el, { offset: [-size / 2, -size / 2] })
        .setLngLat(nextProps.highlight)
        .addTo(this.map)

      ReactDOM.render(<BlipMarker size={size}/>, el)
      this.setState({markers: this.state.markers.concat([{marker, el}])})
    } else {
      this.state.markers.forEach(({marker, el}) => {
        el.addEventListener('animationiteration', () => {
          marker.remove()
          el.remove()
        })
      })
      this.setState({markers: []})
    }
  }

  makeMarker () {
    return (
      <div className='marker'>
        <style jsx>{`

        `}</style>
      </div>
    )
  }

  dotsToGeoJSON (dots) {
    var features = dots.map(dot => {
      return {
        type: 'Feature',
        properties: {},
        geometry: {
          coordinates: dot,
          type: 'Point'
        }
      }
    })

    return {
      type: 'FeatureCollection',
      features: features
    }
  }
}

MapHighlights.propTypes = {
  highlight: PropTypes.array,
  dots: PropTypes.array
}

export default MapHighlights
