import React, { Component } from 'react';


export default function ProjectDetailComponent(props){
   const { projectObj, onEditClick }=props;
   return(
      <div><center>

         <h2> Full name : {projectObj.fullname}  </h2>
         <img src={projectObj.yourImage} height="200" width="300" />
         <p>  {projectObj.project}  </p>
         <img src={projectObj.projectImage} height="400" width="700" />
         <p>
            <button onClick={(event)=> onEditClick(event)}>Edit</button>
         </p>

      </center></div>
   );
}
