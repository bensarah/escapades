import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Quote = ({ children, author }) => (
  <div className='pr12 py30 pl12 pl60-ml'>
    <blockquote>
      «&nbsp;{children}&nbsp;»
    </blockquote>
    <p>
      { author }
    </p>
    <style jsx>{`
      blockquote {
        font-size: 24px;
        font-family: 'Bad Script';
      }

      blockquote, p {
        color: ${palette.tournesol};
        margin: 0;
        padding: 0;
      }

      p {
        font-size: 14px;
        font-family: 'Open Sans', sans;
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
