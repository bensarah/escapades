import React from 'react'
import PropTypes from 'prop-types'

const BlipMarker = ({ size }) => (
  <div className='marker animation-pulse animation--infinite' style={{width: size, height: size}} />
)

BlipMarker.propTypes = {
  size: PropTypes.number
}

export default BlipMarker
