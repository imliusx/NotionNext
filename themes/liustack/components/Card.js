const Card = ({ children, headerSlot, className }) => {
  // 调整小屏幕状态下的卡片边距
  return <div className={`${className} mt-6 md:mt-0 px-2`}>
    <>{headerSlot}</>
    <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100">
        {children}
    </section>
  </div>
}
export default Card
