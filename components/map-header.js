import {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BlipMarker from './blip-marker'
import palette from '../styles/palette'
import style from '../styles/style-header'

/* global mapboxgl */

class MapHeader extends Component {
  render () {
    return (
      <div className='map-container'>
        <div id='map' className='animation-fade-in animation--speed-4 w-full h180 z1' />
        <style jsx>{`
          .map-container {
            background-color: ${palette.bleuNuit};
          }
        `}</style>
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
      container: 'map',
      style: style,
      center: [-33, 40],
      zoom: 1,
      interactive: false,
      attributionControl: false
    })

    var worldBounds = [-142.382813, 0.351560, 58.359375, 63.704722]
    map.fitBounds(worldBounds, {animate: false})

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
          'circle-opacity': 0.5,
          'circle-radius': 2.2
        }
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    const size = 15 // px
    if (nextProps.highlight) {
      let el = document.createElement('div')
      el.id = 'marker-' + new Date().getDate()
      let marker = new mapboxgl.Marker(el, { offset: [-size / 2, -size / 2] })
        .setLngLat(nextProps.highlight)
        .addTo(this.map)

      ReactDOM.render(<BlipMarker size={size}/>, el)

      setTimeout(() => marker.remove(), 1300)
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

MapHeader.propTypes = {
  highlight: PropTypes.array,
  dots: PropTypes.array
}

export default MapHeader
