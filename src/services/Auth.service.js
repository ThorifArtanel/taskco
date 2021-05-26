import axios from 'axios';
// import { hashSync, verifySync } from '@node-rs/bcrypt';

const API_URL = 'http://127.0.0.1:4000/';
const kagi = "AyshaHasnaIzzaThorif";
// const saltRounds

class AuthService{
  async login(username, password){
    
    const response = await axios.get(API_URL + 'user?username=' + username);
    console.log(response.data.accessToken);
    // return verifySync(password, response.data[0].password);
  }

  async register(username, password){
    // const pass =  hashSync(password + kagi, 12);
    axios.post(API_URL + 'user', {
      username: username,
      password: password,
      student_id: username
    });
  }
  
  logout(){
    localStorage.removeItem("user");
  }
}

export default new AuthService();