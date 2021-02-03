import React from "react";
import ContentList from "../../ContentList";
import Filter from "../../Filter";
import ChaptersCount from "../../ChaptersCount";
import Alert from "../../Alert";
import SideMenu from "../../SideMenu/SideMenu";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";

const Main = () => {
  return (
    <div className="main">
      <HeaderNavigation></HeaderNavigation>
      <SideMenu></SideMenu>
      <div className="content">
        <h1>Amazing book title</h1>
        <hr />
        <Alert />
        <Filter />
        <ContentList />
        <ChaptersCount />
      </div>
    </div>
  );
};

export default Main;
