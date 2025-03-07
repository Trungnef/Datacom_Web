import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCircle, 
  Handshake, 
  BarChart3, 
  Settings,
  LogOut 
} from 'lucide-react';
import { UserType } from '../types';

interface SidebarProps {
  userType: UserType | null;
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Xác định trang hiện tại từ đường dẫn
  const currentPath = location.pathname.split('/').pop() || 'dashboard';

  const navItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard className="h-6 w-6" />,
      path: 'dashboard',
      allowedUserTypes: ['manufacturer', 'brand', 'retailer'],
    },
    {
      name: 'Profile',
      icon: <UserCircle className="h-6 w-6" />,
      path: 'profile',
      allowedUserTypes: ['manufacturer', 'brand', 'retailer'],
    },
    {
      name: 'Matching',
      icon: <Handshake className="h-6 w-6" />,
      path: 'matching',
      allowedUserTypes: ['manufacturer', 'brand', 'retailer'],
    },
    {
      name: 'Analytics',
      icon: <BarChart3 className="h-6 w-6" />,
      path: 'analytics',
      allowedUserTypes: ['manufacturer', 'brand', 'retailer'],
    },
    {
      name: 'Settings',
      icon: <Settings className="h-6 w-6" />,
      path: 'settings',
      allowedUserTypes: ['manufacturer', 'brand', 'retailer'],
    },
  ];

  const filteredNavItems = navItems.filter(
    item => !userType || item.allowedUserTypes.includes(userType)
  );
  
  const handleNavigation = (path: string) => {
    navigate(`/dashboard/${path}`);
  };
  
  const handleLogout = () => {
    // Logic xử lý đăng xuất sẽ được thêm sau này
    navigate('/login');
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-indigo-700">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-white text-xl font-bold">CPG Connect</span>
            </div>
            <nav className="mt-8 flex-1 px-2 space-y-1">
              {filteredNavItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`${
                    currentPath === item.path
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600'
                  } group flex items-center px-2 py-2 text-base font-medium rounded-md w-full`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-700 w-full text-white"
            >
              <LogOut className="h-5 w-5" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
