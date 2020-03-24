import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function CreateProjectComponent (props){
  const {
          fullname,onFullNameChange,
          summary, onSummaryChange,
          video, onVideoChange,
          project, onProjectChange,
          field,onFieldChange,
          projectImage, onProjectImageChange,
          yourImage, onImageChange,
          onClick,
  }= props;
  return(
     <div><center>
         <h1> Add your project</h1>


         <strong>Full name</strong>&nbsp; &nbsp; &nbsp;<input
         value={fullname}
         type="text"
         placeholder="add your fullname "
         onChange={(event)=> onFullNameChange(event)}
         />
         <br /> <br />
         <strong>Project Summary:</strong>&nbsp; &nbsp; &nbsp; <input
         value={summary}
         type="text"
         placeholder="Quick project summary"
         onChange={(event)=> onSummaryChange(event)}
         />
         <br /> <br />
         <strong>what field? :</strong>&nbsp; &nbsp; &nbsp;<input
         value={field}
         type="text"
         placeholder="add your field "
         onChange={(event)=> onFieldChange(event)}
         />
         <br /> <br />
         <strong>Project :</strong>&nbsp; &nbsp; &nbsp;<textarea
         value={project}
         type="text"
         placeholder="Full description "
         onChange={(event)=> onProjectChange(event)}
         />
         <br /> <br />
         <strong>project image :</strong>&nbsp; &nbsp; &nbsp;<input
         value={projectImage}
         type="text"
         placeholder="add your project image "
         onChange={(event)=> onProjectImageChange(event)}
         />
         <br /> <br />
         <strong>your image :</strong>&nbsp; &nbsp; &nbsp;<input
         value={yourImage}
         type="text"
         placeholder="add your image "
         onChange={(event)=> onImageChange(event)}
         />
         <br /> <br />
         <button onClick={(event)=> onClick(event)}>submit</button>&nbsp; &nbsp; &nbsp;
         <Link to='/investors-list'>back</Link></center>

     </div>
  );
}
