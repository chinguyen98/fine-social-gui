import authApi from "api/authApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const signUp = createAsyncThunk('user/signUp', async (params, thunkAPI) => {
  try {
    const accessToken = await authApi.signUp(params);
    return accessToken;
  } catch (err) {
    const statusCode = err.response?.data.statusCode;
    if (statusCode === 409) {
      throw new Error(err.response.data.message);
    }
    throw new Error('Đã có lỗi xảy ra!');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: {}
  },
  reducers: {},
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;