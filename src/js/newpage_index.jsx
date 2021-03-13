import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-zero/react'
import store from '@js/redux/store'
import Page3 from '@pages/page3'
// redux示例
ReactDOM.render(
  <Provider store={store}>
    <Page3 />
  </Provider>,
  document.getElementById('js_app')
)

if (module.hot) {
  module.hot.accept()
}
