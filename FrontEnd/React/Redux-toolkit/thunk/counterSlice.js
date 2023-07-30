import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// action creator
const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
  const resp = await fetch(
    'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
  );
  const data = await resp.json();
  // store의 state를 바꿈
  return data.value;
});

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    value: 0,
    status: 'Welcome',
  },
  // 동기 처리
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },

  // 비동기 처리
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});
export default counterSlice;
export const { up, set } = counterSlice.actions;
export { asyncUp, asyncUpFetch };
