import React, { Suspense } from 'react';
import './app/assets/scss/App.scss';
import './app/assets/scss/atomic.scss';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Auth from './features/Auth';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <Suspense fallback={
        <div className="d-flex justify-content-center align-items-center">
          <h1>LOADING.....</h1>
        </div>
      }>
        <BrowserRouter>
          <header className="App-header">
            <Redirect exact from="/" to="/auth" />
            <Route path="/auth" component={Auth} />
          </header>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
