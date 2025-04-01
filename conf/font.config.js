/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-nomal',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://static.zeoseven.com/zsft/309/main/result.css',
    'https://chinese-fonts-cdn.deno.dev/packages/jhlst/dist/京華老宋体v2_002/result.css',
    'https://chinese-fonts-cdn.deno.dev/packages/scjssh/dist/素材集市社会体/result.css',
    'https://chinese-fonts-cdn.deno.dev/packages/dymh/dist/DouyinSansBold/result.css',
    'https://static.zeoseven.com/zsft/298/main/result.css',
    'https://cdn.hmos.dongs.xyz/css/harmonyos_sans_sc.css',
    'https://fonts.cdnfonts.com/css/jetbrains-mono',

    'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital@0;1&family=Permanent+Marker&display=swap',

    //'https://fonts.googleapis.com/css2?family=Anta&family=Bruno+Ace+SC&family=Bungee+Inline&family=Bungee+Outline&family=Bungee+Shade&family=Caveat:wght@400..700&family=Faster+One&family=Foldit:wght@100..900&family=Jersey+20&family=Orbitron:wght@900&family=Permanent+Marker&family=Rubik+Doodle+Shadow&family=Urbanist:ital,wght@0,800;1,800&family=Zen+Dots&display=swap',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
    //'https://fonts.googleapis.com/css2?family=Aldrich&family=Big+Shoulders+Inline:opsz,wght@10..72,100..900&family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Caveat:wght@400..700&family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Damion&family=Lexend+Deca:wght@100..900&family=Luckiest+Guy&family=Monoton&family=Orbitron:wght@400..900&family=Permanent+Marker&family=Righteous&family=Silkscreen:wght@400;700&family=Special+Elite&family=Tektur:wght@400..900&family=Urbanist:ital,wght@0,100..900;1,100..900&family=VT323&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    
    // '"Work Sans"',
    '"Roboto"',
    // '"HarmonyOS Sans SC"',
    // 'JetBrains Mono',
    'KingHwa_OldSong',     // 京華老宋体
    // 'SuCaiJiShi-SheHuiTi', // 素材集市社会体
    // '"Douyin Sans"',        // 抖音美好体
    // '荆南波波黑',           // 荆南波波黑

    'HarmonyOS Sans SC',

    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    // 'HarmonyOS_Regular',
    '"Roboto"',
    'KingHwa_OldSong',     // 京華老宋体'
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************
}
