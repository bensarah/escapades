import PropTypes from 'prop-types'
import Link from 'next/link'
import palette from '../styles/palette'

const PostInfo = ({ id, date, title, highlight, header }) => {
  const polygon = '0,0 300,0 300,170 160,170 150,180 140,170 0,170'

  return (
      <div>
        <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
          <svg
            className='post flex-child relative w300 mx30 unround cursor-pointer'
            onMouseEnter={highlight}
            onClick={highlight}
            height='180' width='360'
          >
            <defs>
              <pattern id={'img' + id} patternUnits='userSpaceOnUse' height='180' width='360'>
                <image x='0' y='0' height='180' width='360' xlinkHref={header} preserveAspectRatio='xMinYMin slice' />
              </pattern>
              <linearGradient id={'grad' + id} x1='0%' y1='100%' x2='100%' y2='0%'>
                <stop offset='0%' style={{stopColor: palette.brique, stopOpacity: 0.5}} />
                <stop offset='100%' style={{stopColor: palette.tournesol, stopOpacity: 0.2}}/>
              </linearGradient>
            </defs>
            <polygon points={polygon} fill={`url(#${'img' + id})`} />
            <polygon className='filter' points={polygon} fill={`url(#${'grad' + id})`} />
            <text className='title' x='30' y='150' fill='white'>{title.toUpperCase()}</text>
          </svg>
        </Link>

        <svg className='timeline' height='42' width='360'>
          <line x1='0' y1='12' x2='360' y2='12' style={{stroke: palette.lavande, strokeWidth: 2}}/>
          <circle cx='180' cy='12' r='5' style={{stroke: 'white', strokeWidth: 2, fill: palette.brique}}/>
          <text className='date' x='180' y='36' fill={palette.lavande} textAnchor='middle' >{date}</text>
        </svg>

        <style jsx global>{`
          .title {
            font-size: 25px;
            line-height: 35px;
            font-family: 'Anton', sans-serif;
            text-shadow: 1px 1px 3px #303240;
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
