import PropTypes from 'prop-types'

const Title = ({ children }) => (
  <h1 className='prose my12'>
    { children }
    <style jsx>{`
      h1 {
        font-size: 36px;
      }
    `}</style>
  </h1>
)

Title.propTypes = {
  children: PropTypes.string
}

export default Title
