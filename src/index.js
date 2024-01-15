import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'

import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

async function startApp() {
  // Record all sessions on localhost, staging stacks and preview URLs

  // Start the Meticulous recorder before you initialise your app.
  // Note: all errors are caught and logged, so no need to surround with try/catch
  await tryLoadAndStartRecorder({
    projectId: 'Uaxu4O9UYv2I79zFhcQiWwKuJEd6zBkcMVw00uWp',
    isProduction: false,
  })

  // Initalise app after the Meticulous recorder is ready, e.g.
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

startApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
