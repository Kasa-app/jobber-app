import {UnknownAction, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {reducer as mapReducer} from './map/mapSlice';

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
