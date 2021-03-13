import React, { Suspense, useState } from 'react'
import { getParam } from '@lib/utils'
import RouteView from './routes/RouteView'
import { initRouterSwitch } from './routes/route-handle'

/*
* 注意：
* 1、如只有单个页面，则直接引入pages/home 替代RouteView，然后移除routes文件夹及app.jsx中相关代码以减少体积
* 2、如是多页面，提供了两种选择：
*    1）使用RouteView，在url上通过page=pageName区分页面
*    2）在src目录下新建newpage.html、在js目录下新建newpage_index.jsx（引入目标页面文件），
*       在url上通过路径/newpage.html访问区分页面(根据第1点移除RouteView相关代码)
*/
const pageParam = getParam('page')
function App () {
  const [currentPage, setCurrentPage] = useState(pageParam)
  initRouterSwitch(setCurrentPage)
  return (
    <Suspense
      fallback={
        <div>
          loading
        </div>
    }
    >
      <RouteView currentPage={currentPage} />
    </Suspense>
  )
}

export default App
