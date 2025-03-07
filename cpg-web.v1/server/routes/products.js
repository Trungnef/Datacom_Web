import express from 'express';

const router = express.Router();

// Mock product data (would be replaced with MongoDB in production)
const products = [
  {
    id: '1',
    name: 'Organic Fruit Juice',
    description: 'Cold-pressed organic fruit juice with no added sugars or preservatives.',
    category: 'Beverages',
    manufacturer: 'Healthy Drinks Co.',
    certifications: ['Organic', 'Non-GMO'],
    allergens: ['None'],
    productionVolume: 10000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Gluten-Free Crackers',
    description: 'Crispy crackers made with rice flour and seeds, perfect for snacking.',
    category: 'Snacks',
    manufacturer: 'Allergen-Free Foods',
    certifications: ['Gluten-Free', 'Kosher'],
    allergens: ['Nuts'],
    productionVolume: 5000,
    image: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Plant-Based Yogurt',
    description: 'Creamy coconut-based yogurt with live cultures and low sugar content.',
    category: 'Dairy',
    manufacturer: 'Vegan Delights',
    certifications: ['Vegan', 'Non-GMO'],
    allergens: ['Coconut'],
    productionVolume: 8000,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

// @route   GET api/products
// @desc    Get all products with optional filters
// @access  Public
router.get('/', (req, res) => {
  try {
    // In production, this would query MongoDB with filters
    // For demo purposes, we'll just return all mock products
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', (req, res) => {
  try {
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;