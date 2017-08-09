import PropTypes from 'prop-types'
import Head from 'next/head'

const Emoji = ({ name }) => (
  <i className={'twa twa-' + name}>
    <Head>
      <link href='/static/vendor/twemoji-awesome.css' rel='stylesheet' />
    </Head>
  </i>
)

Emoji.propTypes = {
  name: PropTypes.string
}

export default Emoji
