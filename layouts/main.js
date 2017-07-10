import Meta from '../components/meta'

export default ({ children }) => (
  <div className='main'>

    { children }

    <Meta />

    <style jsx>{`
      .main {
        padding: 25px 50px;
      }
    `}</style>
  </div>
)
