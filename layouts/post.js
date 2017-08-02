import React, {Component} from 'react'
import Page from './main'
import PropTypes from 'prop-types'
import Header from '../components/post/header'
import Footer from '../components/post/footer'

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      content: 'not triggered yet'
    }
  }

  render () {
    return (
      <Page>
        <Header
          img={this.props.header}
          title={this.props.title}
          home={true}
          trail={this.props.trail}
        />
        <div className='flex-parent flex-parent--row flex-parent--stretch-cross'>
          <div className='sidebar flex-child'>{this.state.content}</div>
          <article className='flex-child flex-child--grow px60 py30'>
            {
              this.props.children.map((child, i) => React.cloneElement(child, {key: i, setContent: (content) => this.setState({content})}))
            }
          </article>
        </div>
        <style jsx>{`
          .article-container {
            position: relative;
          }

          article {
            font-size: 18px;
          }

          .sidebar {
            min-width: 30%;
            background-color: yellow;
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
  }
}

Post.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.array,
  trail: PropTypes.object,
  id: PropTypes.string
}

export default Post
