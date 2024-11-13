import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from './menuItems';
import { SubMenuItem } from './SubMenuItem';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600">
          <h1 className="text-2xl font-bold text-white">Místico</h1>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-4rem)]">
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="py-2">
                  <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200">
                    <item.icon className="w-5 h-5" />
                    <span className="ml-3">{item.title}</span>
                  </div>
                  {item.submenu?.map((subItem, subIndex) => (
                    <SubMenuItem key={subIndex} item={subItem} />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;