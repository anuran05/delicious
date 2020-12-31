import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Registration from './components/Registration_Hooks';
import UserLogin from './components/UserLogin_Hooks';
import UserAfterLogin from './components/UserAfterLogin'
import UpdateProfile from './components/UpdateProfile_Hooks'
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import UserBlog from './components/UserBlog';
import ContactUs from './components/ContactUs';
import AddRecipe from './components/AddRecipe';
import NoMatch from './components/NoMatch';
import AdminLogin from './components/AdminLogin_Hooks';
import AdminAfterLogin from './components/AdminAfterLogin';
import Delete from './components/Delete_Hooks';
import DisplayAll from './components/DisplayAll_Hooks'
import Search from './components/Search_Hooks'
import Logout from './components/Logout'
import NavigationBar from './components/NavigationBar';
import ManageEmp from './components/ManageEmp_Hooks'
import Search_Receipe from './components/Search_Receipe';
function App() {
  return (
    <div className="App">
      <br /><br />
      <Router>
      <NavigationBar />
        <br /> <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/reg" component={Registration} />
          <Route path="/login" component={UserLogin} />
          <Route path="/userafterlogin" component={UserAfterLogin} />
          <Route path="/updateprofile" component={UpdateProfile} />
          <Route path="/blog" component={Blog} />
          <Route path="/userblog" component={UserBlog} />
          <Route path="/addrecipe" component={AddRecipe} />
          <Route path="/about" component={AboutUs} />
          <Route path="/search_receipe" component={Search_Receipe} />
          <Route path="/contact_us" component={ContactUs} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} />
          <Route path="/displayall" component={DisplayAll} />
          <Route path="/delete" component={Delete} />
          <Route path="/search" component={Search} />
          <Route path="/manageemp" component={ManageEmp} />
          <Route path="/logout" component={Logout} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
