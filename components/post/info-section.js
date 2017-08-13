import {Component} from 'react'
import PropTypes from 'prop-types'
import Isvg from 'react-inlinesvg'
import palette from '../../styles/palette'

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
            <p className='subbigtext'><span className='brique px3'>☀</span> {this.props.jours} <span className='brique px3'>☾</span></p>
          </div>

          <div className='px6'>
            <div className='metric'>Dénivelé positif</div>
            <div className='bigtext'>
              + {upsDowns[0]} <span className='unit'>m</span>
            </div>
            <p className='subbigtext'><span className='brique px3'>↗</span>  max {this.elevMax()} <small>m</small> · min {this.elevMin()} <small>m</small>
            <span className='brique px3'>↘</span></p>
          </div>

        </div>
        <div className='flex-parent flex-parent--row flex-parent--wrap py30 px30 align-center'>
          {this.tagsToTags()}
        </div>
        <style jsx>{`
          .info-section {
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
          }

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

          .metric, .subbigtext {
            font-family: Open Sans;
            font-size: 20px;
          }

          .metric {
            font-weight: bold;
          }

          .bigtext {
            font-size: 48px;
            font-family: Anton;
          }

          .unit {
            font-size: 24px;
            font-family: Anton;
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

  tagsToTags () {
    return this.props.tags.map((tag, i) => {
      var icon
      switch (tag) {
      case 'Attention aux ours':
        icon = 'bear'
        break
      case 'Permis obligatoires':
        icon = 'permit'
        break
      case 'Bivouac':
        icon = 'tent'
        break
      case 'Difficile':
        icon = 'hiking-poles'
        break
      case 'Peu fréquenté':
        icon = 'trail'
        break
      case 'Fréquenté':
        icon = 'hiker'
        break
      case 'Eau sur le chemin':
        icon = 'water'
        break
      default:
        icon = 'mountains'
        break
      }

      return (
        <div
          className='tag px12 py12'
          key={i}
        >
          <Isvg wrapper={React.DOM.div} className='icon w36 h36 inline-block' src={`/static/icons/${icon}.svg`}></Isvg>
          <br/>{tag}
          <style>{`
            .tag {
              flex: 1;
              font-family: "Bad Script";
              font-size: 18px;
              font-weight: bold;
              color: white;
              text-shadow: '1px 1px 5px rgba(0, 0, 0, 0.2);
            }

            .icon svg {
              stroke: 'white';
              filter: drop-shadow( 1px 1px 5px rgba(0, 0, 0, 0.2) );
            }
          `}</style>
        </div>
      )
    })
  }
}

InfoSection.propTypes = {
  trail: PropTypes.object.isRequired,
  jours: PropTypes.string,
  tags: PropTypes.array
}

export default InfoSection
