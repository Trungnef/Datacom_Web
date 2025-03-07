import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { Package, Factory, ClipboardList, Search, LogIn, UserPlus, LogOut, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Package className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">CPG Match</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/products" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700">
              <Search className="h-5 w-5 mr-1" />
              <span>Products</span>
            </Link>
            <Link to="/manufacturers" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700">
              <Factory className="h-5 w-5 mr-1" />
              <span>Manufacturers</span>
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700">
                  <ClipboardList className="h-5 w-5 mr-1" />
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700 cursor-pointer">
                  <User className="h-5 w-5 mr-1" />
                  <span>{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700">
                  <LogIn className="h-5 w-5 mr-1" />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-700">
                  <UserPlus className="h-5 w-5 mr-1" />
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;