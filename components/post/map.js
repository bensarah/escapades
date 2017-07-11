import PropTypes from 'prop-types'
import {Component} from 'react'
import Head from 'next/head'
import _ from 'lodash'
import style from '../../styles/style'

/* global mapboxgl */

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isClicked: false,
      map: null
    }
  }

  render () {
    return (
      <div>
        <Head>
        </Head>
        <div id='map'>

        </div>
        <style jsx>{`
          #map {
            width: 100%;
            height: 500px;
          }
        `}</style>
      </div>
    )
  }

  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjaW83enIwNjYwMnB1dmlsejN6cDBzbm93In0.0ZOGwSLp8OjW6vCaEKYFng'

    const map = new mapboxgl.Map({
      container: 'map',
      style: this.minimalStyle(style),
      center: this.props.center,
      zoom: this.props.zoom
    })

    this.map = map
    this.style = style

    map.on('load', () => this.onLoad())
  }

  enableStyleChange () {
    this.map.scrollZoom.disable()
    if ('ontouchstart' in window) {
      // for touch screens
      this.map.dragPan.disable()
    }
    this.map.once('mousedown', () => {
      this.setStyle('maximal')
      this.map.scrollZoom.enable()
      this.map.dragPan.enable()

      this.map.once('mouseout', () => {
        this.setStyle('minimal')
        this.enableStyleChange()
      })
    })
  }

  onLoad () {
    this.enableStyleChange()

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
  trail: PropTypes.object
}

export default Map
