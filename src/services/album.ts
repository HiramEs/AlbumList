import {createAsyncThunk} from '@reduxjs/toolkit';
import {Album} from '../utils/types/album';

export const fetchAlbum = createAsyncThunk(
  'get/album',
  async (albumId: number): Promise<[Album]> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    ).then(res => res.json());
    return response;
  },
);
