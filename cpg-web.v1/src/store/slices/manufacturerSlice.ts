import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Manufacturer {
  id: string;
  name: string;
  description: string;
  location: string;
  certifications: string[];
  specialties: string[];
  productionCapacity: number;
  contactInfo: {
    email: string;
    phone: string;
    website: string;
  };
  logo: string;
}

interface ManufacturerState {
  manufacturers: Manufacturer[];
  manufacturer: Manufacturer | null;
  loading: boolean;
  error: string | null;
  filters: {
    location: string | null;
    certifications: string[];
    specialties: string[];
    searchTerm: string;
  };
}

const initialState: ManufacturerState = {
  manufacturers: [],
  manufacturer: null,
  loading: false,
  error: null,
  filters: {
    location: null,
    certifications: [],
    specialties: [],
    searchTerm: '',
  },
};

// Get all manufacturers with optional filters
export const getManufacturers = createAsyncThunk(
  'manufacturers/getManufacturers',
  async (filters: any, { rejectWithValue }) => {
    try {
      const res = await axios.get('/api/manufacturers', { params: filters });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch manufacturers');
    }
  }
);

// Get single manufacturer
export const getManufacturer = createAsyncThunk(
  'manufacturers/getManufacturer',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/manufacturers/${id}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch manufacturer');
    }
  }
);

const manufacturerSlice = createSlice({
  name: 'manufacturers',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<ManufacturerState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all manufacturers
      .addCase(getManufacturers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getManufacturers.fulfilled, (state, action: PayloadAction<Manufacturer[]>) => {
        state.loading = false;
        state.manufacturers = action.payload;
      })
      .addCase(getManufacturers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get single manufacturer
      .addCase(getManufacturer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getManufacturer.fulfilled, (state, action: PayloadAction<Manufacturer>) => {
        state.loading = false;
        state.manufacturer = action.payload;
      })
      .addCase(getManufacturer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFilters, clearFilters } = manufacturerSlice.actions;
export default manufacturerSlice.reducer;