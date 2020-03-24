import React, { Component } from 'react';

import InvestorsListComponent from '../components/investorsListComponent';
import ProjectDAO from '../models/projectDAO';

export default class InvestorsListContainer extends Component{
  constructor(props){
    super(props);
    const dao= new ProjectDAO();
    const project = dao.getList();
    this.state={
       project: project,
    }

  }
  render(){
    const { project } = this.state;
    return(
      <div>
          <InvestorsListComponent
              project = {project}

          />
      </div>
    );
  }
}
