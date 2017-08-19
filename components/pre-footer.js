import PropTypes from 'prop-types'
import Link from 'next/link'
import palette from '../styles/palette'

const PreFooter = ({cta, quote, url}) => {
  return (
    <div className='px18 py30 bg-gray-faint color-gray align-center'>
        <Link prefetch href={url}>
            <a className='cursor-pointer'>
              {cta}
            </a>
        </Link>
        {
          quote
          ? <p className='quote pt6 txt-l'>«&nbsp;{quote}&nbsp;»</p>
          : null
        }
      <style jsx>{`
        .quote {
          color: ${palette.brique};
          font-family: 'Bad Script';
        }

        a {
          color: ${palette.lavande};
        }

        a:hover {
          color: ${palette.lightenLavande};
        }
      `}</style>
    </div>
  )
}

PreFooter.propTypes = {
  cta: PropTypes.string,
  quote: PropTypes.string,
  url: PropTypes.string
}

export default PreFooter
