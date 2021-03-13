import React from 'react'
import Home from '@pages/home'
import { getLazyViews } from './route-handle'

/* 路由配置，访问形式为?page=pageName
* pageName为url上page参数的值，
* pagePath为项目中src/js/pages/目录下文件夹名称
* csslink为页面需要的css外链
* home首页不用配置
* 页面跳转：通过全局函数window.__historyPush({page:'pageName',search:'a=1&b=2'})进行跳转，search参数为页面需要的参数，不含page参数
*/
const routeConfig = [
  { pageName: 'page2', pagePath: 'page2', cssLink: '' }
]
const Views = getLazyViews(routeConfig)

export default function App ({ currentPage }) {
  const CurrentViewCom = Views[currentPage] || Home
  return (
    <CurrentViewCom />
  )
}
