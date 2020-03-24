import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";
import UserDAO from "../models/userDAO";


import UserCreateController from './userCreateController';
import LogInContainer from './logInContainer';
import CreateProjectContainer from './createProjectContainer';
import DashboardContainer from './dashboardContainer';
import ProjectDetailContainer from './projectDetailContainer';
import ProjectUpdateContainer from './projectUpdateContainer';
import InvestorsListContainer from './investorsListContainer';

function NotFound(props) {
    return <h1>404 : Not Found</h1>;
}
class AppContainer extends Component {
  render() {
    return (
        <Router>
         <div>
           <nav>
             <table>
               <tr>
               <td>
               <button>
                 <Link to="/">Register</Link></button>
               </td>
               <td><button>
                 <Link to="/login/">Log in</Link></button>
               </td>
               </tr>
             </table>
           </nav>
           <Switch>
               <Route path="/" exact component={UserCreateController} />
               <Route path="/login/" component={LogInContainer} />
               <Route path="/createProject" component={CreateProjectContainer} />
               <Route path='/dashboard' component={DashboardContainer} />
               <Route path='/project/:slug' exact component={ProjectDetailContainer} />
               <Route path='/project-update/:slug' exact component={ProjectUpdateContainer} />
               <Route path='/investors-list' component={InvestorsListContainer} />
               <Route component={NotFound} />
           </Switch>
         </div>
       </Router>
    );
  }
}
export default withRouter(AppContainer);
