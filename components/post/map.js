import PropTypes from 'prop-types'
import {Component} from 'react'
import _ from 'lodash'
import extent from 'geojson-extent'
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
      style: this.minimalStyle(style),
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

    this.enableStyleChange()
    map.on('load', () => this.onLoad())
  }

  enableStyleChange () {
    // Maximal style on hover
    this.map.on('mousemove', () => {
      this.setStyle('maximal')
    })
    this.map.on('mouseout', () => {
      this.setStyle('minimal')
    })

    // Only enable scroll zoom (and dragpan for touch device)
    // once the map has been clicked once
    this.map.scrollZoom.disable()
    if ('ontouchstart' in window) {
      // for touch screens
      this.map.dragPan.disable()
    }

    this.map.once('mousedown', () => {
      this.setStyle('maximal')
      this.map.scrollZoom.enable()
      this.map.dragPan.enable()
    })
  }

  onLoad () {
    this.map.resize()
    if (this.props.trail) this.map.getSource('trail').setData(this.props.trail)
  }

  minimalStyle (style) {
    let s = _.cloneDeep(style)

    s.layers.forEach(l => {
      if (!l.id.startsWith('minimal--')) {
        if (l.type === 'symbol') {
          l.layout.visibility = 'none'
        } else {
          l.paint[l.type + '-opacity'] = 0
        }
      }
    })

    return s
  }

  setStyle (str) {
    if (str === 'minimal') {
      this.style.layers.forEach(l => {
        if (!l.id.startsWith('minimal--')) {
          if (l.type === 'symbol') {
            this.map.setLayoutProperty(l.id, 'visibility', 'none')
          } else {
            this.map.setPaintProperty(l.id, l.type + '-opacity', 0)
          }
        }
      })
    } else {
      this.style.layers.forEach(l => {
        if (l.type === 'symbol') {
          this.map.setLayoutProperty(l.id, 'visibility', 'visible')
        } else {
          this.map.setPaintProperty(l.id, l.type + '-opacity', l.paint[l.type + '-opacity'])
        }
      })
    }
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
