import PropTypes from 'prop-types'
import palette from '../../styles/palette'

const Footnote = ({ children }) => (
    <p className='prose'>
      * { children }
    <style jsx>{`
      p {
        font-size: 14px;
        color: ${palette.taupe};
        font-family: 'Open Sans', serif
      }
    `}</style>
  </p>
)

Footnote.propTypes = {
  children: PropTypes.string
}

export default Footnote
