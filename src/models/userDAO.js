import shortid from "shortid";
import slugify from "slugify";
import hash from 'hash.js';

const USER_KEY="user";
class User{
  constructor(email,passwordPlainText,firstName,lastName,project){
    const slug= slugify(firstName.toLowerCase())+"-"+shortid.generate();
    const passwordHash=hash.sha256().update(passwordPlainText).digest('hex');
    this.slug=slug;
    this.email=email;
    this.firstName=firstName;
    this.passwordHash=passwordHash;
    this.lastName=lastName;
  }
}


export default class UserDAO {
  constructor(){
    const usersJSON = localStorage.getItem(USER_KEY);
    const usersArr=JSON.parse(usersJSON);
    if (usersArr=== undefined || usersArr=== "" || usersArr=== null){
      localStorage.setItem(USER_KEY, JSON.stringify([]));
    }
  }
  getList(){
    const userJSON = localStorage.getItem(USER_KEY);
    const usersArr=JSON.parse(userJSON);
    return usersArr;
  }
  getObjectByEmail(email){
      const userArr=this.getList();
      let userObj;
      for ( userObj of userArr ){
        if (userObj.email===email){
          return userObj;
        }
        return null;
      }
   console.log(userObj)
  }
  addObject(email,password,firstName,lastName,){
    const userObj= new User(email, password, firstName,lastName,);
    const usersArr= this.getList();
    usersArr.push(userObj);
    localStorage.setItem( USER_KEY , JSON.stringify(usersArr));
  }
  auth(email,passwordPlainText){
    const userObj=this.getObjectByEmail(email);
   if (userObj===null || userObj === ""|| userObj===undefined){
     return null;
   }
   const passwordHash=hash.sha256().update(passwordPlainText).digest('hex');
   const isVerified=passwordHash===userObj.passwordHash;
   if ( isVerified){
     return userObj
   }
   else{
     return null;
   }
  }
}
