import axios from 'axios';

const API_URL = '/api/auth/';

class AuthService{
  async login(username, password){
    // const response = await axios
    //       .post(API_URL + 'login', {
    //           username,
    //           password
    //       });
    //   if (response.data.accessToken) {
    //       localStorage.setItem('user', JSON.stringify(response.data));
    //   }
      localStorage.setItem('login', true);
      return true;
    //   return response.data;
  }

  async register(username, password){
  }
  
  logout(){
    localStorage.removeItem("user");
  }
}

export default new AuthService();