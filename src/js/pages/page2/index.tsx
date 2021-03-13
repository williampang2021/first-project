import React, { useEffect } from 'react'
import Header from '@components/Header'
import { getParam } from '@lib/utils'

import '@scss/page2.scss'

export default function App () {
  useEffect(() => {
    console.log('page2 mounted')
  }, [])

  return (
    <>
      <Header />
      <div>
        Page2  {getParam('aa')}
      </div>
    </>
  )
}
