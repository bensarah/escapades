import React from 'react'
import PropTypes from 'prop-types'

const P = ({ children }) => (
  <p className='pb30 txt-m txt-l-ml'>
    { children }
  </p>
)

P.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

export default P
