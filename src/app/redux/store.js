import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import notifyReducer from './notifySlice';

const rootReducer = {
  user: userReducer,
  notify: notifyReducer,
}

export default configureStore({
  reducer: rootReducer,
});
