// Mock data for the dashboard
export const mockDashboardData = {
  stats: {
    totalMatches: 128,
    activePartners: 24,
    productListings: 567,
    conversionRate: 12.5
  },
  recentActivity: [
    {
      id: '1',
      title: 'New partnership request',
      type: 'Partnership',
      description: 'Eco Foods Inc. wants to connect with you',
      date: '2 hours ago'
    },
    {
      id: '2',
      title: 'Product listing updated',
      type: 'Product',
      description: 'Organic Granola Bars listing has been updated',
      date: '3 hours ago'
    },
    {
      id: '3',
      title: 'New message',
      type: 'Message',
      description: 'You received a new message from Green Valley Farms',
      date: '5 hours ago'
    },
    {
      id: '4',
      title: 'Match confirmation',
      type: 'Match',
      description: 'Your match with Healthy Snacks Co. has been confirmed',
      date: '1 day ago'
    }
  ],
  alerts: [
    {
      id: '1',
      title: 'Contract expiring soon',
      message: 'Your contract with Nature Foods expires in 15 days',
      severity: 'high'
    },
    {
      id: '2',
      title: 'Pending reviews',
      message: 'You have 3 pending product reviews',
      severity: 'medium'
    },
    {
      id: '3',
      title: 'New regulatory update',
      message: 'New packaging regulations will come into effect next month',
      severity: 'low'
    }
  ]
};

// Mock data for user profile
export const mockUserProfile = {
  companyName: 'Eco Foods Manufacturing',
  contactName: 'John Smith',
  email: 'john@ecofoods.com',
  phone: '+1 (555) 123-4567',
  website: 'https://www.ecofoods.com',
  about: 'Eco Foods Manufacturing is a leading producer of organic and sustainable food products. We specialize in plant-based alternatives, organic snacks, and eco-friendly packaging solutions.',
  address: '123 Green Street',
  city: 'Portland',
  state: 'Oregon',
  zip: '97201',
  country: 'United States',
  // Manufacturer specific fields
  productionCapacity: 50000,
  minimumOrderQuantity: 1000,
  leadTime: 14,
  certifications: 'Organic, Non-GMO, Fair Trade, ISO 9001',
  allergenFree: 'Gluten-free, Dairy-free, Nut-free',
  // Brand specific fields
  productCategories: 'Organic Snacks, Plant-based Alternatives, Natural Beverages',
  targetMarket: 'Health-conscious consumers, 25-45 age group',
  requiredCertifications: 'Organic, Non-GMO, Fair Trade',
  allergenRequirements: 'Gluten-free, Dairy-free',
  // Retailer specific fields
  storeCount: 35,
  marketRegions: 'West Coast, Northeast',
};

