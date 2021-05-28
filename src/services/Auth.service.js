import axios from 'axios';
import bcrypt from 'bcryptjs';

const API_URL = 'http://127.0.0.1:4000/';
const saltRounds = 12;

class AuthService{
  async login(username, password){
    let pass = await bcrypt.hashSync(password + process.env.REACT_APP_KAGI, saltRounds);
    return  axios.post(process.env.REACT_APP_API_URL + 'login', {
        data: {
          nim: username,
          password: pass
        }
      }).then(res => {
        return res.data.approved;
      });
  }

  async register(username, password){
    var pass = await bcrypt.hashSync(password + process.env.REACT_APP_KAGI, saltRounds);
    return axios.post(process.env.REACT_APP_API_URL + 'register', {
      data: {
            nim: username,
            password: pass
          }
    })
    .then(res => {
      return res.data.code === 200 ? true : false; 
    })
    .catch((err) => {
      console.log(err);
    });
      // axios({
      //   url: process.env.REACT_APP_API_URL + 'register',
      //   method: "post",
      //   headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Origin': '*'
      //   },
      //   data: {
      //     nim: username,
      //     password: pass
      //   }
      // })
  }
  
  logout(){
    localStorage.removeItem("user");
    window.location.href = "/";
  }
}

export default new AuthService();