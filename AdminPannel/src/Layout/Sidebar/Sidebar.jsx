import React from 'react';
import { NavLink } from 'react-router-dom';
// Importing professional, modern icons from react-icons
import { 
  FiGrid, 
  FiEdit3, 
  FiDroplet, 
  FiBox, 
  FiUsers, 
  FiSettings 
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, isMobileOpen }) => {
  const menuSections = [
    {
      groupName: "Core Analytics",
      items: [
        { id: 'dash', title: 'Dashboard', icon: FiGrid, path: '/dashboard' }
      ]
    },
    {
      groupName: "Inventory & Sales",
      items: [
        { id: 'blog', title: 'Blog Posting', icon: FiEdit3, path: '/blog' },
        { id: 'cat', title: 'Perfume Catalog', icon: FiDroplet, path: '/catalog' },
        { id: 'ord', title: 'Orders Portal', icon: FiBox, path: '/orders' }
      ]
    },
    {
      groupName: "Management Center",
      items: [
        { id: 'cust', title: 'Customers', icon: FiUsers, path: '/customers' },
        { id: 'set', title: 'Settings', icon: FiSettings, path: '/settings' }
      ]
    }
  ];

  const sidebarClass = `sidebar ${isCollapsed ? 'sidebar--collapsed' : ''} ${isMobileOpen ? 'sidebar--open' : ''}`;

  return (
    <aside className={sidebarClass}>
      <div className="sidebar__header">
        <span className="sidebar__title">Aroma</span>
      </div>
      
      <div className="sidebar__content">
        {menuSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="sidebar__section">
            {!isCollapsed && <h4 className="sidebar__section-title">{section.groupName}</h4>}
            <ul className="sidebar__menu">
              {section.items.map((item) => {
                // Store the icon component in an uppercase variable to render it dynamically
                const IconComponent = item.icon;
                
                return (
                  <li key={item.id} title={item.title}>
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`}
                    >
                      <div className="sidebar__icon-wrapper">
                        <IconComponent className="sidebar__icon" />
                      </div>
                      <div className="sidebar__text-container">
                        <span className="sidebar__item-title">{item.title}</span>
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;