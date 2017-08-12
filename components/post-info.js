import PropTypes from 'prop-types'
import Link from 'next/link'
import palette from '../styles/palette'

const PostInfo = ({ id, date, title, subtitle, highlight, header }) => {
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
              <linearGradient id={'grad' + id} x1='50%' y1='0%' x2='50%' y2='100%'>
                <stop className='stop' offset='0%' style={{stopColor: palette.lavande, stopOpacity: 0.4}} />
                <stop offset='100%' style={{stopColor: palette.tournesol, stopOpacity: 0.8}}/>
              </linearGradient>
              <linearGradient id={'hovergrad' + id} x1='50%' y1='0%' x2='50%' y2='100%'>
                <stop className='stop' offset='0%' style={{stopColor: palette.lavande, stopOpacity: 0.1}} />
                <stop offset='100%' style={{stopColor: palette.brique, stopOpacity: 0.2}}/>
              </linearGradient>
            </defs>
            <polygon points={polygon} fill={`url(#${'img' + id})`} />
            <polygon className='filter' points={polygon} fill={`url(#${'grad' + id})`} opacity='1'/>
            <polygon className='hoverfilter' points={polygon} fill={`url(#${'hovergrad' + id})`} opacity='0'/>
            <text className='title' x='20' y='120' fill='white'>{title.toUpperCase()}</text>
            <text className='subtitle' x='20' y='150' fill={palette.grisClair}>{subtitle}</text>
          </svg>
        </Link>

        <svg className='timeline' height='42' width='360'>
          <line x1='0' y1='12' x2='360' y2='12' style={{stroke: palette.grisClair, strokeWidth: 2}}/>
          <circle cx='180' cy='12' r='5' style={{stroke: palette.bleuNuit, strokeWidth: 3, fill: palette.tournesol}}/>
          <text className='date' x='180' y='36' fill={palette.grisClair} textAnchor='middle' >{date}</text>
        </svg>

        <style jsx global>{`
          .title {
            font-size: 30px;
            line-height: 35px;
            font-family: 'Anton', sans-serif;
            text-shadow: 1px 1px 3px #303240;
          }

          .subtitle {
            font-size: 20px;
            font-family: 'Bad Script', sans;
            text-shadow: 1px 1px 3px #303240;
          }

          .filter, .hoverfilter {
            transition: opacity 0.3s ease-out;
          }

          .post {
            background-size: cover;
          }

          .post:hover .filter{
            opacity: 0;
          }
          .post:hover .hoverfilter{
            opacity: 1;
          }
        `}</style>
      </div>
  )
}

PostInfo.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  highlight: PropTypes.func,
  header: PropTypes.string
}

export default PostInfo
