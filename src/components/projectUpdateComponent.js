import React, { Component } from 'react';


export default function ProjectUpdateComponent(props){
   const {summary, fullname,project,field,projectImage,yourImage,
          onSummaryChange,onFullNameChange,onProjectChange,onFieldChange,
          onProjectImageChange,onYourImageChange,onSaveClick,
    }=props;
   return(
      <div>
          <h1>Edit your Project</h1>

          <strong> summary :</strong>&nbsp; &nbsp; &nbsp;<input
              type= "text"
              value={summary}
              placeholder="summary"
              onChange={(event)=>onSummaryChange(event)}
          />
          <br /> <br />
            <strong> Full name :</strong>&nbsp; &nbsp; &nbsp;<input
              type= "text"
              value={fullname}
              placeholder="fullname"
              onChange={(event)=>onFullNameChange(event)}
          />
          <br /> <br />
            <strong> Project :</strong>&nbsp; &nbsp; &nbsp;<input
              type= "text"
              value={project}
              placeholder="project"
              onChange={(event)=>onProjectChange(event)}
          />
          <br /> <br />
            <strong> Field :</strong>&nbsp; &nbsp; &nbsp;<input
              type= "text"
              value={field}
              placeholder="field"
              onChange={(event)=>onFieldChange(event)}
          />
          <br /> <br />
            <strong> Project image :</strong>&nbsp; &nbsp; &nbsp;<input
              type= "text"
              value={projectImage}
              placeholder="projectImage"
              onChange={(event)=>onProjectImageChange(event)}
          />
          <br /> <br />
            <strong> Your image :</strong>&nbsp; &nbsp; &nbsp;<input
              type= "text"
              value={yourImage}
              placeholder="yourImage"
              onChange={(event)=>onYourImageChange(event)}
          />
          <br /> <br />
           <button onClick={(event)=>onSaveClick(event)}> Save </button>
      </div>
   );
}
