import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../logo'
import Lamp from './lamp'
import LogoText from '../logo-text'

const IndexHeader = ({background}) => (
  <div className='w-full'>
    <div
      className='index-header w-full display-block relative'
      style={{background: `url(${background}) no-repeat center center`, backgroundSize: 'cover'}}
    >
      <div className='logo-container align-center absolute bottom pl60 z2 animation-fade-in animation--speed-1 wmin120 wmin180-ml'>
        <Logo style={{fill: 'white', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='w-full pb18 px30'/>
        <LogoText style={{fill: 'white', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))'}} className='w-full'/>
        <p className='bad-script txt-shadow color-gray-light txt-xl-ml txt-l'>Notre blog de rando</p>
      </div>
    </div>
    <div className='lamp-container bg-bleu-nuit w-full align-center z2 pb120'>
      <Lamp className='lamp relative animation-fade-in top center align-center z5 h-full'/>
    </div>
    <style jsx>{`

    `}</style>
  </div>
)

IndexHeader.propTypes = {
  background: PropTypes.string
}

export default IndexHeader
