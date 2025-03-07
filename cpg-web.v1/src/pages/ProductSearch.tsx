import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getProducts, setFilters, clearFilters } from '../store/slices/productSlice';
import { Search, Filter, X, AlertCircle } from 'lucide-react';

const ProductSearch: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error, filters } = useSelector((state: RootState) => state.products);
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
  const [showFilters, setShowFilters] = useState(false);

  // Sample data for filters
  const categories = ['Beverages', 'Snacks', 'Dairy', 'Bakery', 'Condiments', 'Frozen Foods'];
  const allergensList = ['Gluten', 'Dairy', 'Nuts', 'Soy', 'Eggs', 'Shellfish'];
  const certificationsList = ['Organic', 'Non-GMO', 'Kosher', 'Halal', 'Vegan', 'Fair Trade'];

  useEffect(() => {
    dispatch(getProducts(filters) as any);
  }, [dispatch, filters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilters({ searchTerm }));
  };

  const handleFilterChange = (filterType: 'category' | 'allergens' | 'certifications', value: string) => {
    if (filterType === 'category') {
      dispatch(setFilters({ category: value }));
    } else if (filterType === 'allergens') {
      const updatedAllergens = filters.allergens.includes(value)
        ? filters.allergens.filter(item => item !== value)
        : [...filters.allergens, value];
      dispatch(setFilters({ allergens: updatedAllergens }));
    } else if (filterType === 'certifications') {
      const updatedCertifications = filters.certifications.includes(value)
        ? filters.certifications.filter(item => item !== value)
        : [...filters.certifications, value];
      dispatch(setFilters({ certifications: updatedCertifications }));
    }
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchTerm('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Search</h1>
        <p className="text-gray-600">
          Find products that match your requirements from our extensive database.
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar - mobile toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-5 w-5 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filters sidebar */}
        <div
          className={`${
            showFilters ? 'block' : 'hidden'
          } md:block w-full md:w-64 bg-white p-6 rounded-lg shadow`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              onClick={handleClearFilters}
              className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    id={`category-${category}`}
                    name="category"
                    type="radio"
                    checked={filters.category === category}
                    onChange={() => handleFilterChange('category', category)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Allergens (Free From)</h3>
            <div className="space-y-2">
              {allergensList.map((allergen) => (
                <div key={allergen} className="flex items-center">
                  <input
                    id={`allergen-${allergen}`}
                    name={`allergen-${allergen}`}
                    type="checkbox"
                    checked={filters.allergens.includes(allergen)}
                    onChange={() => handleFilterChange('allergens', allergen)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`allergen-${allergen}`} className="ml-3 text-sm text-gray-700">
                    {allergen}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Certifications</h3>
            <div className="space-y-2">
              {certificationsList.map((certification) => (
                <div key={certification} className="flex items-center">
                  <input
                    id={`certification-${certification}`}
                    name={`certification-${certification}`}
                    type="checkbox"
                    checked={filters.certifications.includes(certification)}
                    onChange={() => handleFilterChange('certifications', certification)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`certification-${certification}`}
                    className="ml-3 text-sm text-gray-700"
                  >
                    {certification}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="mb-6">
            <form onSubmit={handleSearch} className="flex w-full">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search products..."
                />
              </div>
              <button
                type="submit"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </form>
          </div>

          {/* Applied filters */}
          {(filters.category || filters.allergens.length > 0 || filters.certifications.length > 0) && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-700">Applied filters:</span>
              
              {filters.category && (
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {filters.category}
                  <button
                    type="button"
                    onClick={() => handleFilterChange('category', '')}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {filters.allergens.map(allergen => (
                <span key={allergen} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  No {allergen}
                  <button
                    type="button"
                    onClick={() => handleFilterChange('allergens', allergen)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-green-400 hover:bg-green-200 hover:text-green-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              {filters.certifications.map(certification => (
                <span key={certification} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {certification}
                  <button
                    type="button"
                    onClick={() => handleFilterChange('certifications', certification)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Products grid */}
          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-10 text-center">
              <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* This is a placeholder for product data that would come from the API */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Sample Product {item}</h3>
                    <p className="text-sm text-gray-500 mb-2">Manufacturer Name</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Organic
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Gluten-Free
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      A sample product description that highlights the key features and benefits.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;