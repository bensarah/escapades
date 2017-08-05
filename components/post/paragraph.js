import PropTypes from 'prop-types'

const P = ({ children }) => (
  <p className='prose py12'>
    { children }
    <style jsx>{`
      p {
        text-align: justify;
        font-size: 18px;
      }
    `}</style>
  </p>
)

P.propTypes = {
  children: PropTypes.string
}

export default P
