import React from 'react'
import PropTypes from 'prop-types'

const PreFooter = ({cta, quote, url}) => {
  return (
    <div className='prefooter px18 py30 bg-gray-faint color-gray align-center'>
          <a href={url} className='cursor-pointer'>
            {cta}<span className='icon-inliner px6'><svg className='icon icon--s'><use xlinkHref='#icon-arrow-right'/></svg></span>
          </a>
        {
          quote
          ? <p className='quote pt6 txt-l'>«&nbsp;{quote}&nbsp;»</p>
          : null
        }
    </div>
  )
}

PreFooter.propTypes = {
  cta: PropTypes.string,
  quote: PropTypes.string,
  url: PropTypes.string
}

export default PreFooter
