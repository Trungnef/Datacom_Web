import React from 'react';
import { Settings as SettingsIcon, User, Bell, Lock, HelpCircle } from 'lucide-react';

const Settings: React.FC = () => {
  const settingsSections = [
    {
      id: 'account',
      name: 'Account Settings',
      icon: <User className="h-5 w-5 text-gray-500" />,
      description: 'Update your account information and preferences'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: <Bell className="h-5 w-5 text-gray-500" />,
      description: 'Manage your notification preferences'
    },
    {
      id: 'security',
      name: 'Security',
      icon: <Lock className="h-5 w-5 text-gray-500" />,
      description: 'Update password and security settings'
    },
    {
      id: 'help',
      name: 'Help & Support',
      icon: <HelpCircle className="h-5 w-5 text-gray-500" />,
      description: 'Get help or contact support'
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <SettingsIcon className="h-8 w-8 text-indigo-600" />
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {settingsSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {section.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-600">{section.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{section.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-10 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Delete account</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Once you delete your account, you will lose all data associated with it.
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 