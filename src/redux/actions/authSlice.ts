import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type AuthState = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    message: string;
    error: string | null;
}

const initialState: AuthState = {
    status: 'idle',
    message: '',
    error: null,
};

export type SignupPayload = {
    email: string;
    password: string;
    mobile_number: string | null;
    name: string;
    referal_code?: string;
}

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (payload: SignupPayload, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${process.env.API_URL}/api/auth/signup`,
                payload,
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (res.status !== 200) {
                return rejectWithValue(res.data || 'Signup failed');
            }
            return res.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data) || rejectWithValue("Signup failed: " + err.message);
        }
    }
);

export const signupTokenAuthenticate = createAsyncThunk(
    'auth/signupTokenAuthenticate',
    async (payload: { token: string }, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/api/auth/signup/verify-token`,
                { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}` } }
            );
            if (res.status !== 200) {
                return rejectWithValue(res.data || 'Token Expired');
            }
            return res.data;
        } catch (err: any) {
            return rejectWithValue(err?.response?.data) || rejectWithValue("token authentication error" + err.message);
        }
    }
);

export const verifySignupOtp = createAsyncThunk(
    'auth/verifyOtp',
    async ({ email, otp }: { email: string; otp: string }, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${process.env.API_URL}/api/auth/signup/verify/otp`,
                { email, otp },
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (res.status !== 200) {
                return rejectWithValue(res.data || 'OTP verification failed');
            }
            return res.data;
        } catch (err: any) {
            return rejectWithValue(err?.response?.data) || rejectWithValue(err.message || "An error occurred while verifying OTP");
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${process.env.API_URL}/api/auth/login`, { email, password }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.status !== 200) {
                return rejectWithValue(res.data || 'Login failed');
            }
            return res.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data || { message: "Login failed" });
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.status = 'idle';
            state.message = '';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(verifySignupOtp.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(verifySignupOtp.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(verifySignupOtp.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(signupTokenAuthenticate.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(signupTokenAuthenticate.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message;
            }
            )
            .addCase(signupTokenAuthenticate.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            }
            )
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.message = '';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message;
            }
            )
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            }
            );
    },
});

export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
