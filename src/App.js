import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Root from './components/app'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Root></Root>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
