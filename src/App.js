import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './app/assets/scss/App.scss';
import './app/assets/scss/atomic.scss';
import Homepage from 'features/Home';
import AuthenticatedRoute from 'shared-field/AuthenticatedRoute';
import PopupNotify from 'shared-field/PopupNotify';
import Auth from './features/Auth';
import Verify from 'features/Verify';

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
            <AuthenticatedRoute exact path="/" component={Homepage} />
            <Route path="/auth" component={Auth} />
            <Route path="/verify" component={Verify} />
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
