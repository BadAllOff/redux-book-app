import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const SideMenu = ({ isLoading, chapters }) => {
  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        <Link to="/">
          <h1 className="header-logo">booksLie</h1>
        </Link>

        <div className="loading-status">{isLoading && "Loading ... "}</div>

        <ul className="navigation">
          <li key="mainPage" className="navigation-item">
            <NavLink to={`/`} activeClassName="selected" exact>
              Main Page
            </NavLink>
          </li>
          {chapters &&
            chapters.map((chapter) => {
              return (
                <li key={chapter._id} className="navigation-item">
                  <NavLink
                    to={`/chapters/${chapter._id}`}
                    activeClassName="selected"
                  >
                    {chapter.title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
