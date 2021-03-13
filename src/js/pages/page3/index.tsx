import React, { useEffect } from 'react'
import { connect } from 'redux-zero/react'
import actions from '@/js/redux/actions'
import Counter from './Counter'

const mapToProps = ({ testData }) => ({
  testData
})

function App (props) {
  const { testData, getInitData } = props
  useEffect(() => {
    getInitData()
    console.log('page3 mounted')
  }, [])

  return (
    <>
      <div>
        Page3
        <div style={{ color: 'red' }}>{testData}</div>
        <Counter />
      </div>
    </>
  )
}

export default connect(mapToProps, actions)(App)
