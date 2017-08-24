import {Component} from 'react'
import PropTypes from 'prop-types'
import Isvg from 'react-inlinesvg'
import palette from '../../styles/palette'

class InfoSection extends Component {
  render () {
    var upsDowns = this.upsAndDowns()

    return (
      <div className='info-section txt-shadow color-white'>
        <div className='flex-parent flex-parent--row py30 px6 px30-ml align-center top-row'>

          <div className='px6'>
            <div className='txt-l txt-bold'>Distance parcourue</div>
            <div className='anton bigtext'>
              {this.props.trail.properties.distance ? this.props.trail.properties.distance.toFixed(1).toString().replace(/\./g, ',') : ''} <span className='txt-l txt-bold'>km</span>
            </div>
            <span className={this.styles.icon}><svg className='brique icon'><use xlinkHref='#icon-sun'/></svg></span>
            <span className='txt-l'>{this.props.jours}</span>
            <span className={this.styles.icon}><svg className='brique icon'><use xlinkHref='#icon-moon'/></svg></span>
          </div>

          <div className='px6'>
            <div className='txt-l txt-bold'>Dénivelé positif</div>
            <div className='anton bigtext'>
              + {upsDowns ? upsDowns[0] : null} <span className='txt-l txt-bold'>m</span>
            </div>
            <span className={this.styles.icon}><svg className='brique icon'><use xlinkHref='#icon-chevron-up'/></svg></span>
            <span className='txt-l'>max {this.elevMax()} m · min {this.elevMin()} m</span>
            <span className={this.styles.icon}><svg className='brique icon'><use xlinkHref='#icon-chevron-down'/></svg></span>
          </div>

        </div>
        <div className='flex-parent flex-parent--row flex-parent--wrap py30 px30 align-center'>
          {this.tagsToTags()}
        </div>
        <style jsx>{`
          .info-section {
            background: linear-gradient(to bottom, ${palette.tournesol} 50%, #ffa100);
          }

          .flex-parent div {
            flex: 1
          }

          .bigtext {
            font-size: 48px;
          }

          .brique {
            fill: ${palette.brique}
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
      case 'Attention aux marmottes':
        icon = 'marmot'
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
      case 'Points de vue':
        icon = 'binoculars'
        break
      case 'Boucle':
        icon = 'loop'
        break
      default:
        icon = 'mountains'
        break
      }

      return (
        <div
          className='tag bad-script txt-shadow color-white px12 py12 txt-m txt-l-ml'
          key={i}
        >
          <Isvg className='icon drop-shadow w36 h36 w60-ml h60-ml inline-block' src={`/static/icons/${icon}.svg`}></Isvg>
          <br/>{tag}
          <style>{`
            .tag {
              flex: 1;
            }

            .icon svg {
              stroke: white;
            }
          `}</style>
        </div>
      )
    })
  }

  get styles () {
    return {
      icon: 'inline-block align-middle px6'
    }
  }
}

InfoSection.propTypes = {
  trail: PropTypes.object.isRequired,
  jours: PropTypes.string,
  tags: PropTypes.array
}

export default InfoSection
