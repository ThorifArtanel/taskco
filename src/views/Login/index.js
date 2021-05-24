import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import DefaultLayout from '../../components/Layout/defaultLayout';
import AuthService from '../../services/Auth.service';
import ClassService from '../../services/Class.service';
import { ClassContext } from '../../services/ClassContext';
import UserService from '../../services/User.service';
import { UserContext } from '../../services/UserContext';


const Login = (props) => {
    const history = useHistory();
    
    const [user, setUser] = useContext(UserContext);
    const [clas, setClass] = useContext(ClassContext);
    let userData = user.userData;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    const login = (e) => {
        // e.preventDefault();
        let auth = AuthService.login(username, password) && check();
        if(auth){
            setUser(() => UserService.getUser(username));
            setClass(() => ClassService.getClass(userData.class_id));
            
            UserService.saveCurrentUser(user);
            ClassService.saveCurrentClass(clas);

            if(user.userType === "admin"){
                history.replace('/admin/class');
            }
            else if(user.userType === "user"){
                history.replace('/profile');
            }
        }

    }

    const check = () => {
        if (!(username.length > 0) && !(password.length > 0)){
            alert("NIM or Password field is empty");
            return false;
        }
        return true;
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div>
            <DefaultLayout>
                    <form  className="margin-auto my-40 width-40">
                        <div className="flex-col">
                            <div className="title-big text-center my-40 red-rose">
                                Login
                            </div>
                            <Input 
                                type="text"
                                className="default-input text-center my-10"
                                onChange={ updateUsername } 
                                value={ username }
                                placeholder="NIM"
                                />
                            <Input 
                                type="password"
                                className="default-input text-center my-10"
                                onChange={ updatePassword } 
                                value={ password }
                                placeholder="Password"
                                />
                            <div className="my-10 self-center">
                                Belum punya akun? <a href="/register">Daftar</a>
                            </div>
                        </div>
                    </form>
                            <Button onClick={() => { login() }} className="default-button my-10 width-30 self-center">
                                Login
                            </Button>
            </DefaultLayout>
        </div>
    )
}

export default Login;