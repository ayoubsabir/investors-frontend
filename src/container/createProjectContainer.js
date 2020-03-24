import React, { Component } from 'react';

import CreateProjectComponent from '../components/createProjectComponent';
import ProjectDAO from '../models/projectDAO';

export default class CreateProjectContainer extends Component{
  constructor(props){
    super(props);
    this.state={
    fullname:"",
    summary:"",
    project:"",
    field:'',
    projectImage:"",
    yourImage:"",
    }
    this.onSummaryChange=this.onSummaryChange.bind(this);
    this.onFullNameChange=this.onFullNameChange.bind(this);
    this.onProjectChange=this.onProjectChange.bind(this);
    this.onFieldChange=this.onFieldChange.bind(this);
    this.onProjectImageChange=this.onProjectImageChange.bind(this);
    this.onImageChange=this.onImageChange.bind(this);
    this.onClick=this.onClick.bind(this);
  }
  onFullNameChange(event){
    this.setState({
      fullname:event.target.value
    })
  }
   onSummaryChange(event){
      this.setState({
        summary:event.target.value
      })
    }
    onProjectChange(event){
      this.setState({
        project:event.target.value
      })
    }
    onFieldChange(event){
      this.setState({
        field:event.target.value
      })
    }
    onProjectImageChange(event){
      this.setState({
        projectImage:event.target.value
      })
    }
    onImageChange(event){
      this.setState({
        yourImage:event.target.value
      })
    }

    onClick(event){
      event.preventDefault();
      const { summary, fullname, project,field, projectImage, yourImage } = this.state;
      const projectDAO = new ProjectDAO();
      projectDAO.addObject( summary, fullname, project,field, projectImage, yourImage);
      alert("Added succssessfully");
      this.props.history.push('/investors-list')
    }
  render(){
   const {summary, fullname, project, field, projectImage, yourImage}=this.state;
   const { onSummaryChange, onProjectChange,onFullNameChange,onFieldChange,onProjectImageChange,onImageChange,
          onClick,
      }=this;
    return(
      <div>
          <CreateProjectComponent
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
          onImageChange={onImageChange}
          onClick={onClick}


          />
      </div>


    );
  }
}
