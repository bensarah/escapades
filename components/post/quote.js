import PropTypes from 'prop-types'

const Quote = ({ children }) => (
    <blockquote className='prose pl60 pr12 py30'>
      { children }
    <style jsx>{`
      blockquote {
        font-size: 24px;
        color: #777d9b;
        font-family: 'Bad Script', serif
      }
    `}</style>
  </blockquote>
)

Quote.propTypes = {
  children: PropTypes.string
}

export default Quote
