import React, { Component } from 'react';


import ProjectDAO from '../models/projectDAO';
import ProjectUpdateComponent from '../components/projectUpdateComponent';


export default class ProjectUpdateContainer extends Component{

  constructor(props){
    super(props);

    const { slug } = this.props.match.params;

    const dao = new ProjectDAO();
    const projectObj = dao.getObjectBySlug(slug);
    console.log(projectObj);

    this.state={
        slug: slug,
        summary:projectObj.summary,
        fullname:projectObj.fullname,
        project:projectObj.project,
        field:projectObj.field,
        projectImage:projectObj.projectImage,
        yourImage:projectObj.yourImage,
    }
    this.onSummaryChange=this.onSummaryChange.bind(this);
    this.onFullNameChange=this.onFullNameChange.bind(this);
    this.onProjectChange=this.onProjectChange.bind(this);
    this.onFieldChange=this.onFieldChange.bind(this);
    this.onProjectImageChange=this.onProjectImageChange.bind(this);
    this.onYourImageChange=this.onYourImageChange.bind(this);
    this.onSaveClick=this.onSaveClick.bind(this);

  }
  onSummaryChange(event){
    this.setState({
      summary: event.target.value
    })
  }
  onFullNameChange(event){
    this.setState({
      fullname: event.target.value
    })
  }
  onProjectChange(event){
    this.setState({
      project: event.target.value
    })
  }
  onFieldChange(event){
    this.setState({
      field: event.target.value
    })
  }
  onProjectImageChange(event){
    this.setState({
      projectImage: event.target.value
    })
  }
  onYourImageChange(event){
    this.setState({
      yourImage: event.target.value
    })
  }
  onSaveClick(event){
    event.preventDefault();
      const {slug,summary, fullname,project,field,projectImage,yourImage }=this.state;
      const dao = new ProjectDAO();
      dao.updateObjectBySlug(slug,summary, fullname,project,field,projectImage,yourImage)
      this.props.history.push(`/investors-list/${slug}`)
  }
  render(){
    const {summary, fullname,project,field,projectImage,yourImage }=this.state;
    const {  onSummaryChange,onFullNameChange,onProjectChange,onFieldChange,
          onProjectImageChange,onYourImageChange,onSaveClick
        }= this;
    return(
      <ProjectUpdateComponent
         summary={summary}
         onSummaryChange={onSummaryChange}
         fullname={fullname}
         onFullNameChange={onFullNameChange}
         project={project}
         onProjectChange={onProjectChange}
         field={field}
         onFieldChange={onFieldChange}
         projectImage={projectImage}
         onProjectImageChange={onProjectImageChange}
         yourImage={yourImage}
         onYourImageChange={onYourImageChange}
         onSaveClick={onSaveClick}
      />
    );
  }
}
