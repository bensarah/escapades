import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Quote = ({ children, author }) => (
  <div className='pr12 py30 pl12 pl60-ml txt-l'>
    <blockquote>
      «&nbsp;{children}&nbsp;»
    </blockquote>
    <p className='txt-m txt-italic'>
      { author }
    </p>
    <style jsx>{`
      blockquote {
        font-family: 'Bad Script';
      }

      blockquote, p {
        color: ${palette.tournesol};
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

Quote.propTypes = {
  children: PropTypes.string,
  author: PropTypes.string
}

export default Quote