// Mock data for partners
export const mockPartners = [
  {
    id: '1',
    name: 'Organic Harvest Co.',
    type: 'brand',
    description: 'Premium organic food brand specializing in plant-based snacks and ready-to-eat meals.',
    matchScore: 95,
    location: 'North America',
    email: 'partnerships@organicharvest.com',
    phone: '+1 (555) 234-5678',
    certifications: ['Organic', 'Non-GMO', 'B Corp'],
    connectionStatus: 'none',
    productCategories: ['Snacks', 'Ready Meals', 'Breakfast'],
    targetMarket: 'Health-conscious consumers',
  },
  {
    id: '2',
    name: 'EcoPackage Solutions',
    type: 'manufacturer',
    description: 'Manufacturer of biodegradable and compostable packaging for food and beverages.',
    matchScore: 92,
    location: 'Europe',
    email: 'info@ecopackage.com',
    phone: '+44 20 1234 5678',
    certifications: ['ISO 14001', 'Compostable', 'Plastic-Free'],
    connectionStatus: 'connected',
    productionCapacity: 2000000,
    minimumOrder: 10000,
    leadTime: 21,
  },
  {
    id: '3',
    name: 'Natural Foods Distribution',
    type: 'retailer',
    description: 'Specialty retailer with 200+ locations focusing on natural and organic products.',
    matchScore: 88,
    location: 'North America',
    email: 'suppliers@naturalfoods.com',
    phone: '+1 (555) 987-6543',
    certifications: ['Organic Retailer', 'Fair Trade Partner'],
    connectionStatus: 'none',
    storeCount: 215,
    marketRegions: 'Nationwide',
  },
  {
    id: '4',
    name: 'Pure Ingredients Supply',
    type: 'manufacturer',
    description: 'Supplier of high-quality organic and natural ingredients for food production.',
    matchScore: 85,
    location: 'Asia',
    email: 'sales@pureingredients.com',
    phone: '+65 6123 4567',
    certifications: ['Organic', 'HACCP', 'ISO 9001', 'Kosher'],
    connectionStatus: 'pending',
    productionCapacity: 1500000,
    minimumOrder: 5000,
    leadTime: 14,
  },
  {
    id: '5',
    name: 'Green Retail Network',
    type: 'retailer',
    description: 'Eco-friendly retail chain with strong focus on sustainable and local products.',
    matchScore: 82,
    location: 'Europe',
    email: 'procurement@greenretail.com',
    phone: '+49 30 1234 5678',
    certifications: ['Sustainable Retail', 'Carbon Neutral'],
    connectionStatus: 'none',
    storeCount: 78,
    marketRegions: 'Central Europe',
  },
  {
    id: '6',
    name: 'Healthy Snacks Ltd.',
    type: 'brand',
    description: 'Creator of innovative healthy snacks using novel ingredients and superfoods.',
    matchScore: 80,
    location: 'Australia',
    email: 'hello@healthysnacks.com',
    phone: '+61 2 9876 5432',
    certifications: ['Gluten-Free', 'Non-GMO', 'Vegan'],
    connectionStatus: 'none',
    productCategories: ['Protein Bars', 'Trail Mixes', 'Superfood Snacks'],
    targetMarket: 'Active lifestyle consumers',
  },
  {
    id: '7',
    name: 'Sustainable Packaging Co.',
    type: 'manufacturer',
    description: 'Innovative manufacturer of plant-based and recyclable packaging solutions.',
    matchScore: 78,
    location: 'North America',
    email: 'info@sustainablepackaging.com',
    phone: '+1 (555) 765-4321',
    certifications: ['Plastic-Free', 'Compostable', 'Recycled Content'],
    connectionStatus: 'none',
    productionCapacity: 1000000,
    minimumOrder: 25000,
    leadTime: 30,
  },
  {
    id: '8',
    name: 'Organic Beverage Inc.',
    type: 'brand',
    description: 'Producer of organic juices, teas, and functional beverages with unique formulations.',
    matchScore: 75,
    location: 'Europe',
    email: 'partners@organicbeverage.com',
    phone: '+33 1 2345 6789',
    certifications: ['Organic', 'Fair Trade', 'B Corp'],
    connectionStatus: 'none',
    productCategories: ['Juices', 'Teas', 'Functional Drinks'],
    targetMarket: 'Health-conscious urban consumers',
  },
  {
    id: '9',
    name: 'Natural Supermarket Chain',
    type: 'retailer',
    description: 'Premium supermarket chain specializing in natural, organic and locally-sourced products.',
    matchScore: 72,
    location: 'North America',
    email: 'vendors@naturalsupermarket.com',
    phone: '+1 (555) 123-7890',
    certifications: ['Organic Retailer'],
    connectionStatus: 'none',
    storeCount: 45,
    marketRegions: 'East Coast, Midwest',
  },
];

// Mock data for analytics
export const mockAnalyticsData = {
  matchesCount: 128,
  successRate: 92,
  averageResponseTime: 6.5,
  activePartners: 47,
  topProducts: [
    {
      name: 'Organic Protein Bars',
      category: 'Snacks',
      count: 24,
    },
    {
      name: 'Plant-based Yogurt',
      category: 'Dairy Alternatives',
      count: 18,
    },
    {
      name: 'Compostable Food Containers',
      category: 'Packaging',
      count: 15,
    },
    {
      name: 'Organic Cold-Pressed Juices',
      category: 'Beverages',
      count: 12,
    },
    {
      name: 'Gluten-Free Crackers',
      category: 'Snacks',
      count: 10,
    },
  ],
  topManufacturers: [
    {
      name: 'EcoPackage Solutions',
      location: 'Germany',
      count: 32,
    },
    {
      name: 'Pure Ingredients Supply',
      location: 'Singapore',
      count: 28,
    },
    {
      name: 'Sustainable Packaging Co.',
      location: 'United States',
      count: 21,
    },
    {
      name: 'Organic Processing Ltd.',
      location: 'Canada',
      count: 18,
    },
    {
      name: 'Natural Ingredients Group',
      location: 'Netherlands',
      count: 15,
    },
  ],
  marketTrends: [
    {
      category: 'Plant-based Products',
      growth: 24,
    },
    {
      category: 'Sustainable Packaging',
      growth: 18,
    },
    {
      category: 'Organic Snacks',
      growth: 15,
    },
    {
      category: 'Functional Beverages',
      growth: 12,
    },
    {
      category: 'Gluten-Free Products',
      growth: 9,
    },
    {
      category: 'Conventional Sodas',
      growth: -8,
    },
    {
      category: 'Artificial Sweeteners',
      growth: -12,
    },
  ],
  matchSuccessByCategory: [
    {
      name: 'Organic Snacks',
      successRate: 95,
      totalMatches: 42,
      successfulMatches: 40,
    },
    {
      name: 'Plant-based Alternatives',
      successRate: 92,
      totalMatches: 38,
      successfulMatches: 35,
    },
    {
      name: 'Sustainable Packaging',
      successRate: 88,
      totalMatches: 25,
      successfulMatches: 22,
    },
    {
      name: 'Natural Beverages',
      successRate: 85,
      totalMatches: 20,
      successfulMatches: 17,
    },
    {
      name: 'Specialty Ingredients',
      successRate: 75,
      totalMatches: 12,
      successfulMatches: 9,
    },
  ],
};