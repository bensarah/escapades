export default ({ children }) => (
  <h1>
    <a href='#'>{ children }</a>
    <style jsx>{`
      h1 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      a {
        color: #FF001F;
        text-decoration: none;
      }
      a:hover {
        background-color: #FF001F;
        color: #fff;
      }
    `}</style>
  </h1>
)
