import React from 'react'
import { connect } from 'redux-zero/react'
import actions from '@/js/redux/actions'

const mapToProps = ({ testData }) => ({
  testData
})

function App ({ increment, decrement }) {
  return (
    <>
      <div>
        <button onClick={increment} className='button'>加1</button>
        <button style={{ marginLeft: '.2rem' }} onClick={decrement} className='button'>减1</button>
      </div>
    </>
  )
}

export default connect(mapToProps, actions)(App)
