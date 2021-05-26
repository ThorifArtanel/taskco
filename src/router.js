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
import ChangePassword from './views/Profile/ChangePassword';
import Class from './views/Class';
import Note from './views/Note';
import NoteView from './views/Note/NoteView';
import ClassView from './views/Class/ClassView';
import Schedule from './views/Class/Schedule';
import Deadline from './views/Class/Deadline';
import DeadlineView from './views/Class/DeadlineView';

const RootRouter = () =>{
  return(
    <Switch>
      <Route path='/' exact component={ LandingPage } />
      {/* User Routers */}
      <Route path='/profile' exact component={ UserService.isLoggedIn(Profile) } />
      <Route path='/profile/change-password' exact component={ UserService.isLoggedIn(ChangePassword) } />
      <Route path='/class' exact component={ UserService.isLoggedIn(Class) } />
      <Route path='/class/deadline' exact component={ UserService.isLoggedIn(Deadline) } />
      <Route path='/class/deadline/:deadline_id' exact component={ UserService.isLoggedIn(DeadlineView) } />
      <Route path='/class/schedule' exact component={ UserService.isLoggedIn(Schedule) } />
      <Route path='/class/:class_id' exact component={ UserService.isLoggedIn(ClassView) } />
      <Route path='/note' exact component={ UserService.isLoggedIn(Note) } />
      <Route path='/note/:note_id' exact component={ UserService.isLoggedIn(NoteView) } />

      {/* Admin Routers */}
      <Route path='/admin/class' exact component={ AdminService.isLoggedIn(AdminClass) } />
      <Route path='/admin/class-representative' exact component={ AdminService.isLoggedIn(AdminClassRepresentative) } />
      <Route path='/admin/user' exact component={ AdminService.isLoggedIn(AdminUser) } />
      
      <Route path='/register' exact component={ Register }/>
      <Route path='/login' exact component={ Login }/>
      <Route path='*' component={ NotFound }/>
    </Switch>
  )
}

export default RootRouter;

