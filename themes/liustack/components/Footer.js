import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + ' - ' + currentYear : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}

      <span className='text-medium'><i className='fa-solid fa-hourglass-half' /> {`${copyrightDate}`}    </span>
      <span>
        <i className='mx-1 animate-pulse fa-duotone fa-solid fa-wand-magic-sparkles' />
        <a id='footerAuthor'
          href={siteConfig('LINK')}
          className='underline font-nomal dark:text-gray-300 '>
          {siteConfig('AUTHOR')}
        </a>
        .<br />
        <BeiAnSite />
        <BeiAnGongAn />
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fa-solid fa-hourglass-half' />
          <span className='px-1 busuanzi_value_site_pv'> </span>

        </span>

        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fa-duotone fa-solid fa-wand-magic-sparkles' />
          <span className='px-1 busuanzi_value_site_uv'> </span>
        </span>

        <h1 id='footerBIO' className='text-sm pt-4 text-light-400 dark:text-gray-400'>
          {/* {title} {siteConfig('BIO') && <> | </>} {siteConfig('BIO')} */}
        </h1>
        {/* <PoweredBy className='justify-center' /> */}
      </span>
      <br />
    </footer>
  )
}

export default Footer
