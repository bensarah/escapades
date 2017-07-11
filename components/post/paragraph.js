import PropTypes from 'prop-types'

const P = ({ children }) => (
  <p className='prose py6'>
    { children }
    <style jsx>{`
      p {
        text-align: justify;
      }
    `}</style>
  </p>
)

P.propTypes = {
  children: PropTypes.string
}

export default P
