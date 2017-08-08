import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Quote = ({ children, author }) => (
  <div className='prose pl60 pr12 py30'>
    <blockquote>
      " { children } "
    </blockquote>
    <p className='pl30'>
      { author }
    </p>
    <style jsx>{`
      blockquote {
        font-size: 24px;
        color: ${palette.tournesol};
        font-family: 'Bad Script', serif
      }
      p {
        font-size: 14px;
        color: ${palette.tournesol};
        font-family: 'Open Sans', sans
      }
    `}</style>
  </div>
)

Quote.propTypes = {
  children: PropTypes.string,
  author: PropTypes.string
}

export default Quote
