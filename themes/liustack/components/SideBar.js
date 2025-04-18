import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import MenuGroupCard from './MenuGroupCard'
import { MenuListSide } from './MenuListSide'

/**
 * 侧边抽屉
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = props => {
  const { siteInfo } = props
  const router = useRouter()
  return (
    <div id='side-bar'>
      <div className='h-52 w-full flex justify-center'>
        <div>
          <div
            onClick={() => {
              router.push('/')
            }}
            className='justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer'>
            {/* 头像 */}
            <LazyImage
              src={siteInfo?.icon}
              className='rounded-lg'
              width={80}
              alt={siteConfig('AUTHOR')}
            />
          </div>
          {/* 总览 */}
          <MenuGroupCard {...props} />
        </div>
      </div>
      {/* 侧拉抽屉的菜单 */}
      <MenuListSide {...props} />
    </div>
  )
}

export default SideBar
