import {createSlice} from '@reduxjs/toolkit';
import {Album} from '../utils/types/album';
import {fetchAlbum} from '../services/album';

interface AlbumState {
  loading: boolean;
  album: Album[];
}

const initialState: AlbumState = {
  loading: false,
  album: [],
};

const PhotosSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAlbum.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.album = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAlbum.rejected, state => {
      state.loading = false;
    });
  },
});

export default PhotosSlice.reducer;
