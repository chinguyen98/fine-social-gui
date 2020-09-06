import React, { Suspense } from 'react';
import './App.scss';
import './atomic.scss';
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
            <Redirect exact from="/" to="/auth/signin" />
            <Route path="/auth" component={Auth} />
          </header>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
