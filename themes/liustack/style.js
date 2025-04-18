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
        background: rgb(17, 162, 220);
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


    // 首页按钮
    #home-nav-button {
        max-width: 68rem;
    }


    // -----------------------------------------------

   #typed {
        // 打字机字体
        font-family: "JetBrains Mono", monospace;
        font-style: normal;
        font-weight: 400;
    }
    
    
    #infoCardBIO {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
   }
        
    // #footerBIO {
    //    font-family: "Bodoni Moda", serif;
    //    font-style: normal;
    //    font-weight: 400;
    // }
    

    #blogTitle,
    #titleLogo,
    #footerAuthor,
    #infoCardAuthor {
        // 标题字体
        font-family: "Permanent Marker", cursive;
        font-weight: 400;
        font-style: normal;
    }
    // 原有单独设置的字体
    #blogTitle {
        font-size: clamp(3.5rem, 8vw, 6rem);
    }

    // 公告字体
    #announcement-content {
        font-family: "Bodoni Moda","KingHwa_OldSong", serif;
        font-style: normal;
        font-weight: 400;
    }
    
    // -------------------------------------------
    // 代码块字体
    .notion-code {
        font-family: "JetBrains Mono","KingHwa_OldSong";  
        font-weight: 400;
    }
    .notion-inline-code {
        font-family: "JetBrains Mono","KingHwa_OldSong";
        color: #FFB02E;
    }

    .notion {
        /* 正文内容 */
      .notion-text {
        font-size: 18px;
      }

    }
    
  `}</style>)
}

export { Style }
