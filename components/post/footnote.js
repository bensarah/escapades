import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Footnote = ({ children }) => (
    <p className='prose pb6'>
      * { children }
    <style jsx>{`
      p {
        font-size: 14px;
        color: ${palette.lavande};
        font-family: 'Open Sans', serif;
      }

      *::selection {
        color: ${palette.tournesol};
        background-color: ${palette.grisClair};
      }
    `}</style>
  </p>
)

Footnote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

export default Footnote
