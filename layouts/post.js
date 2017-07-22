import Page from './main'
import PropTypes from 'prop-types'
import Header from '../components/post/header'
import Footer from '../components/post/footer'

const Post = ({ title, header, children }) => (
  <Page>
    <Header
      img={header}
      title={title}
      home={true}
    />
    <article>
      { children }
    </article>
    <style jsx>{`
      article {
        max-width: 650px;
        margin: auto;
        font-size: 14px;
      }
    `}</style>
    <style jsx global>{`
      body {
        width: 100%;
        overflow-x: hidden;
      }
    `}</style>
    <Footer>
      footer
    </Footer>
  </Page>
)

Post.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.array
}

export default Post
