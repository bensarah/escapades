import React from 'react'
import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Footnote = ({ children }) => (
    <p className='pb6 txt-m'>
      * { children }
    <style jsx>{`
      p {
        color: ${palette.lavande};
      }
    `}</style>
  </p>
)

Footnote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

export default Footnote
