import React, { Component, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const API_URL = 'http://127.0.0.1:4000/';


class UserService{
  isLoggedIn(ComposedComponent = false){
    // https://stackoverflow.com/questions/45905472/auth-component-as-middleware-in-react
    class Auth extends Component {
      
      componentDidMount(){
        if(!JSON.parse(localStorage.getItem("user")).isLoggedIn){
          window.location.href = '/login';
        }
        if(JSON.parse(localStorage.getItem("user")).userType !== "user"){
          window.location.href = '/login';
        }
      }
      
      render(){
        return <ComposedComponent/>
      }
    }
    
    return Auth;
  }
  
  async getUser(username){
    const response = await axios.get(API_URL + 'student?student_id=' + username);

    return {
      isLoggedIn: true,
      userType: "user",
      userData: response.data[0]
    }
    // (await axios({
    //   url: API_URL + 'student?student_id=' + username,
    //   method: "get",
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //   }
    // })).data[0];

    // .then(response => {
    //   setUser({
    //       isLoggedIn: true,
    //       userType: 'user',
    //       userData: response.data[0]
    //   });
    // });


    // return  {
    //   isLoggedIn: true,
    //   userType: username || 'user',
    //   userData: {
    //     //Data ini yang diterima dari API, yang diatas diatur FE
    //     student_id: "1900011",
    //     faculty_id: "D",
    //     study_program_name: "Ilmu Kompyuter",
    //     student_name: "Mahasiswa A",
    //     student_place_of_birth: "Bandung",
    //     student_date_of_birth: "10-28-2000",
    //     student_gender: "Laki-Laki",
    //     student_entry_year: "09-01-2019",
    //     student_bio: "hjsadgjahsjhgdasmbzcxhjgdsagsadhjgjhgjhgjasdghjgdjhgsadsahdgshdagddd",
    //     user_picture: "",
    //     class_id: "C2POW19",
    //     class_representative: true,
    //   }
    // }
  }

  saveCurrentUser(data){
    localStorage.setItem("user", JSON.stringify(data));
  }
  
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

  updatePassword(student_id){
    const response = axios.post(API_URL + 'student?student_id=' + student_id);
  }
}

export default new UserService();