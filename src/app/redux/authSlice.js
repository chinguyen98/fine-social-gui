import authApi from "api/authApi";
import handleHttpError from "app/helper/handleHttpError";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const signUp = createAsyncThunk('user/signUp', async (params, thunkAPI) => {
  try {
    const accessToken = await authApi.signUp(params);
    return accessToken;
  } catch (err) {
    handleHttpError(err);
  }
});

export const verifyEmail = createAsyncThunk('user/verifyEmail', async (params, thunkAPI) => {
  try {
    const accessToken = await authApi.verifyEmail(params);
    return accessToken;
  } catch (err) {
    handleHttpError(err);
  }
});

export const signIn = createAsyncThunk('user/signIn', async (params, thunkAPI) => {
  try {
    const accessToken = await authApi.signIn(params);
    return accessToken;
  } catch (err) {
    handleHttpError(err);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    //signUp
    [signUp.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //verifyEmail
    [verifyEmail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [verifyEmail.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [verifyEmail.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //signIn
    [signIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signIn.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;