import { lazy } from 'react'
import { getParam } from '@lib/utils'

const preLoadOtherComponents = (components) => {
  window.addEventListener('load', () => {
    if (components && components.length) {
      components.forEach((itemFun) => itemFun && itemFun())
    }
  })
}

const asyncLoadCss = (url) => {
  if (!url) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    const myCSS = document.createElement('link')
    myCSS.rel = 'stylesheet'
    myCSS.href = url
    document.head.appendChild(myCSS)
    myCSS.onload = function () {
      resolve()
    }

    myCSS.onerror = function () {
      reject(new Error('css加载失败'))
    }
  })
}

export const getLazyViews = (routeConfig) => {
  const pageImportsFun:Array<any> = []
  const lazyPageMap = {}

  let fun
  if (routeConfig && routeConfig.length) {
    routeConfig.forEach((item) => {
      fun = () => {
        const importFun = import('@pages/' + item.pagePath)
        if (item.cssLink) {
          return Promise.all([importFun, asyncLoadCss(item.cssLink)]).then(([compo]) => compo)
        } else {
          return importFun
        }
      }
      pageImportsFun.push(fun)
      lazyPageMap[item.pageName] = lazy(fun)
    })
  }
  preLoadOtherComponents(pageImportsFun)
  return lazyPageMap
}

export const initRouterSwitch = (setCurrentPage) => {
  window.__historyPush = ({ page, search }) => {
    let url = `${window.location.pathname}?page=${page}`
    if (search) {
      search = search.replace(/^(\?|&|#)+/, '')
      url += '&' + search
    }
    try {
      setCurrentPage(page)
      if (window.history.pushState) {
        window.history.pushState({}, '', url)
      } else {
        window.location.href = url
      }
    } catch (e) {
      window.location.href = url
    }
  }

  window.addEventListener(
    'popstate',
    function () {
      const page = getParam('page') || 'home'
      setCurrentPage(page)
    },
    false
  )
}
