import Meta from '../components/meta'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <div className='main'>

    { children }

    <Meta />

    <style jsx>{`
      .main {
        padding: 25px 50px;
      }
    `}</style>
  </div>
)

Main.propTypes = {
  children: PropTypes.array
}

export default Main
