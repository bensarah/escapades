import PropTypes from 'prop-types'
import {Component} from 'react'
import style from '../../styles/style'

/* global mapboxgl */

class Map extends Component {
  render () {
    if (this.props.container) return null
    return (
      <div>
        <div id='map' className='absolute'/>
        <style jsx>{`
          #map {
            width: 100%;
            height: 100vh;
          }
        `}</style>
      </div>
    )
  }

  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjaW83enIwNjYwMnB1dmlsejN6cDBzbm93In0.0ZOGwSLp8OjW6vCaEKYFng'

    const map = new mapboxgl.Map({
      container: this.props.container || 'map',
      style: style,
      center: this.props.center || [-33, 40],
      zoom: this.props.zoom || 1
    })

    map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    }))

    this.map = map
    this.props.onMap(map)
    this.style = style

    map.on('load', () => {
      this.map.resize()
      if (this.props.trail) this.map.getSource('trail').setData(this.props.trail)
    })
  }
}

Map.propTypes = {
  style: PropTypes.object,
  center: PropTypes.array,
  zoom: PropTypes.number,
  trail: PropTypes.object,
  onMap: PropTypes.func,
  container: PropTypes.string
}

export default Map
