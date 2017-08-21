import PropTypes from 'prop-types'
import Link from 'next/link'
import palette from '../../styles/palette'

const PostInfo = ({ id, date, title, subtitle, header, url }) => {
  const polygon = '0,0 240,0 240,170 130,170 120,180 110,170 0,170'

  return (
      <div>
        <Link prefetch href={url}>
          <svg
            className='post flex-child relative w240 mx30 unround cursor-pointer'
            height='180' width='300'
          >
            <defs>
              <pattern id={'img' + id} patternUnits='userSpaceOnUse' height='180' width='300'>
                <image x='0' y='0' height='180' width='300' xlinkHref={header} preserveAspectRatio='xMinYMin slice' />
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
            <text className='anton txt-shadow txt-xl transla transition' x='20' y='150' fill='white'>{title.toUpperCase()}</text>
            <text className='bad-script txt-shadow txt-bold txt-l apparition-text transition' x='20' y='150' fill='white' opacity='0'>{subtitle}</text>
          </svg>
        </Link>

        <svg className='timeline' height='42' width='300'>
          <line x1='0' y1='12' x2='300' y2='12' style={{stroke: palette.grisClair, strokeWidth: 2}}/>
          <circle cx='150' cy='12' r='5' style={{stroke: palette.bleuNuit, strokeWidth: 3, fill: palette.tournesol}}/>
          <text className='txt-s' x='150' y='36' fill={palette.grisClair} textAnchor='middle' >{date}</text>
        </svg>

        <style jsx>{`
          .filter, .hoverfilter .apparition-text{
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

          .post:hover .transla {
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
          }

          .post:hover .apparition-text {
            opacity:1;
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
  header: PropTypes.string,
  url: PropTypes.string
}

export default PostInfo
