import {configureStore} from '@reduxjs/toolkit';
import PhotoReducer from './src/reducers/PhotoReducer';
import UsersReducer from './src/reducers/UsersReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AlbumReducer from './src/reducers/AlbumReducer';

const store = configureStore({
  reducer: {
    photos: PhotoReducer,
    users: UsersReducer,
    album: AlbumReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
