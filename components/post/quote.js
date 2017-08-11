import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Quote = ({ children, author }) => (
  <div className='pl60 pr12 py30'>
    <blockquote className='pl0'>
      « {children} »
    </blockquote>
    <p>
      { author }
    </p>
    <style jsx>{`
      blockquote {
        font-size: 24px;
        color: ${palette.tournesol};
        font-family: 'Noto Serif', serif;
        font-style: italic;
      }
      p {
        font-size: 14px;
        color: ${palette.tournesol};
        font-family: 'Open Sans', sans
        font-style: italic;
      }
    `}</style>
  </div>
)

Quote.propTypes = {
  children: PropTypes.string,
  author: PropTypes.string
}

export default Quote
