import React from 'react';
import './App.css';
import {Route} from "react-router-dom";



//import SignUpContainer from "./сomponents/Header/SignUp/SignUpContainer";
//import SignInContainer from "./сomponents/Header/SignIn/SignInContainer";
import HeaderContainer from "./сomponents/Header/HeaderContainer";
import AdminPageContainer from "./сomponents/AdminPage/AdminPageContainer";
import HomePageContainer from "./сomponents/HomePage/HomePageContainer";
import BikePageContainer from "./сomponents/AdminPage/BikePage/BikePageContainer";

const  App = () => {

  return (
    <div className="App">
      <HeaderContainer />
      <Route exact path={'/'}  component={HomePageContainer} />

      <Route exact path={'/adminpage'}  render={ () => <AdminPageContainer />} />
      <Route path={'/reports/:messageid?'} exact component = {BikePageContainer} />

    </div>
  );
}

export default App;
//<Route exact path={'/sign_up'}  render={ () => <SignUpContainer />} />
//<Route exact path={'/sign_in'}  render={ () => <SignInContainer />} />