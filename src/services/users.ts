import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../utils/types/user';

export const fetchUsers = createAsyncThunk(
  'get/user',
  async (): Promise<[User]> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users',
    ).then(res => res.json());
    return response;
  },
);
