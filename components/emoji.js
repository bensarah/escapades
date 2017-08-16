import PropTypes from 'prop-types'

const Emoji = ({ name, size }) => (
  <i className={'twa twa-' + name + (size ? ' twa-' + size : '')}></i>
)

Emoji.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string
}

export default Emoji
