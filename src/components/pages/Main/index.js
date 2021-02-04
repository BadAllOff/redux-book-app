import React from "react";
import ContentList from "../../ContentList";
import Filter from "../../Filter";
import ChaptersCount from "../../ChaptersCount";
import Alert from "../../Alert";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";

const Main = () => {
  return (
    <div className="main">
      <HeaderNavigation></HeaderNavigation>
      <div className="content-wrapper">
        <div className="content">
          <h1>Amazing book title</h1>
          <hr />
          <Alert />
          {/* <Filter /> */}
          <ContentList />
          <ChaptersCount />
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default Main;
