import React, { useState } from 'react';
import { Search, Filter, Check, X, Info, Star, ArrowUpDown, Handshake, Users } from 'lucide-react';

const Matching: React.FC = () => {
  const [activeTab, setActiveTab] = useState('matches');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - trong ứng dụng thực tế, dữ liệu này sẽ được lấy từ API
  const matches = [
    {
      id: 1,
      company: 'GreenPackage Solutions',
      type: 'Manufacturer',
      matchScore: 95,
      location: 'Portland, OR',
      description: 'Sustainable packaging manufacturer specializing in biodegradable materials for food and beverage.',
      tags: ['Sustainable', 'Eco-friendly', 'Food-grade'],
      status: 'pending',
      img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      company: 'Organic Goodness Co.',
      type: 'Brand',
      matchScore: 88,
      location: 'Austin, TX',
      description: 'Organic food brand looking for sustainable packaging solutions for their new product line.',
      tags: ['Organic', 'Health food', 'Retail'],
      status: 'connected',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      company: 'Natural Foods Distribution',
      type: 'Retailer',
      matchScore: 82,
      location: 'Chicago, IL',
      description: 'Distributor of natural and organic food products to grocery stores in the Midwest region.',
      tags: ['Distribution', 'Wholesale', 'Regional'],
      status: 'pending',
      img: 'https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
  ];

  const recommendations = [
    {
      id: 4,
      company: 'Bio Containers Inc.',
      type: 'Manufacturer',
      matchScore: 79,
      location: 'Seattle, WA',
      description: 'Manufacturer of compostable packaging containers for food service and retail products.',
      tags: ['Compostable', 'Food containers', 'Bulk orders'],
      img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      company: 'EcoWrap Solutions',
      type: 'Manufacturer',
      matchScore: 75,
      location: 'Denver, CO',
      description: 'Specializing in eco-friendly wrapping materials and void fill solutions for shipping.',
      tags: ['Shipping', 'Packaging', 'B2B'],
      img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const displayedMatches = 
    activeTab === 'matches' 
      ? matches.filter(match => match.company.toLowerCase().includes(searchTerm.toLowerCase()))
      : recommendations.filter(rec => rec.company.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Matching</h1>
        <div className="flex gap-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search partners..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="sm:hidden">
          <select
            id="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={activeTab}
            onChange={(e) => handleTabChange(e.target.value)}
          >
            <option value="matches">Current Matches</option>
            <option value="recommendations">Recommendations</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              <button
                className={`${
                  activeTab === 'matches'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center`}
                onClick={() => handleTabChange('matches')}
              >
                <Handshake className="h-5 w-5 mr-2" />
                Current Matches
              </button>
              <button
                className={`${
                  activeTab === 'recommendations'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center`}
                onClick={() => handleTabChange('recommendations')}
              >
                <Users className="h-5 w-5 mr-2" />
                Recommendations
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {displayedMatches.length > 0 ? (
          displayedMatches.map((item) => (
            <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="flex h-44">
                <div className="w-1/3 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-medium text-gray-900">{item.company}</h2>
                    <div className="flex items-center bg-indigo-100 px-2 py-1 rounded text-indigo-800 text-xs font-semibold">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {item.matchScore}% Match
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{item.type} • {item.location}</p>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">{item.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 flex justify-between">
                {'status' in item ? (
                  <div className="flex items-center">
                    {item.status === 'connected' ? (
                      <span className="flex items-center text-green-600 text-sm">
                        <Check className="h-4 w-4 mr-1" /> Connected
                      </span>
                    ) : (
                      <span className="flex items-center text-yellow-600 text-sm">
                        <Info className="h-4 w-4 mr-1" /> Pending
                      </span>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="flex space-x-2">
                  {'status' in item && item.status === 'connected' ? (
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                      Message
                    </button>
                  ) : (
                    <>
                      <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                        <Check className="h-4 w-4 mr-1" /> Connect
                      </button>
                      <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                        <X className="h-4 w-4 mr-1" /> Dismiss
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">No matches found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>

      {activeTab === 'matches' && displayedMatches.length > 0 && (
        <div className="mt-8 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Need more matches?</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Complete your company profile to improve your match recommendations and connect with more partners.
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matching;