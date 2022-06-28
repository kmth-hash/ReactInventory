/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import {Search} from 'react-bootstrap-icons';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        StoreIt
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/items">
              Items
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link#
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Manage
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/item-add">
                Add Item 
              </a>
              <a className="dropdown-item" href="/manage-item">
                Manage Items
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/prod-add">
                Add Product 
              </a>
              <a className="dropdown-item" href="/manage-prod">
                Manage Products
              </a>
              <div className="dropdown-divider"></div>
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="d-flex justify-content-center w-100">
          <input
            className="form-control my-2 mr-0 search-input"
            type="search"
            placeholder="Type here ..."
            aria-label="Search"
          />
          <button
            className="btn primary-color-1 search-btn my-2 my-0"
            type="submit"
          >
            <span><Search className="search-icon"/></span>&nbsp;
            
          </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
