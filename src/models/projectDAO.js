import shortid from "shortid";
import slugify from "slugify";

const PPROJECT_KEY="project";
class Project{
  constructor(summary, fullname, project, field,projectImage,yourImage){
    const slug= slugify(project.toLowerCase())+"-"+shortid.generate();
    this.slug=slug;
    this.summary=summary;
    this.fullname=fullname;
    this.project=project;
    this.field=field;
    this.projectImage=projectImage;
    this.yourImage=yourImage;
  }
}


export default class ProjectDAO {
  constructor(){
    const projectsJSON = localStorage.getItem(PPROJECT_KEY);
    const projectsArr=JSON.parse(projectsJSON);
    if (projectsArr=== undefined || projectsArr=== "" || projectsArr=== null){
      localStorage.setItem(PPROJECT_KEY, JSON.stringify([]));
    }
  }
  getList(){
    const projectJSON = localStorage.getItem(PPROJECT_KEY);
    const projectsArr=JSON.parse(projectJSON);
    return projectsArr;
  }
  addObject(summary, fullname, project,field,projectImage,yourImage){
    const projectObj= new Project(summary, fullname, project, field,projectImage,yourImage);
    const projectsArr= this.getList();
    projectsArr.push(projectObj);
    localStorage.setItem( PPROJECT_KEY , JSON.stringify(projectsArr));
  }

  getObjectBySlug(slug){
    let projectObj;
    for ( projectObj of this.getList() ){
      if ( projectObj.slug === slug ){
        return projectObj;
      }
    }
    return null;
  }
  updateObjectBySlug(slug,summary, fullname,project,field,projectImage,yourImage){
    const projectArr = this.getList();

    let iterator;
    for (iterator of projectArr){
      if (iterator.slug===slug){
        iterator.summary= summary;
        iterator.fullname= fullname;
        iterator.project= project;
        iterator.field= field;
        iterator.projectImage= projectImage;
        iterator.yourImage= yourImage;
        localStorage.setItem( PPROJECT_KEY , JSON.stringify(projectArr));
        break;
       }
    }
  }
}
