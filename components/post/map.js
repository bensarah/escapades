import React, {Component} from 'react'
import PropTypes from 'prop-types'
import style from '../../styles/style'
import loadMapboxgl from '../../helpers/load-mapbox-gl'

class Map extends Component {
  render () {
    if (this.props.container) return null
    return (
      <div>
        <div id='map' className='absolute' style={{width: '100%', height: '100vh'}}/>
      </div>
    )
  }

  componentDidMount () {
    loadMapboxgl().then(() => this.onLoad())
  }

  onLoad () {
    /* global mapboxgl */
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

    map.scrollZoom.disable()
    if ('ontouchstart' in window) {
      // for touch screens
      map.dragPan.disable()
    }

    map.once('mousedown', () => {
      map.scrollZoom.enable()
      map.dragPan.enable()
    })

    this.props.onMap(map)

    map.on('load', () => {
      map.resize()
      if (this.props.trail) map.getSource('trail').setData(this.props.trail)
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
