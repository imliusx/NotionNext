/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // 底色
    body{
        background-color: #0a0a1a;
        background-image: linear-gradient(rgba(0, 255, 157, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 157, 0.05) 1px, transparent 1px);
        background-size: 20px 20px;
    }
    .dark body{
        background-color: black;
    }
  
    /*  菜单下划线动画 */
    #theme-ai .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#9d00ff, #00ff9d);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-ai .menu-link:hover {
        background-size: 100% 2px;
        color: #928CEE;
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-ai .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

    // 选中字体颜色
    ::selection {
        background: rgba(45, 170, 219, 0.3);
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    // 菜单下划线动画
    #theme-ai .menu-link {
        background-image: linear-gradient(#7a00cc, #00cc7a);
    }
    
    // 自定义滚动条
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 255, 157, 0.8);
        box-shadow: 0 0 5px rgba(0, 255, 157, 0.3);
    }
    
    * {
        scrollbar-color: rgba(0, 255, 157, 0.6) transparent;
    }
    

  `}</style>)
}

export { Style }
