import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import notifyReducer from './notifySlice';

const rootReducer = {
  auth: authReducer,
  notify: notifyReducer,
}

export default configureStore({
  reducer: rootReducer,
});
