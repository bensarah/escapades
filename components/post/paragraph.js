import PropTypes from 'prop-types'

const P = ({ children }) => (
  <p className='prose pb30'>
    { children }
    <style jsx>{`
      p {
        font-size: 18px;
      }
    `}</style>
  </p>
)

P.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

export default P
