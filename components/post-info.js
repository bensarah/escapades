import PropTypes from 'prop-types'
import Link from 'next/link'

const PostInfo = ({ id, date, title, highlight, header }) => (
  <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
    <div
      className='post h240 w240 hmin240 wmin240 mx30 my30 round cursor-pointer z0'
      onMouseEnter={highlight}
      onClick={highlight}
      style={{background: `url(${header}) no-repeat center center`}}
    >
      <div className='filter h240 w240 absolute z1'>
      </div>
      <div className='title h120 w180 my60 mx30 px12 py12 bg-lighten75 align-center z2 absolute'>
        { date } <br/> { title }
      </div>

      <style jsx global>{`
        .title {
          font-size: 25px;
          line-height: 35px;
          font-family: 'Passion One', sans-serif;
        }

        .filter {
          background: linear-gradient(45deg, #c63a22, #e2a541);
          opacity: 0.3;
          transition: opacity 0.7s ease-out;
        }

        .post {
          background-size: cover;
        }

        .post:hover .filter{
          opacity: 0;
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
