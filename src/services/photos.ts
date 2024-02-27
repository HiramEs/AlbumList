import {createAsyncThunk} from '@reduxjs/toolkit';
import {Album} from '../utils/types/album';

export const fetchPhotos = createAsyncThunk(
  'get/photos',
  async (): Promise<[Album]> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos',
    ).then(res => res.json());
    return response;
  },
);
