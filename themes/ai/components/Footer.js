import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer 
      className="cyber-footer p-6 text-center"
      style={{
        borderTop: siteConfig('NEXT_BORDER_GLOW'),
        backdropFilter: 'blur(8px)',
        color: siteConfig('NEXT_TAG_COLOR')
      }}>
      <div className="font-mono text-sm">
        © {new Date().getFullYear()} {siteConfig('AUTHOR')}
        <span className="mx-2">|</span>
        <span className="neon-pulse">Powered by NotionNext</span>
      </div>
    </footer>
  )
}