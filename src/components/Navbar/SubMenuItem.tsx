import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  title: string;
  path: string;
  submenu?: MenuItem[];
}

interface SubMenuItemProps {
  item: MenuItem;
  depth?: number;
}

export const SubMenuItem: React.FC<SubMenuItemProps> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname.startsWith(item.path);
  const isParent = item.submenu && item.submenu.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (isParent) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between px-4 py-2 text-gray-600 
          hover:bg-purple-50 hover:text-purple-700 transition-all duration-300
          ${depth > 0 ? 'pl-8' : ''}
          ${isActive ? 'bg-purple-50 text-purple-700' : ''}
          ${isParent ? 'cursor-pointer' : ''}`}
        onMouseEnter={() => depth > 0 && setIsOpen(true)}
        onMouseLeave={() => depth > 0 && setIsOpen(false)}
        onClick={handleClick}
      >
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex-1 ${isActive ? 'text-purple-700 font-semibold' : ''}`
          }
          onClick={(e) => isParent && e.preventDefault()}
        >
          {item.title}
        </NavLink>
        {item.submenu && (
          <ChevronRight 
            className={`w-4 h-4 transition-transform duration-300 
              ${isOpen ? 'rotate-90 text-purple-700' : ''}`} 
          />
        )}
      </div>

      <AnimatePresence>
        {item.submenu && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${depth > 0 
              ? 'absolute left-full top-0 w-64 bg-white shadow-lg rounded-r-lg' 
              : 'relative bg-gray-50'} 
              overflow-hidden z-50`}
            onMouseEnter={() => depth > 0 && setIsOpen(true)}
            onMouseLeave={() => depth > 0 && setIsOpen(false)}
          >
            {item.submenu.map((subItem, index) => (
              <SubMenuItem key={index} item={subItem} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};