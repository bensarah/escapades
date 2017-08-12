import {Component} from 'react'
import PropTypes from 'prop-types'
import palette from '../../styles/palette'
import Emoji from './emoji'

class InfoSection extends Component {
  render () {
    var upsDowns = this.upsAndDowns()

    return (
      <div className='info-section'>
        <div className='flex-parent flex-parent--row py30 px30 align-center top-row'>
          <div className='px6'>
            <div className='metric'>Distance parcourue</div>
            <div className='bigtext'>
              {this.props.trail.properties.distance.toFixed(1).toString().replace(/\./g, ',')} <span className='unit'>km</span>
            </div>
            <p className='subbigtext'>en <span className='brique'>☀</span> {this.joursString()} <span className='brique'>🌙</span></p>
          </div>

          <div className='px6'>
            <div className='metric'>Dénivelé positif</div>
            <div className="bigtext">
              + {upsDowns[0]} <span className='unit'>m</span>
            </div>
            <p className='subbigtext'><span className='brique'>↗</span>  max {this.elevMax()} <small>m</small> · min {this.elevMin()} <small>m</small>
 <span className='brique'> ↘</span></p>
          </div>

        </div>
        <div className='flex-parent flex-parent--row flex-parent--wrap py30 px30 align-center'>
          {this.tagsToTags()}
        </div>
        <style jsx>{`
          .top-row div {
            fill: ${palette.brique}
            color: white;
          }

          .info-section {
            background: linear-gradient(to bottom, ${palette.tournesol} 50%, #ffa100);
          }

          .flex-parent div {
            flex: 1
          }

          .metric {
            font-family: Open Sans;
            font-size: 24px;
          }

          .bigtext {
            font-size: 48px;
            font-family: Anton;
          }

          .unit {
            font-size: 24px;
            font-family: Anton;
          }

          .subbigtext {
            font-size: 16px;
            font-family: Open Sans;
            color: 'white'
          }

          .brique {
            color: ${palette.brique}
          }
          small {
            font-size: 12px;
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

  elevMax () {
    return Math.max.apply(null, this.props.trail.properties.elevations)
  }
  elevMin () {
    return Math.min.apply(null, this.props.trail.properties.elevations)
  }

  joursString () {
    if (this.props.jours > 2) return `${this.props.jours} jours · ${this.props.jours - 1} nuits`
    if (this.props.jours === 2) return `${this.props.jours} jours · ${this.props.jours - 1} nuit`
    else return `${this.props.jours} jours`
  }

  tagsToTags () {
    return this.props.tags.map((tag, i) => {
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
      case 'Difficile':
        emoji = <Emoji name='chart-with-upwards-trend' size='2x'/>
        break
      case 'Peu fréquenté':
        emoji = <Emoji name='walking' size='2x'/>
        break
      case 'Fréquenté':
        emoji = <span><Emoji name='walking' size='2x'/><Emoji name='walking' size='2x'/></span>
        break
      case 'Eau sur le chemin':
        emoji = <Emoji name='potable-water' size='2x'/>
        break
      default:
        emoji = <Emoji name='smile' size='2x'/>
        break
      }

      return (
        <div
          className='px12 py12'
          style={{
            flex: 1,
            fontFamily: 'Bad Script',
            fontSize: '18px',
            color: 'white',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)'
          }}
          key={i}
        >
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
