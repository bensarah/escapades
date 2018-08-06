import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import TrailElevation from './trail-elevation'
import Logo from '../logo'
import LogoText from '../logo-text'
import {findTrail} from '../../helpers/trail-extractor'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      portrait: false
    }
  }

  render () {
    // Define the trail linestring - trail might be a feature collection.
    var trailLineString = findTrail(this.props.trail)

    return (
      <div
        className='post-header w-full display-block relative'
        style={{background: `url(${this.props.img}) no-repeat center center`, backgroundSize: 'cover'}}
      >
        <Head><title>{this.props.title}</title></Head>
        <div className='header absolute w-full z1'>
          <a href='/' className='cursor-pointer absolute z5 px18 py18 txt-m txt-bold' title='Retour à la page d’accueil'>
            <Logo style={{fill: '#ffffff', height: '36px'}} className='inline'/>
            <LogoText style={{fill: '#ffffff', height: '36px', marginBottom: '-7px'}} className='inline'/>
          </a>
        </div>
        <div className='align-l absolute bottom pb240-ml pb180 px36 pl60-ml z2'>
          <h1 className='anton txt-shadow txt-xl color-white pb12'>{this.props.title.toUpperCase()}</h1>
          <h2 className='bad-script txt-shadow txt-l txt-xl-ml color-gray-light'>{this.props.subtitle}</h2>
          {this.state.portrait ? this.mobileLandscapeWarning() : null}
        </div>
        <TrailElevation trail={trailLineString}/>
      </div>
    )
  }

  componentDidMount () {
    if (window.innerHeight > window.innerWidth) {
      this.setState({portrait: true})
    }

    window.addEventListener('resize', () => {
      if (window.innerHeight > window.innerWidth && !this.state.portrait) {
        this.setState({portrait: true})
      } else if (window.innerHeight < window.innerWidth && this.state.portrait) {
        this.setState({portrait: false})
      }
    })
  }

  mobileLandscapeWarning () {
    return (
      <div className='bg-darken50 inline-block color-white round px12 py12 mt12 w-auto flex-parent flex-parent--center-cross'>
        <div className='w36 h36 mr6'><svg className='w-full h-full icon icon--l'><use xlinkHref='#icon-rotate'/></svg></div>
        <span className='txt-s'>Cette page a été conçue pour être lue au format paysage</span>
      </div>
    )
  }
}

Header.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  home: PropTypes.bool,
  trail: PropTypes.object
}

export default Header
