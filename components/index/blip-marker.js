import React from 'react'
import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const BlipMarker = ({ size }) => (
  <div className='marker animation-pulse animation--infinite' style={{width: size, height: size}}>
    <style jsx>{`
      .marker {
        background-color: ${palette.tournesol};
        border-radius: 50%;
      }
    `}</style>
  </div>
)

BlipMarker.propTypes = {
  size: PropTypes.number
}

export default BlipMarker
