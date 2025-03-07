import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  manufacturer: string;
  certifications: string[];
  allergens: string[];
  productionVolume: number;
  image: string;
}

interface ProductState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  filters: {
    category: string | null;
    allergens: string[];
    certifications: string[];
    searchTerm: string;
  };
}

const initialState: ProductState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  filters: {
    category: null,
    allergens: [],
    certifications: [],
    searchTerm: '',
  },
};

// Get all products with optional filters
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (filters: any, { rejectWithValue }) => {
    try {
      const res = await axios.get('/api/products', { params: filters });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch products');
    }
  }
);

// Get single product
export const getProduct = createAsyncThunk(
  'products/getProduct',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch product');
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<ProductState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all products
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get single product
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;