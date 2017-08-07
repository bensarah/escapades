import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Quote = ({ children }) => (
    <blockquote className='prose pl60 pr12 py30'>
      " { children } "
    <style jsx>{`
      blockquote {
        font-size: 24px;
        color: ${palette.tournesol};
        font-family: 'Bad Script', serif
      }
    `}</style>
  </blockquote>
)

Quote.propTypes = {
  children: PropTypes.string
}

export default Quote
