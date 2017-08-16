import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Quote = ({ children, author }) => (
  <div className='pr12 py30'>
    <blockquote>
      « {children} »
    </blockquote>
    <p>
      { author }
    </p>
    <style jsx>{`
      blockquote {
        font-size: 24px;
        color: ${palette.tournesol};
        font-family: 'Bad Script';
      }

      p {
        font-size: 14px;
        color: ${palette.tournesol};
        font-family: 'Open Sans', sans;
        font-style: italic;
      }

      @media screen and (min-width: 500px) {
        blockquote {
          padding-left: 60px;
        }
        p {
          padding-left: 66px;
        }
      }

      @media screen and (max-width: 500px) {
        blockquote {
          padding-left: 10px;
        }
        p {
          padding-left: 16px;
        }
      }

    `}</style>
  </div>
)

Quote.propTypes = {
  children: PropTypes.string,
  author: PropTypes.string
}

export default Quote
