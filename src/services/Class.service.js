import axios from 'axios';

const API_URL = 'http://127.0.0.1:4000/';


class ClassService{
  async getClass(class_id){
    const res = await axios.get(API_URL + 'class?class_id=' + class_id);
    return res.data[0];
  }
  
  logout(){
    localStorage.removeItem("user");
  }
  
  saveCurrentClass(data){
    localStorage.setItem("class", JSON.stringify(data));
  }
  
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("class"));
  }
  
  addSchedule(clas, schedule){
    clas.class_schedule = schedule;
    axios.patch(API_URL + 'class?class_id=D' , {
      ...clas,
      id: 1
    });
  }
  
  getDeadlines(){
    return axios.get(API_URL + 'deadline')
      .then((res) => res.data);
  }
  
  async getDeadline(cl_assignment_id){
    const res = await axios.get(API_URL + 'deadline?cl_assignment_id=' + cl_assignment_id);
    return res.data[0];
  }
}

export default new ClassService();