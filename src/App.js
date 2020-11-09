import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./сomponents/Header/HeaderContainer";
import AdminPageContainer from "./сomponents/AdminPage/AdminPageContainer";
import HomePageContainer from "./сomponents/HomePage/HomePageContainer";
import BikePageContainer from "./сomponents/AdminPage/BikePage/BikePageContainer";
import OfficerPageContainer from "./сomponents/AdminPage/OfficerPage/OfficerPageContainer";

const  App = () => {

  return (
    <div className="App">
      <HeaderContainer />
      <Route exact path={'/'}  component={HomePageContainer} />
      <Route exact path={'/adminpage'}  render={ () => <AdminPageContainer />} />
      <Route path={'/reports/:messageid?'} exact component = {BikePageContainer} />
      <Route path={'/officers/:officerid?'} exact component = {OfficerPageContainer} />

    </div>
  );
}

export default App;
//<Route exact path={'/sign_up'}  render={ () => <SignUpContainer />} />
//<Route exact path={'/sign_in'}  render={ () => <SignInContainer />} />