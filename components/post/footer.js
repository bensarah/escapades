import PropTypes from 'prop-types'

const Footer = ({ children }) => (
  <div>
    <div className='h60 w-full display-block' />
    <div className='footer hmin120 py30 px30'>
      {children}
    </div>
    <style jsx>{`

      .footer {
        background-color: #eea999
      }
    `}</style>
  </div>
)

Footer.propTypes = {
  children: PropTypes.string
}

export default Footer
