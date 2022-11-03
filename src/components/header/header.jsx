import React from "react";
import "./header.css";

export const Header = (props) => {
  return(
  <div className="header">
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {/* <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" /> */}
            <h3>The News</h3>
        </a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  )
};