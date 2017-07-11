import PropTypes from 'prop-types'
import {Component} from 'react'
import cheapRuler from 'cheap-ruler'
import {AreaChart, Area, YAxis, ResponsiveContainer} from 'recharts'
import 'whatwg-fetch'

const accessToken = 'pk.eyJ1IjoiYmVuamFtaW50ZCIsImEiOiJjaW83enIwNjYwMnB1dmlsejN6cDBzbm93In0.0ZOGwSLp8OjW6vCaEKYFng'

class TrailElevation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: 'pending'
    }
  }

  render () {
    switch (this.state.status) {
    case 'pending':
      return <div className='wmin-full hmin300 py30 loading' />

    case 'ok': {
      let upsAndDowns = this.upsAndDowns()
      return (
        <div className='wmin-full hmin300 py30'>
          <div className='txt-s color-darken50 px42'>
            <svg className='icon inline-block align-middle'><use xlinkHref='#icon-arrow-up' /></svg>{upsAndDowns[0]}m -
            <svg className='icon inline-block align-middle'><use xlinkHref='#icon-arrow-down' /></svg>{upsAndDowns[1]}m
          </div>
          <ResponsiveContainer width='100%' height={200}>
            <AreaChart margin={{top: 42, right: 42, left: 42, bottom: 12}} data={this.state.elevations.map(e => ({e: Math.max(e, 0)}))}>
              <YAxis orientation='right' domain={['dataMin', 'dataMax']} name='m' />
              <Area type='monotone' dataKey='e' stroke='#2abaf7' fill='#2abaf7' fillOpacity={0.5} strokeWidth={2} dot={null} />
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

    let coords = this.sampleLine(20, this.props.trail)

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
      })
      .catch(() => {
        this.setState({
          status: 'error'
        })
      })
  }

  sampleLine (n, route) {
    // creates n sample points along the route.
    if (!route) return []

    let coords = route.geometry.coordinates
    if (!coords.length) return []

    let samples = []
    let ruler = cheapRuler(coords[0][1], 'meters')
    let distance = ruler.lineDistance(coords)

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
