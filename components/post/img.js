import PropTypes from 'prop-types'

const Img = ({ src, className }) => (
  <div className='container'>
    <img src={src} className={className} />
    <style jsx>{`
      img {
        width: 100%;
      }

      .container {
        width: 100%;
      }
    `}</style>
  </div>
)

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
}

export default Img
