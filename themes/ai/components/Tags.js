import Link from 'next/link'

export default function Tags({ tagOptions, currentTag }) {
  return (
    <div className="cyber-tags-container" style={{ border: '2px solid ' + siteConfig('NEXT_TAG_COLOR'), boxShadow: siteConfig('NEXT_BORDER_GLOW') }}>
      <ul className="flex flex-wrap gap-4 p-4">
        {Object.keys(tagOptions).map(key => (
          <li
            key={key}
            className={`cyber-tag-item ${currentTag === key ? 'active' : ''}`}
            style={{
              border: `1px solid ${siteConfig('NEXT_TAG_COLOR')}`,
              background: currentTag === key ? 'rgba(0,255,157,0.1)' : 'transparent'
            }}>
            <Link
              href={`/tag/${encodeURIComponent(key)}`}
              className="px-4 py-2 block font-mono"
              style={{
                color: currentTag === key ? siteConfig('NEXT_TAG_COLOR') : '#fff',
                textShadow: currentTag === key ? `0 0 10px ${siteConfig('NEXT_TAG_COLOR')}` : 'none'
              }}>
              {`${key} (${tagOptions[key].count})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}