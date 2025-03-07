import express from 'express';

const router = express.Router();

// Mock project data (would be replaced with MongoDB in production)
const projects = [
  {
    id: '1',
    title: 'Organic Energy Drink Development',
    description: 'Looking for a manufacturer to produce a new line of organic energy drinks with natural caffeine sources.',
    productType: 'Beverages',
    allergens: ['Gluten', 'Dairy'],
    certifications: ['Organic', 'Non-GMO'],
    productionVolume: 20000,
    timeline: '3-6 months',
    budget: 50000,
    status: 'active',
    matches: [
      {
        manufacturerId: '1',
        manufacturerName: 'Healthy Drinks Co.',
        matchScore: 92,
        matchReason: 'Specializes in organic beverages with required certifications',
      },
      {
        manufacturerId: '3',
        manufacturerName: 'Vegan Delights',
        matchScore: 78,
        matchReason: 'Has organic certification but less experience with energy drinks',
      },
    ],
    userId: '1',
    createdAt: '2023-05-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Gluten-Free Snack Bar Production',
    description: 'Seeking a manufacturer for a new line of gluten-free, high-protein snack bars with minimal ingredients.',
    productType: 'Snacks',
    allergens: ['Gluten', 'Dairy', 'Nuts'],
    certifications: ['Gluten-Free', 'Kosher'],
    productionVolume: 15000,
    timeline: '1-3 months',
    budget: 35000,
    status: 'matched',
    matches: [
      {
        manufacturerId: '2',
        manufacturerName: 'Allergen-Free Foods',
        matchScore: 95,
        matchReason: 'Dedicated gluten-free facility with snack production experience',
      },
    ],
    userId: '1',
    createdAt: '2023-06-20T14:45:00Z',
  },
];

// @route   GET api/projects
// @desc    Get user projects
// @access  Private
router.get('/', (req, res) => {
  try {
    // In production, this would query MongoDB for projects belonging to the authenticated user
    // For demo purposes, we'll just return all mock projects
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET api/projects/:id
// @desc    Get project by ID
// @access  Private
router.get('/:id', (req, res) => {
  try {
    const project = projects.find(p => p.id === req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST api/projects
// @desc    Create a new project
// @access  Private
router.post('/', (req, res) => {
  try {
    const {
      title,
      description,
      productType,
      allergens,
      certifications,
      productionVolume,
      timeline,
      budget,
    } = req.body;

    // In production, this would create a new project in MongoDB
    // For demo purposes, we'll just create a mock project
    const newProject = {
      id: (projects.length + 1).toString(),
      title,
      description,
      productType,
      allergens,
      certifications,
      productionVolume,
      timeline,
      budget,
      status: 'draft',
      matches: [],
      userId: '1', // In production, this would be the authenticated user's ID
      createdAt: new Date().toISOString(),
    };

    // In production, this would save to MongoDB
    projects.push(newProject);

    res.status(201).json(newProject);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;