import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getManufacturers, setFilters, clearFilters } from '../store/slices/manufacturerSlice';
import { Search, Filter, X, AlertCircle, MapPin, Globe, Phone } from 'lucide-react';

const ManufacturerSearch: React.FC = () => {
  const dispatch = useDispatch();
  const { manufacturers, loading, error, filters } = useSelector((state: RootState) => state.manufacturers);
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
  const [showFilters, setShowFilters] = useState(false);

  // Sample data for filters
  const locations = ['United States', 'Canada', 'Europe', 'Asia', 'Australia', 'South America'];
  const certificationsList = ['ISO 9001', 'HACCP', 'GFSI', 'SQF', 'BRC', 'Organic'];
  const specialtiesList = ['Beverages', 'Snacks', 'Dairy', 'Bakery', 'Condiments', 'Frozen Foods'];

  useEffect(() => {
    dispatch(getManufacturers(filters) as any);
  }, [dispatch, filters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilters({ searchTerm }));
  };

  const handleFilterChange = (filterType: 'location' | 'certifications' | 'specialties', value: string) => {
    if (filterType === 'location') {
      dispatch(setFilters({ location: value }));
    } else if (filterType === 'certifications') {
      const updatedCertifications = filters.certifications.includes(value)
        ? filters.certifications.filter(item => item !== value)
        : [...filters.certifications, value];
      dispatch(setFilters({ certifications: updatedCertifications }));
    } else if (filterType === 'specialties') {
      const updatedSpecialties = filters.specialties.includes(value)
        ? filters.specialties.filter(item => item !== value)
        : [...filters.specialties, value];
      dispatch(setFilters({ specialties: updatedSpecialties }));
    }
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchTerm('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manufacturer Search</h1>
        <p className="text-gray-600">
          Find the perfect manufacturing partners for your CPG products.
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
            <h3 className="text-sm font-medium text-gray-900 mb-2">Location</h3>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center">
                  <input
                    id={`location-${location}`}
                    name="location"
                    type="radio"
                    checked={filters.location === location}
                    onChange={() => handleFilterChange('location', location)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor={`location-${location}`} className="ml-3 text-sm text-gray-700">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
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

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Specialties</h3>
            <div className="space-y-2">
              {specialtiesList.map((specialty) => (
                <div key={specialty} className="flex items-center">
                  <input
                    id={`specialty-${specialty}`}
                    name={`specialty-${specialty}`}
                    type="checkbox"
                    checked={filters.specialties.includes(specialty)}
                    onChange={() => handleFilterChange('specialties', specialty)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`specialty-${specialty}`} className="ml-3 text-sm text-gray-700">
                    {specialty}
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
                  placeholder="Search manufacturers..."
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
          {(filters.location || filters.certifications.length > 0 || filters.specialties.length > 0) && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-700">Applied filters:</span>
              
              {filters.location && (
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {filters.location}
                  <button
                    type="button"
                    onClick={() => handleFilterChange('location', '')}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {filters.certifications.map(certification => (
                <span key={certification} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {certification}
                  <button
                    type="button"
                    onClick={() => handleFilterChange('certifications', certification)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-green-400 hover:bg-green-200 hover:text-green-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              {filters.specialties.map(specialty => (
                <span key={specialty} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {specialty}
                  <button
                    type="button"
                    onClick={() => handleFilterChange('specialties', specialty)}
                    className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Manufacturers list */}
          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading manufacturers...</p>
            </div>
          ) : manufacturers.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-10 text-center">
              <p className="text-gray-500 mb-4">No manufacturers found matching your criteria.</p>
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* This is a placeholder for manufacturer data that would come from the API */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <img
                          src={`https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80`}
                          alt="Company logo"
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-6 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-gray-900">
                            Manufacturing Company {item}
                          </h3>
                          <div className="flex space-x-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              ISO 9001
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              HACCP
                            </span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Specializing in beverage production with state-of-the-art facilities and quality control.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            <span>Chicago, United States</span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-1 text-gray-400" />
                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                              www.example.com
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1 text-gray-400" />
                            <span>+1 (234) 567-890</span>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Beverages
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Dairy
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Organic
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        View Profile
                      </a>
                    </div>
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

export default ManufacturerSearch;