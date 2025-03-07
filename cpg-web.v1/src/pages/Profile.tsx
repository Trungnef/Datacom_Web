import React from 'react';
import { User, Mail, Phone, MapPin, Building, Edit, Upload } from 'lucide-react';

const Profile: React.FC = () => {
  // Mock data - trong ứng dụng thực tế, dữ liệu này sẽ được lấy từ API hoặc Redux store
  const profile = {
    name: 'John Doe',
    email: 'john.doe@cpgconnect.com',
    phone: '+1 (555) 123-4567',
    role: 'Manufacturer',
    company: 'Acme Manufacturing',
    address: '123 Industrial Parkway, New York, NY 10001',
    bio: 'Experienced manufacturer with over 10 years in the CPG industry. Specializing in sustainable packaging solutions for food and beverage products.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg'
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Profile</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
        </div>
        
        <div className="border-t border-gray-200">
          <div className="flex">
            <div className="px-4 py-5 sm:px-6 w-1/3">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img 
                    src={profile.img} 
                    alt="Profile" 
                    className="h-32 w-32 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <button className="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-2 text-white hover:bg-indigo-700">
                    <Upload className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-900">{profile.name}</h2>
                <p className="text-indigo-600">{profile.role}</p>
              </div>
            </div>
            
            <div className="w-2/3 p-4">
              <dl className="grid grid-cols-1 gap-y-4">
                <div className="flex items-center">
                  <dt className="flex items-center text-sm font-medium text-gray-500 w-36">
                    <Mail className="h-5 w-5 mr-2 text-gray-400" />
                    Email
                  </dt>
                  <dd className="text-sm text-gray-900">{profile.email}</dd>
                </div>
                <div className="flex items-center">
                  <dt className="flex items-center text-sm font-medium text-gray-500 w-36">
                    <Phone className="h-5 w-5 mr-2 text-gray-400" />
                    Phone
                  </dt>
                  <dd className="text-sm text-gray-900">{profile.phone}</dd>
                </div>
                <div className="flex items-center">
                  <dt className="flex items-center text-sm font-medium text-gray-500 w-36">
                    <Building className="h-5 w-5 mr-2 text-gray-400" />
                    Company
                  </dt>
                  <dd className="text-sm text-gray-900">{profile.company}</dd>
                </div>
                <div className="flex items-center">
                  <dt className="flex items-center text-sm font-medium text-gray-500 w-36">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    Address
                  </dt>
                  <dd className="text-sm text-gray-900">{profile.address}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">About</h3>
          <div className="mt-2 text-sm text-gray-500">
            <p>{profile.bio}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Company Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about your company.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <p className="text-sm text-gray-500">
            Add your company information here to help potential partners learn more about your business.
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Complete Company Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;