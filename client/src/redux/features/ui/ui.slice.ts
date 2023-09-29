import { createSlice } from '@reduxjs/toolkit';

export interface UISliceState {
  value: string
}

const initialState: UISliceState = {
  value: '0'
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeTab } = uiSlice.actions

export default uiSlice.reducer