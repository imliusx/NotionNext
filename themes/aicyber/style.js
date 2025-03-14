/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
import CONFIG from './config'

const Style = () => {
  const { THEME } = CONFIG
  
  return (
    <style jsx global>{`
      :root {
        --primary-color: ${THEME.PRIMARY_COLOR};
        --secondary-color: ${THEME.SECONDARY_COLOR};
        --accent-color: ${THEME.ACCENT_COLOR};
        --bg-color: ${THEME.BG_COLOR};
        --bg-color-dark: ${THEME.BG_COLOR_DARK};
        --bg-color-light: ${THEME.BG_COLOR_LIGHT};
        --text-color: ${THEME.TEXT_COLOR};
        --text-color-secondary: ${THEME.TEXT_COLOR_SECONDARY};
        --border-color: ${THEME.BORDER_COLOR};
        --neon-glow: ${THEME.NEON_GLOW};
        --glitch-color-1: ${THEME.GLITCH_COLOR_1};
        --glitch-color-2: ${THEME.GLITCH_COLOR_2};
        --grid-color: ${THEME.GRID_COLOR};
      }
      
      body {
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: 'Orbitron', 'Rajdhani', sans-serif;
        position: relative;
        overflow-x: hidden;
      }
      
      /* 网格背景效果 */
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
          linear-gradient(var(--grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
        background-size: 20px 20px;
        z-index: -1;
        opacity: 0.5;
      }
      
      /* 扫描线效果 */
      body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          transparent 0%, 
          rgba(32, 32, 32, 0.2) 50%, 
          transparent 100%
        );
        background-size: 100% 4px;
        pointer-events: none;
        z-index: 999;
        opacity: 0.15;
      }
      
      /* 霓虹文本效果 */
      h1, h2, h3 {
        color: var(--primary-color);
        text-shadow: var(--neon-glow);
        letter-spacing: 2px;
        font-weight: 700;
      }
      
      /* 霓虹边框效果 */
      .card, .container, .sidebar {
        border: 1px solid var(--primary-color);
        box-shadow: var(--neon-glow);
        background-color: rgba(10, 10, 10, 0.8);
        backdrop-filter: blur(5px);
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        transition: all 0.3s ease;
      }
      
      .card:hover {
        box-shadow: 0 0 10px var(--secondary-color), 0 0 20px var(--secondary-color);
        transform: translateY(-5px);
      }
      
      /* 按钮样式 */
      button, .button {
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        color: var(--text-color);
        border: none;
        padding: 10px 20px;
        border-radius: 3px;
        font-family: 'Orbitron', sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      button:hover, .button:hover {
        box-shadow: var(--neon-glow);
        transform: scale(1.05);
      }
      
      button::before, .button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: all 0.5s ease;
      }
      
      button:hover::before, .button:hover::before {
        left: 100%;
      }
      
      /* 链接样式 */
      a {
        color: var(--secondary-color);
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease;
      }
      
      a:hover {
        color: var(--primary-color);
        text-shadow: var(--neon-glow);
      }
      
      /* 导航栏样式 */
      nav {
        background-color: var(--bg-color-dark);
        border-bottom: 1px solid var(--primary-color);
        box-shadow: var(--neon-glow);
      }
      
      /* 代码块样式 */
      pre, code {
        background-color: var(--bg-color-dark);
        border-left: 3px solid var(--secondary-color);
        font-family: 'Fira Code', monospace;
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
      }
      
      /* 故障文本效果 */
      .glitch-text {
        position: relative;
        animation: glitch 1s infinite;
      }
      
      @keyframes glitch {
        0% {
          text-shadow: 2px 0 0 var(--glitch-color-1), -2px 0 0 var(--glitch-color-2);
        }
        25% {
          text-shadow: -2px 0 0 var(--glitch-color-1), 2px 0 0 var(--glitch-color-2);
        }
        50% {
          text-shadow: 2px 0 0 var(--glitch-color-1), -2px 0 0 var(--glitch-color-2);
        }
        75% {
          text-shadow: -2px 0 0 var(--glitch-color-1), 2px 0 0 var(--glitch-color-2);
        }
        100% {
          text-shadow: 2px 0 0 var(--glitch-color-1), -2px 0 0 var(--glitch-color-2);
        }
      }
      
      /* 滚动条样式 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--bg-color-dark);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(var(--primary-color), var(--secondary-color));
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--accent-color);
      }
      
      /* 现有样式... */
    `}</style>
  )
}

export default Style
