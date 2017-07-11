import PropTypes from 'prop-types'

const P = ({ children }) => (
  <p className='prose py6'>{ children }</p>
)

P.propTypes = {
  children: PropTypes.string
}

export default P
