import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, isMobileOpen }) => {
  const menuItems = [
    { id: 'dash', title: 'Dashboard', subtitle: 'Overview & Analytics', icon: '📊', path: '/dashboard' },
    { id: 'cat', title: 'Perfume Catalog', subtitle: 'Manage Scents & Sizes', icon: '🧪', path: '/catalog' },
    { id: 'ord', title: 'Orders Portal', subtitle: 'Track Deliveries', icon: '📦', path: '/orders' },
    { id: 'cust', title: 'Customers', subtitle: 'Profiles & Segments', icon: '👥', path: '/customers' },
    { id: 'set', title: 'Settings', subtitle: 'Store Configurations', icon: '⚙️', path: '/settings' },
  ];

  const sidebarClass = `sidebar ${isCollapsed ? 'sidebar--collapsed' : ''} ${isMobileOpen ? 'sidebar--open' : ''}`;

  return (
    <aside className={sidebarClass}>
      <div className="sidebar__header">
        <span className="sidebar__title">AromaPanel</span>
        {!isCollapsed && <span className="sidebar__subtitle">Admin</span>}
      </div>
      
      <ul className="sidebar__menu">
        {menuItems.map((item) => (
          <li key={item.id} className="sidebar__item" title={item.title}>
            <div className="sidebar__icon">{item.icon}</div>
            <div className="sidebar__text-container">
              <span className="sidebar__item-title">{item.title}</span>
              <span className="sidebar__item-subtitle">{item.subtitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;