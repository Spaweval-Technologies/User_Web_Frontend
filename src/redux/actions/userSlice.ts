import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type UserState = {
  email: string;
  name: string;
  authenticated?: boolean;
  auth_token?: string;
  mobile_number?: string;
  email_verified?: boolean;
  id?: string;
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
};

const initialState: UserState = {
  email: '',
  name: '',
  authenticated: false,
  auth_token: '',
  mobile_number: '',
  email_verified: false,
  id: '',
  status: 'idle',
  error: null,
};

export const getUserByEmail = createAsyncThunk(
  'user/getUserByAuthToken',
  async (payload: { auth_token: string; email: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/${payload.email}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.auth_token}`,
          },
        }
      );
      if (response.status !== 200) {
        return rejectWithValue(response.data || 'Failed to fetch user');
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch user');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state: UserState, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.mobile_number = action.payload.mobile_number;
      state.authenticated = true;
      state.auth_token = action.payload.auth_token;
      state.email_verified = action.payload.email_verified || false;
      state.id = action.payload.id || '';
    },
    setVerified: (state, action: PayloadAction<boolean>) => {
      state.email_verified = action.payload;
    },
    clearUser: (state) => {
      state.email = '';
      state.name = '';
      state.email_verified = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserByEmail.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.status = 'succeeded';
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.mobile_number = action.payload.mobile_number;
        state.authenticated = true;
        state.auth_token = action.payload.auth_token;
        state.email_verified = action.payload.email_verified || false;
        state.id = action.payload.id || '';
      })
      .addCase(getUserByEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setUserInfo, setVerified, clearUser } = userSlice.actions;
export default userSlice.reducer;
