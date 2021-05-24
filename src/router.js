import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserService from './services/User.service';
import Profile from './views/Profile';
import LandingPage from './views/LandingPage';
import AdminClass from './views/admin/Class';
import Login from './views/Login';
import AdminService from './services/Admin.service';
import Register from './views/Register';
import NotFound from './views/NotFound';
import AdminClassRepresentative from './views/admin/ClassRepresentative';
import AdminUser from './views/admin/User';
import AdminUserEdit from './views/admin/User/UserEdit';
import ChangePassword from './views/Profile/ChangePassword';
import Class from './views/Class';
import Note from './views/Note';

const RootRouter = () =>{
  return(
    <Switch>
      <Route path='/' exact={true} component={ LandingPage } />
      {/* User Routers */}
      <Route path='/profile' exact={true} component={ UserService.isLoggedIn(Profile) } />
      <Route path='/profile/change-password' exact={true} component={ UserService.isLoggedIn(ChangePassword) } />
      <Route path='/class' exact={true} component={ UserService.isLoggedIn(Class) } />
      {/* <Route path='/class/:class_id' component={ UserService.isLoggedIn(Class) } /> */}
      <Route path='/note' exact={true} component={ UserService.isLoggedIn(Note) } />
      {/* <Route path='/note/:note_id' component={ UserService.isLoggedIn(Note) } /> */}

      {/* Admin Routers */}
      <Route path='/admin/class' exact={true} component={ AdminService.isLoggedIn(AdminClass) } />
      <Route path='/admin/class-representative' exact={true} component={ AdminService.isLoggedIn(AdminClassRepresentative) } />
      <Route path='/admin/user' exact={true} component={ AdminService.isLoggedIn(AdminUser) } />
      <Route path='/admin/user/:userNIM' component={ AdminService.isLoggedIn(AdminUserEdit) } />
      
      <Route path='/register' exact={true} component={ Register }/>
      <Route path='/login' exact={true} component={ Login }/>
      <Route path='*' component={ NotFound }/>
    </Switch>
  )
}

export default RootRouter;

