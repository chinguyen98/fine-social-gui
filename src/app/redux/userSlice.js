import authApi from "api/authApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const signUp = createAsyncThunk('user/signUp', async (params, thunkAPI) => {
  try {
    const accessToken = await authApi.signUp(params);
    return accessToken;
  } catch (err) {
    throw new Error(err.response.data.message);
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