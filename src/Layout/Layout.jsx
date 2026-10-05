import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="d-flex vh-100 overflow-hidden">
      {/* Sidebar */}
      <nav className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark text-white">
        <h4 className="mb-4 px-2 fw-light">Dashboard</h4>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/dashboard/overview" className="nav-link active text-white bg-secondary bg-opacity-25" aria-current="page">
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/analytics" className="nav-link text-white-50">
              Analytics
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white-50">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white-50">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white-50">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white-50">
              Reports
            </a>
          </li>
        </ul>
        <hr className="border-secondary" />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white-50">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white-50">
              Help
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-grow-1 p-4 bg-light text-dark d-flex flex-column">
       <Outlet/>
      </main>
    </div>
  );
};

export default Layout;