import React, { useEffect } from 'react'
// import Header from '@components/Header'
// import '@scss/home.scss'

function App (props = {}) {
  useEffect(() => {
    console.log('home page mounted')
  }, [])

  return (
    <div style={{ padding: 20 }}>
      {/* <Header /> */}
      <div className='home'>
        <h2>Hello world! Good.</h2>

      </div>
    </div>
  )
}

export default App
