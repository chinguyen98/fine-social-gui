import { createSlice } from '@reduxjs/toolkit';
import Notify from 'constants/notify.constant';

const notifySlice = createSlice({
  name: 'notify',
  initialState: {
    label: '',
    type: '',
    content: '',
    isEnable: false,
  },
  reducers: {
    setErrorNotify: (state, action) => {
      const { label, content } = action.payload;
      state.label = label;
      state.content = content;
      state.type = Notify.ERROR;
      state.isEnable = true;
    },
    unsetNotify: (state) => {
      state.isEnable = false;
      state.label = '';
      state.content = '';
      state.type = '';
      state.isEnable = false;
    }
  }
});

const { reducer, actions } = notifySlice;
export const { setErrorNotify, unsetNotify } = actions;
export default reducer;