import axios from 'axios';
// import bcrypt from 'bcrypt';

const API_URL = 'http://127.0.0.1:4000/';
const kagi = "AyshaHasnaIzzaThorif";
// const saltRounds

class AuthService{
  async login(username, password){
    // const hash = await bcrypt.hash(password+kagi, saltRounds);
    const response = await axios.get(API_URL + 'user?username=' + username);
    // await axios({
    //   url: API_URL + 'user?username=' + username,
    //   method: "get",
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //   }
    // })
    if(response.data[0].password === password){
      
      return true;
    }

    // if (response.data.accessToken) {
    //     localStorage.setItem('user', JSON.stringify(response.data));
    // }
      // localStorage.setItem('login', true);
  }

  async register(username, password){
  }
  
  logout(){
    localStorage.removeItem("user");
  }
}

export default new AuthService();