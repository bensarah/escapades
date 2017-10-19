import React from 'react'
import PropTypes from 'prop-types'

const Footnote = ({ children }) => (
    <p className='pb6 txt-m lavande'>
      * { children }
  </p>
)

Footnote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

export default Footnote
