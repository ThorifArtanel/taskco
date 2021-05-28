import React, { Component, useContext } from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';

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

  getTimestamp(date){
    return new Date(date).toISOString;
    // let timeStamp = date ? new Date(date) : new Date();
    // return timeStamp;
  }

  getTimeFormat(date){
    let time = date ? new Date(date) : new Date();
    return dateFormat(time, "dd-mm-yyyy");
  }
  
  async getUser(username){
    const response = await axios.get(process.env.REACT_APP_API_URL + 'student/' + username);
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

  async getNotes(student_id){
    //これ大事ね。
    return axios.get(API_URL + 'notes/' + student_id)
      .then((res) => res.data);
  }

  async getNote(note_id){
    return axios.get(process.env.REACT_APP_API_URL + 'note/' + note_id)
      .then((res) => res.data);
  }
  
  changeNoteVisibility(note_id){
    axios.patch(process.env.REACT_APP_API_URL + 'note/' + note_id, {
      s_note_publicity: true
    });
  }
  
  async createNote(){
    let time = this.getTimestamp();
    await axios.post(API_URL + 'note',{
      s_note_timestamp: time,
      s_note_name: "",
      s_note_content: "",
      s_note_publicity: false
    });
    return time;
  }
    
  async updateNote(note){
    const res = await axios.put(API_URL + 'note', note);
    return res;
  }
}

export default new UserService();