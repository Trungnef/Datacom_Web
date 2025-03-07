import React, { useState } from 'react';
import { BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight, Users, Calendar, Download } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30days');

  // Mock data - trong ứng dụng thực tế, dữ liệu này sẽ được lấy từ API
  const stats = [
    { 
      name: 'Total Matches', 
      value: 124, 
      change: 12, 
      isIncrease: true,
      icon: <Users className="h-6 w-6 text-indigo-600" />
    },
    { 
      name: 'Conversion Rate', 
      value: '32%', 
      change: 5, 
      isIncrease: true,
      icon: <BarChart3 className="h-6 w-6 text-indigo-600" />
    },
    { 
      name: 'Active Partners', 
      value: 48, 
      change: 2, 
      isIncrease: false,
      icon: <PieChart className="h-6 w-6 text-indigo-600" />
    },
    { 
      name: 'Avg Time to Match', 
      value: '5.2 days', 
      change: 0.8, 
      isIncrease: true,
      icon: <Calendar className="h-6 w-6 text-indigo-600" />
    }
  ];

  // Mock chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Matches',
        data: [12, 19, 17, 23, 25, 31],
        color: '#4f46e5'
      },
      {
        label: 'Conversions',
        data: [4, 7, 5, 10, 9, 12],
        color: '#06b6d4'
      }
    ]
  };

  // Mock industry distribution data
  const industryData = [
    { industry: 'Food & Beverage', percentage: 45 },
    { industry: 'Personal Care', percentage: 22 },
    { industry: 'Household', percentage: 18 },
    { industry: 'Pet Care', percentage: 8 },
    { industry: 'Other', percentage: 7 }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <div className="flex gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="12months">Last 12 months</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.isIncrease ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.isIncrease ? (
                          <ArrowUpRight className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                        )}
                        <span className="ml-1">{stat.change}%</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Match Performance</h3>
          <div className="flex gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              <span className="w-2 h-2 mr-1 rounded-full bg-indigo-500"></span>
              New Matches
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
              <span className="w-2 h-2 mr-1 rounded-full bg-cyan-500"></span>
              Conversions
            </span>
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6">
          {/* This is where you'd actually render a real chart component */}
          <div className="relative h-80 border-b border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <LineChart className="h-12 w-12 mr-3" />
              <span className="text-lg">Chart visualization would render here with real chart library</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-xs text-gray-500">
              {chartData.labels.map((label, index) => (
                <div key={index}>{label}</div>
              ))}
            </div>
            <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-gray-200"></div>
            <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-200"></div>
            <div className="absolute top-3/4 left-0 right-0 border-t border-dashed border-gray-200"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Industry Distribution */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Industry Distribution</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Breakdown of your matches by industry</p>
          </div>
          <div className="px-4 py-4 sm:px-6">
            <div className="space-y-4">
              {industryData.map((item) => (
                <div key={item.industry}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-500">{item.industry}</span>
                    <span className="text-sm font-medium text-indigo-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activities</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Your most recent connections and activity</p>
          </div>
          <div className="px-4 py-4 sm:px-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">New match with EcoPackage Inc.</p>
                    <p className="text-sm text-gray-500">Match score: 92%</p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">2 days ago</div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Partnership confirmed with Natural Foods Co.</p>
                    <p className="text-sm text-gray-500">Contract signed</p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">5 days ago</div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Message received from GreenPack Solutions</p>
                    <p className="text-sm text-gray-500">Regarding new product inquiry</p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">1 week ago</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the Check component since it was not imported
const Check = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Define the MessageSquare component since it was not imported
const MessageSquare = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default Analytics;