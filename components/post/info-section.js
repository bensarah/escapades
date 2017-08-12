import {Component} from 'react'
import PropTypes from 'prop-types'
import palette from '../../styles/palette'
import Emoji from './emoji'

class InfoSection extends Component {
  render () {
    var upsDowns = this.upsAndDowns()

    return (
      <div className='info-section'>
        <div className='flex-parent flex-parent--row top-row py30 px30 align-center'>

          <div className='px6'>
            <svg className='icon--l inline-block'>
              <use xlinkHref='#icon-map'></use>
            </svg>
            <br/>
            {this.props.trail.properties.distance.toFixed(1)} km parcourus
          </div>

          <div className='px6'>
            <svg className='icon--l inline-block'>
              <use xlinkHref='#icon-arrow-up'></use>
            </svg>
            <br/>
            {upsDowns[0]} m de dénivelé positif
          </div>

          <div className='px6'>
            <svg className='icon--l inline-block'>
              <use xlinkHref='#icon-sun'></use>
            </svg>
            <br/>
            {this.joursString()}
          </div>

        </div>
        <div className='flex-parent flex-parent--row py30 px30 align-center'>
          {this.tagsToTags()}
        </div>
        <style jsx>{`
          .top-row {
            font-size: 20px;
          }

          .top-row div {
            font-family: Belgrano;
            color: ${palette.brique}
            fill: ${palette.brique}
          }

          .info-section {
            background: linear-gradient(to bottom, ${palette.tournesol} 50%, #ffa100);
          }

          .flex-parent div {
            flex: 1
          }

          @media screen and (min-width: 800px) {
            .top-row {
              font-size: 26px;
            }
          }
        `}</style>
      </div>
    )
  }

  upsAndDowns () {
    let elevations = this.props.trail.properties.elevations
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

  joursString () {
    if (this.props.jours > 2) return `${this.props.jours} jours, ${this.props.jours - 1} nuits`
    if (this.props.jours === 2) return `${this.props.jours} jours, ${this.props.jours - 1} nuit`
    else return `${this.props.jours} jours`
  }

  tagsToTags () {
    return this.props.tags.map(tag => {
      var emoji
      switch (tag) {
      case 'Attention aux ours':
        emoji = <Emoji name='bear' size='2x'/>
        break
      case 'Permis obligatoires':
        emoji = <Emoji name='ticket' size='2x'/>
        break
      case 'Bivouac':
        emoji = <Emoji name='tent' size='2x'/>
        break
      default:
        emoji = <Emoji name='smile' size='2x'/>
        break
      }

      return (
        <div style={{
          flex: 1,
          fontWeight: 'bold',
          color: 'white',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)'
        }} key={tag}>
          {emoji}<br/>{tag}
        </div>
      )
    })
  }
}

InfoSection.propTypes = {
  trail: PropTypes.object.isRequired,
  jours: PropTypes.int,
  tags: PropTypes.array
}

export default InfoSection
