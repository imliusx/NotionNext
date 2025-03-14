const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  HEXO_HOME_BANNER_GREETINGS: [
    'Hi，我是一个程序员',
    'Hi，我是一个打工人',
    'Hi，我是一个干饭人',
    '欢迎来到我的博客🎉'
  ], // 首页大图标语文字

  HEXO_HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  // 已知未修复bug, 在移动端开启true后会加载不出图片； 暂时建议设置为false。
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定，true 则滚动时图片不懂动； false则随鼠标滚动 ;
  // 是否显示开始阅读按钮
  HEXO_SHOW_START_READING: true,

  // 菜单配置
  HEXO_MENU_INDEX: true, // 显示首页
  HEXO_MENU_CATEGORY: true, // 显示分类
  HEXO_MENU_TAG: true, // 显示标签
  HEXO_MENU_ARCHIVE: true, // 显示归档
  HEXO_MENU_SEARCH: true, // 显示搜索
  HEXO_MENU_RANDOM: true, // 显示随机跳转按钮

  HEXO_POST_LIST_COVER: true, // 列表显示文章封面
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true, // 移动端悬浮目录

  // 主题颜色
  THEME: {
    PRIMARY_COLOR: '#ff2a6d', // 霓虹粉红色
    SECONDARY_COLOR: '#05d9e8', // 霓虹青色
    ACCENT_COLOR: '#ff0099', // 霓虹紫色
    BG_COLOR: '#121212', // 深黑色背景
    BG_COLOR_DARK: '#0a0a0a', // 更深的黑色
    BG_COLOR_LIGHT: '#1a1a1a', // 稍浅的黑色
    TEXT_COLOR: '#ffffff', // 白色文本
    TEXT_COLOR_SECONDARY: '#cccccc', // 次要文本颜色
    BORDER_COLOR: '#333333', // 边框颜色
    
    // 赛博朋克特有元素
    NEON_GLOW: '0 0 5px #ff2a6d, 0 0 10px #ff2a6d, 0 0 15px #ff2a6d', // 霓虹发光效果
    GLITCH_COLOR_1: '#ff2a6d', // 故障效果颜色1
    GLITCH_COLOR_2: '#05d9e8', // 故障效果颜色2
    GRID_COLOR: 'rgba(5, 217, 232, 0.1)', // 网格线颜色
  },
  
  // 赛博朋克主题特性开关
  CYBERPUNK_FEATURES: {
    ENABLE_GLITCH_EFFECT: true, // 启用故障效果
    ENABLE_NEON_BORDERS: true, // 启用霓虹边框
    ENABLE_GRID_BACKGROUND: true, // 启用网格背景
    ENABLE_SCAN_LINES: true, // 启用扫描线效果
  }
}
export default CONFIG
