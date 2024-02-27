import {createSlice} from '@reduxjs/toolkit';
import {User} from '../utils/types/user';
import {fetchUsers} from '../services/users';

interface UsersState {
  loading: boolean;
  users: User[];
}

const initialState: UsersState = {
  loading: false,
  users: [],
};

const PhotosSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export default PhotosSlice.reducer;
