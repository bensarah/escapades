import React, {Component} from 'react'
import Page from './main'
import PropTypes from 'prop-types'
import Header from '../components/post/header'
import Footer from '../components/post/footer'

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      content: ''
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
        <div>{this.state.content}</div>
        <article>
          {
            this.props.children.map((child, i) => React.cloneElement(child, {key: i, setContent: (content) => this.setState({content})}))
          }
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
