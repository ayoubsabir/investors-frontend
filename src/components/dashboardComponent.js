import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default function DashboardComponent(props){
   const {}= props;
    return(
      <div>
          <h1>Dashboard</h1>
          <p>welcome</p>
          <p>Please <Link to='/investors-list'>View</Link> our current projects</p>
          <Link to='/login'>Log out</Link>
      </div>
    );
}
