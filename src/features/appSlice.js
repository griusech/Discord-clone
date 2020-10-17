import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app = action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const selectChannelName = state => state.app.selectChannelName;
export const selectChannelId = state => state.app.selectChannelId;

export default appSlice.reducer;
