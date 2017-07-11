import PropTypes from 'prop-types'

const Img = ({ src }) => (
  <div>
    <img src={src} />
    <style jsx>{`
      img {
        width: 100%;
      }
    `}</style>
  </div>
)

Img.propTypes = {
  src: PropTypes.string
}

export default Img
