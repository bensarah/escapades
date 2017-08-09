import PropTypes from 'prop-types'

const Emoji = ({ src }) => (
  <span
    className="emoji h24 w24"
    draggable="false"
    style={{
      background: `url(${src}) center center `,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
    }}
  >
  </span>
)

Emoji.propTypes = {
  src: PropTypes.string
}

export default Emoji
