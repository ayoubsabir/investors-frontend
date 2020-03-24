import React, { Component } from 'react';

import ProjectDetailComponent from '../components/projectDetailComponent';
import ProjectDAO from '../models/projectDAO.js';


export default class ProjectDetailContainer extends Component {
  constructor(props){
    super(props);
    const { slug } = this.props.match.params;

    const dao = new ProjectDAO();
    const projectObj = dao.getObjectBySlug(slug);
    this.state={
        slug:slug,
        projectObj: projectObj,
    }
    this.onEditClick=this.onEditClick.bind(this);
  }
  onEditClick(event){
    event.preventDefault();
    this.props.history.push(`/project-update/${this.state.slug}`);
  }
  render(){
    const {projectObj}= this.state;
    const { onEditClick }= this;
    return(
        <ProjectDetailComponent
            projectObj={projectObj}
            onEditClick={onEditClick}
        />
    );
  }
}
