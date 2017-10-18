import 'babel-polyfill'
import React from 'react'
import Meta from '../components/meta'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <div className='main flex-parent flex-parent--column'>
    { children }
    <Meta />
    <style jsx>{`
      .main {
        min-height: 100vh;
      }
    `}</style>
  </div>
)

Main.propTypes = {
  children: PropTypes.array
}

export default Main
