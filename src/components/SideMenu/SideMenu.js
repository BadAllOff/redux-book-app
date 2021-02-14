import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { chapterPath } from "../../helpers/pathHelper";

const SideMenu = ({ isLoading, chapters }) => {
  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        <Link to="/">
          <h1 className="header-logo">booksLie</h1>
        </Link>

        <div className="loading-status">{isLoading && "Loading ... "}</div>

        <ul className="navigation">
          <li key="mainPage" className="pl-2 pt-2 navigation-item">
            <NavLink to={`/`} activeClassName="selected" exact>
              Main Page
            </NavLink>
          </li>
          {chapters &&
            chapters.map((chapter) => {
              return (
                <li key={chapter._id} className=" pl-2 pt-2 navigation-item">
                  <NavLink
                    to={chapterPath(chapter._id)}
                    activeClassName="selected"
                  >
                    {chapter.ready && <span className="text-success">✔</span>}
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
