import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = ({ isLoading, chapters }) => {
  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        <h1 className="header-logo">booksLie</h1>

        <div className="loading-status">{isLoading && "Loading ... "}</div>

        <ul className="navigation">
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
