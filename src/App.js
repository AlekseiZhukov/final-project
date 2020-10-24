import React from 'react';
import './App.css';
import {Route} from "react-router-dom";



import SignUpContainer from "./сomponents/SignUp/SignUpContainer";
import SignInContainer from "./сomponents/SignIn/SignInContainer";
import HeaderContainer from "./сomponents/Header/HeaderContainer";
import AdminPageContainer from "./сomponents/AdminPage/AdminPageContainer";
import HomePageContainer from "./сomponents/HomePage/HomePageContainer";

const  App = () => {

  return (
    <div className="App">
      <HeaderContainer />
      <Route path={'/'} exact component={HomePageContainer} />
      <Route path={'/sign_up'} exact render={ () => <SignUpContainer />} />
      <Route path={'/sign_in'} exact render={ () => <SignInContainer />} />
      <Route path={'/adminpage'} exact render={ () => <AdminPageContainer />} />

    </div>
  );
}

export default App;
