import {createSlice} from '@reduxjs/toolkit';
import {fetchPhotos} from '../services/photos';
import {Album} from '../utils/types/album';

interface PhotosState {
  loading: boolean;
  photos: Album[];
}

const initialState: PhotosState = {
  loading: false,
  photos: [],
};

const PhotosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhotos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPhotos.rejected, state => {
      state.loading = false;
    });
  },
});

export default PhotosSlice.reducer;
