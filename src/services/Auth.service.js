import axios from 'axios';

const API_URL = 'http://127.0.0.1:4000/';

class AuthService{
  async login(username, password){
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