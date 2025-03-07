import express from 'express';

const router = express.Router();

// Mock manufacturer data (would be replaced with MongoDB in production)
const manufacturers = [
  {
    id: '1',
    name: 'Healthy Drinks Co.',
    description: 'Specializing in organic beverages and cold-pressed juices with state-of-the-art facilities.',
    location: 'California, United States',
    certifications: ['Organic', 'Non-GMO', 'HACCP'],
    specialties: ['Beverages', 'Juices', 'Smoothies'],
    productionCapacity: 50000,
    contactInfo: {
      email: 'info@healthydrinks.com',
      phone: '+1 (234) 567-8901',
      website: 'www.healthydrinks.com',
    },
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Allergen-Free Foods',
    description: 'Dedicated gluten-free and allergen-free manufacturing facility for snacks and baked goods.',
    location: 'Illinois, United States',
    certifications: ['Gluten-Free', 'Kosher', 'SQF'],
    specialties: ['Snacks', 'Bakery', 'Allergen-Free'],
    productionCapacity: 30000,
    contactInfo: {
      email: 'contact@allergenfreefoods.com',
      phone: '+1 (345) 678-9012',
      website: 'www.allergenfreefoods.com',
    },
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Vegan Delights',
    description: 'Plant-based food manufacturer specializing in dairy alternatives and vegan products.',
    location: 'Oregon, United States',
    certifications: ['Vegan', 'Non-GMO', 'Organic'],
    specialties: ['Dairy Alternatives', 'Plant-Based', 'Vegan'],
    productionCapacity: 40000,
    contactInfo: {
      email: 'hello@vegandelights.com',
      phone: '+1 (456) 789-0123',
      website: 'www.vegandelights.com',
    },
    logo: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

// @route   GET api/manufacturers
// @desc    Get all manufacturers with optional filters
// @access  Public
router.get('/', (req, res) => {
  try {
    // In production, this would query MongoDB with filters
    // For demo purposes, we'll just return all mock manufacturers
    res.json(manufacturers);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET api/manufacturers/:id
// @desc    Get manufacturer by ID
// @access  Public
router.get('/:id', (req, res) => {
  try {
    const manufacturer = manufacturers.find(m => m.id === req.params.id);
    
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    
    res.json(manufacturer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;