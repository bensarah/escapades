import React from 'react'
import Meta from '../components/meta'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <div className='full-height flex-parent flex-parent--column'>
    { children }
    <Meta />
  </div>
)

Main.propTypes = {
  children: PropTypes.array
}

export default Main
