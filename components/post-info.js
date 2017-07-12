import PropTypes from 'prop-types'
import Link from 'next/link'
import Img from './post/img'

const PostInfo = ({ id, date, title, highlight, header }) => (
  <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
    <div className='post mx12 my12 px12 py12 round cursor-pointer' onMouseEnter={highlight} onClick={highlight}>
      <Img src={header} className='img-header'/>

      <h1 className='mx12 my12 prose'>{ date } - { title }</h1>

      <style jsx global>{`
        .img-header {
          height: 100px;
          object-fit: cover;
          border-radius: 3px
        }

        h1 {
          font-size: 18px;
        }

        .post {
          background-color: #eeeeee;
          transition: background-color 0.5s ease-out;
        }

        .post:hover {
          background-color: #cbccdb;
        }
      `}</style>
    </div>
  </Link>
)

PostInfo.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.func,
  header: PropTypes.string
}

export default PostInfo
