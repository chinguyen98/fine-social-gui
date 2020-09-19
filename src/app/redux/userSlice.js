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
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
    }
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;