import { createSlice } from '@reduxjs/toolkit';
import Notify from 'constants/notify.constant';

const notifySlice = createSlice({
  name: 'notify',
  initialState: {
    type: '',
    content: '',
    isEnable: false,
  },
  reducers: {
    setErrorNotify: (state, action) => {
      const { content } = action.payload;
      state.content = content;
      state.type = Notify.ERROR;
      state.isEnable = true;
    },
    unsetNotify: (state) => {
      state.isEnable = false;
      state.content = '';
      state.type = '';
      state.isEnable = false;
    }
  }
});

const { reducer, actions } = notifySlice;
export const { setErrorNotify, unsetNotify } = actions;
export default reducer;