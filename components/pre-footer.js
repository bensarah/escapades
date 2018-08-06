import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const PreFooter = ({cta, quote, url}) => {
  return (
    <div className='prefooter px18 py30 bg-gray-faint color-gray align-center'>
          <Link prefetch href={url} className='cursor-pointer'>
              <a className='icon-inliner px6'>{cta}<svg className='icon icon--s'><use xlinkHref='#icon-arrow-right'/></svg></a>
          </Link>
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
