import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReactReduxProvider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ReactReduxProvider store={store}>
        <App />
      </ReactReduxProvider>
    </React.StrictMode>
  </BrowserRouter>
);
