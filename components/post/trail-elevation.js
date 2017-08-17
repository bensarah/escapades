import PropTypes from 'prop-types'
import {Component} from 'react'
import cheapRuler from 'cheap-ruler'
import {AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts'
import 'whatwg-fetch'
import palette from '../../styles/palette'

const accessToken = 'pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjaW83enIwNjYwMnB1dmlsejN6cDBzbm93In0.0ZOGwSLp8OjW6vCaEKYFng'
const samples = 200

class TrailElevation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: 'pending'
    }
  }

  render () {
    switch (this.state.status) {
    case 'ok': {
      // let upsAndDowns = this.upsAndDowns() // TODO use this somewhere?
      return (
        <div className='absolute bottom w-full mx-neg6 my-neg6 z2'>
          <ResponsiveContainer width='101%' height={this.height}>
            <AreaChart data={this.state.elevations.map((e, i, a) => ({distance: (i * this.state.distance / a.length).toFixed(1) + ' km', elevation: Math.max(e, 0)}))}>
              <defs>
                <linearGradient id='fill-gradient' x1='0' y1='0' x2='0' y2='100%'>
                  <stop offset='20%' stopColor={palette.tournesol} stopOpacity={0.4}/>
                  <stop offset='95%' stopColor={palette.tournesol} stopOpacity={1}/>
                </linearGradient>
              </defs>
              <Tooltip
                content={this.tooltipContent}
              />
              <XAxis hide={true} tickLine={false} axisLine={false} domain={['dataMin', 'dataMax']} name='km' dataKey='distance' />
              <YAxis hide={true} tickLine={true} axisLine={false} domain={['dataMin', 'dataMax']} name='m' dataKey='elevation'/>
              <Area type='linear' dataKey='elevation' stroke={palette.tournesol} fill='url(#fill-gradient)' fillOpacity={1} strokeWidth={2} dot={null} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )
    }

    default:
      return null
    }
  }

  componentDidMount () {
    this.setState({status: 'pending'})

    // don't make the calls to Mapbox API if not necessary
    if (this.props.trail.properties.elevations && this.props.trail.properties.distance) {
      return this.setState({
        status: 'ok',
        distance: this.props.trail.properties.distance,
        elevations: this.props.trail.properties.elevations
      })
    }

    // also sets the 'distance' property in the state
    let coords = this.sampleLine(samples, this.props.trail)

    let baseUrl = 'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/'

    let promises = []

    coords.forEach(c => {
      let url = baseUrl + c[0] + ',' + c[1] + '.json?limit=50&access_token=' + accessToken

      let promise = fetch(url, {method: 'get'})
        .then(res => {
          if (res.ok) {
            return res.json()
          } else { // 4xx or 5xx response
            var err = new Error(res.statusText)
            return Promise.reject(err)
          }
        })

      promises.push(promise)
    })

    return Promise.all(promises)
      .then(results => {
        var elevations = results.map(r => getElevation(r))

        this.setState({
          status: 'ok',
          elevations: elevations
        })
        console.log(JSON.stringify(this.state))
      })
      .catch(() => {
        this.setState({
          status: 'error'
        })
      })
  }

  tooltipContent ({label, payload}) {
    if (!payload[0]) return null
    return (
      <div
        className='py12 px12 color-gray'
        style={{background: 'white', boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)'}}
      >
        {`${payload[0].value} m d'altitude`}
        <br/>
        {`après ${label}`}
      </div>
    )
  }

  sampleLine (n, route) {
    // creates n sample points along the route.
    if (!route) return []

    let coords = route.geometry.coordinates
    if (!coords.length) return []

    let samples = []
    let ruler = cheapRuler(coords[0][1], 'kilometers')
    let distance = ruler.lineDistance(coords)
    this.setState({distance})
    for (let i = 0; i < n; i++) {
      samples.push(ruler.along(coords, i * distance / n))
    }

    return samples
  }

  upsAndDowns () {
    let elevations = this.state.elevations
    if (!elevations) return null

    let ups = 0
    let downs = 0

    elevations
      .map(e => Math.max(e, 0))
      .reduce((a, b) => {
        if (b > a) ups += b - a
        else downs += a - b
        return b
      })

    return [ups, downs]
  }

  get height () {
    return window.innerWidth >= 800 ? 180 : 120
  }
}

function getElevation (r) {
  var allFeatures = r.features
  var elevations = []
  for (let i = 0; i < allFeatures.length; i++) {
    elevations.push(allFeatures[i].properties.ele)
  }
  var filteredElevations = elevations.filter(Boolean)
  return Math.max(...filteredElevations)
}

TrailElevation.propTypes = {
  trail: PropTypes.object
}

export default TrailElevation
