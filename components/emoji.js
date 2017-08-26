import PropTypes from 'prop-types'

const Emoji = ({ name, size, title }) => (
  <i className={'twa twa-' + name + (size ? ' twa-' + size : '')} title={title}></i>
)

Emoji.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string
}

export default Emoji
