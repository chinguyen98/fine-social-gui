import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PopupNotify from 'shared-field/PopupNotify';

import './app/assets/scss/App.scss';
import './app/assets/scss/atomic.scss';
import Auth from './features/Auth';

function App() {
  const popupNotify = useSelector(state => state.notify);

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <Suspense fallback={
        <div className="d-flex justify-content-center align-items-center">
          <h1>LOADING.....</h1>
        </div>
      }>
        <BrowserRouter>
          <header className="App-header">
            <Route path="/auth" component={Auth} />

            {
              popupNotify.isEnable && <PopupNotify content={popupNotify.content} type={popupNotify.type} />
            }
          </header>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
