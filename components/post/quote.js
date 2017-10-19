import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ children, author }) => (
  <div className='post-quote pr12 py30 pl12 pl60-ml'>
    <blockquote className='bad-script txt-l txt-xl-ml'>
      «&nbsp;{children}&nbsp;»
    </blockquote>
    <p className='txt-s txt-m-ml txt-italic'>
      { author }
    </p>
  </div>
)

Quote.propTypes = {
  children: PropTypes.string,
  author: PropTypes.string
}

export default Quote
