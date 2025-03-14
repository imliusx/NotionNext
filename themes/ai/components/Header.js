import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Header() {
  return (
    <header 
      className="cyber-nav"
      style={{
        borderBottom: siteConfig('NEXT_BORDER_GLOW'),
        backdropFilter: 'blur(8px)'
      }}>
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="neon-text text-2xl font-mono hover:text-cyan-400 transition-colors">
          {siteConfig('TITLE')}
        </Link>
        
        <div className="flex space-x-8">
          <Link href="/archive" className="hover:text-purple-400 neon-underline">
            档案
          </Link>
          <Link href="/tag" className="hover:text-green-400 neon-underline">
            标签
          </Link>
        </div>
      </nav>
    </header>
  )
}