import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">PSD Market</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
            <li><Link to="/shop" className="text-gray-600 hover:text-indigo-600">Shop</Link></li>
            <li><Link to="/admin" className="text-gray-600 hover:text-indigo-600">Admin</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-indigo-600">
            <ShoppingCart size={24} />
          </Link>
          <Link to="/account" className="text-gray-600 hover:text-indigo-600">
            <User size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header