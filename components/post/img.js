import React from 'react'
import PropTypes from 'prop-types'

const Img = ({ src }) => (
  <div
    style={{
      background: `url(${src}) no-repeat center center`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
    }}
  >
  </div>
)

Img.propTypes = {
  src: PropTypes.string
}

export default Img
