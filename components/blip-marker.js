import PropTypes from 'prop-types'

const BlipMarker = ({ size }) => (
  <div className='marker animation-pulse' style={{width: size, height: size}}>
    <style jsx>{`
      .marker {
        background-color: #ee8d0c;
        border-radius: 50%;
      }
    `}</style>
  </div>
)

BlipMarker.propTypes = {
  size: PropTypes.number
}

export default BlipMarker
