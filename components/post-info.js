import PropTypes from 'prop-types'
import Link from 'next/link'

const PostInfo = ({ id, date, title, highlight, header }) => {
  const polygon = '0,0 300,0 300,170 160,170 150,180 140,170 0,170'

  return (
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
      <div
        className='post flex-child relative h180 w300 mx30 my30 round cursor-pointer'
        onMouseEnter={highlight}
        onClick={highlight}
      >
        <svg className='z0' height="180" width="300">
          <defs>
            <pattern id={'img' + id} patternUnits="userSpaceOnUse" height="180" width="300">
              <image x="0" y="0" height="180" width="300" xlinkHref={header} preserveAspectRatio="xMinYMin slice" />
            </pattern>
            <linearGradient id={'grad' + id} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#c63a22', stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: '#e2a541', stopOpacity: 0.2}}/>
            </linearGradient>
          </defs>
          <polygon id={'poly-img' + id} points={polygon} fill={`url(#${'img' + id})`} />
          <polygon className='filter' points={polygon} fill={`url(#${'grad' + id})`} />
        </svg>

        <div className='title absolute bottom py12 px12 color-white txt-shadow-darken50 z1'>{date} <br/> {title}</div>

        <style jsx global>{`
          .title {
            font-size: 25px;
            line-height: 35px;
            font-family: 'Passion One', sans-serif;
          }

          .filter {
            opacity: 1;
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
}

PostInfo.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.func,
  header: PropTypes.string
}

export default PostInfo
