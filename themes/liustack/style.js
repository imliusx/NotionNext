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
        background-color: #f5f5f5
    }
    .dark body{
        background-color: black;
    }
  
    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#6366F1, #6366F1);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: #6366F1;
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-hexo .header-cover::before {
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

    ::-webkit-scrollbar-thumb {
        background-color: #6366F1;
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: #313335 transparent
    }


    // -----------------------------------------------

   #typed {
        // 打字机字体
        font-family: JetBrains Mono;
    }


    /* 代码字体 */
    pre, code {
        font-family: "JetBrains Mono";
    }
    
    /* 文章卡片毛玻璃效果 */
    /* 代码字体 */
        .notion-inline-code {
            color:rgb(241, 185, 53);
            font-size: 95%;
            font-family: 'JetBrains Mono', Menlo, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        }
    
        /* 增强毛玻璃效果 */
        #blog-post-card {
            background: rgba(255, 255, 255, 0.85) !important;
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.5) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .dark #blog-post-card {
            background: rgba(0, 0, 0, 0.6) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
    
    .dark #blog-post-card {
        background: rgba(0, 0, 0, 0.5) !important;
        border: 1px solid rgba(0, 0, 0, 0.3) !important;
    } 
  `}</style>)
}

export { Style }
