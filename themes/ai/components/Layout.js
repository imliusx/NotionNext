import { siteConfig } from '@/lib/config'
import Head from 'next/head'

const Layout = (props) => {
  const { children } = props
  return (
    <div 
      className='cyber-theme'
      style={{
        background: siteConfig('NEXT_BG_GRADIENT'),
        fontFamily: siteConfig('NEXT_FONT_FAMILY'),
        minHeight: '100vh'
      }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet"/>
      </Head>

      {/* 头部导航 */}
      <header style={{ borderBottom: siteConfig('NEXT_BORDER_GLOW') }}>
        {/* Header组件内容 */}
      </header>

      <main className="cyber-main">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="cyber-footer">
        {/* Footer组件内容 */}
      </footer>
    </div>
  )
}

export default Layout