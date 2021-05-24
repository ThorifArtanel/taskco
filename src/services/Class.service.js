import axios from 'axios';

const API_URL = '/api/auth/';


class ClassService{
  getClass(class_id){
    JSON.parse(localStorage.getItem("login"));
    return {
      faculty_id: "D",
      study_program_id: "D561",
      course_id: "7Y810UU",
      class_id: "C2POW19",
      lecturer_id: "18372",
      student_id: "1900011",
      class_name: "IlkomC2 2019",
      class_year: "09-01-2019",
    }
  }

  logout(){
    localStorage.removeItem("user");
  }

  saveCurrentClass(data){
    localStorage.setItem("class", JSON.stringify(data));
  }
  
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new ClassService();