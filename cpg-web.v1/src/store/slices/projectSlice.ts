import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Project {
  id: string;
  title: string;
  description: string;
  productType: string;
  allergens: string[];
  certifications: string[];
  productionVolume: number;
  timeline: string;
  budget: number;
  status: 'draft' | 'active' | 'matched' | 'completed';
  matches: {
    manufacturerId: string;
    manufacturerName: string;
    matchScore: number;
    matchReason: string;
  }[];
  userId: string;
  createdAt: string;
}

interface ProjectState {
  projects: Project[];
  project: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  project: null,
  loading: false,
  error: null,
};

// Get user projects
export const getUserProjects = createAsyncThunk(
  'projects/getUserProjects',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/api/projects');
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch projects');
    }
  }
);

// Get single project
export const getProject = createAsyncThunk(
  'projects/getProject',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/projects/${id}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch project');
    }
  }
);

// Create new project
export const createProject = createAsyncThunk(
  'projects/createProject',
  async (projectData: Partial<Project>, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/projects', projectData);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || 'Failed to create project');
    }
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get user projects
      .addCase(getUserProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getUserProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get single project
      .addCase(getProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProject.fulfilled, (state, action: PayloadAction<Project>) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create project
      .addCase(createProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action: PayloadAction<Project>) => {
        state.loading = false;
        state.projects = [...state.projects, action.payload];
        state.project = action.payload;
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default projectSlice.reducer;