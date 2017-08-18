import Meta from '../components/meta'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <div className='main'>
    { children }
    <Meta />
  </div>
)

Main.propTypes = {
  children: PropTypes.array
}

export default Main
