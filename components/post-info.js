import PropTypes from 'prop-types'
import Link from 'next/link'

const PostInfo = ({ id, date, title }) => (
  <div className='post bg-darken5 px12 py12 round'>
    <span className='mr6'>{ date } - </span>
    <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}>
      <a className='link'>{ title }</a>
    </Link>

    <style jsx>{`

    `}</style>
  </div>
)

PostInfo.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string
}

export default PostInfo
