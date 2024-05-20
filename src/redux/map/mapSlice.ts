import {createSlice} from '@reduxjs/toolkit';
import {mapState} from './mapState';

const mapSlice = createSlice({
  name: 'map',
  initialState: mapState,
  reducers: {
    setCurrentLocation(state, action) {
      state.currentLocation = action.payload;
    },
    setCurrentRegion(state, action) {
      state.currentRegion = action.payload;
    },
  },
});

export const {actions, reducer} = mapSlice;
