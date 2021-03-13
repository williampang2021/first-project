import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// import reportWebVitals from './lib/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('js_app')
)

if (module.hot) {
  module.hot.accept()
}

// reportWebVitals(console.log)
