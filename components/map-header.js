import {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BlipMarker from './blip-marker'

/* global mapboxgl */

class MapHeader extends Component {
  render () {
    return (
      <div className='map-container'>
        <div id='map' className='animation-fade-in animation--speed-4' />
        <style jsx>{`
          #map {
            width: 100%;
            height: 200px;
          }

          .map-container {
            background-color: #0a1224;
          }

          .marker {
            background-color: #ffffff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }

  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjaW83enIwNjYwMnB1dmlsejN6cDBzbm93In0.0ZOGwSLp8OjW6vCaEKYFng'

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/benjamintd/cj5013w56001c2soatvh44si5',
      center: [-33, 40],
      zoom: 1,
      interactive: false,
      attributionControl: false
    })

    map.fitBounds([-142.382813, 0.351560, 58.359375, 63.704722], {animate: false})

    this.map = map
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.highlight) {
      var el = document.createElement('div')
      el.id = 'marker'
      var marker = new mapboxgl.Marker(el, { offset: [-10 / 2, -10 / 2] })
        .setLngLat(nextProps.highlight)
        .addTo(this.map)

      ReactDOM.render(<BlipMarker size={10}/>, document.getElementById('marker'))

      setTimeout(() => marker.remove(), 1000)
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
}

MapHeader.propTypes = {
  highlight: PropTypes.array
}

export default MapHeader
