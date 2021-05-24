import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import DefaultLayout from '../../components/Layout/defaultLayout';
import AuthService from '../../services/Auth.service';

const Register = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    
    
    const register = (e) => {
        if(!check()) return false;
        // e.preventDefault();
        if(AuthService.register(username, password)){
            alert("Register Successful");
            history.replace('/login');
        }
        else{
            alert("Register Failed");
        }
    }

    const check = () => {
        if (!(username.length > 0) && !(password.length > 0)){
            alert("NIM or Password field is empty");
            return false;
        }
        if(password !== rePassword ){
            alert("Password not match");
            return false;
        }
        return true
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updateRePassword = (e) => {
        setRePassword(e.target.value);
    }

    return(
        <div>
            <DefaultLayout>
                    <form onSubmit={() => { register() }} className="margin-auto my-40 width-40">
                        <div className="flex-col flex-center">
                            <div className="title-big text-center my-40 red-rose">
                                Register
                            </div>
                            <table className="width-100">
                                <tbody>
                                <tr>
                                    <td>
                                        NIM
                                    </td>
                                    <td>
                                        <Input 
                                            type="text"
                                            className="default-input my-10 width-80"
                                            onChange={ updateUsername } 
                                            value={ username }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Password
                                    </td>
                                    <td>
                                        <Input 
                                            type="password"
                                            className="default-input my-10 width-80"
                                            onInput={ updatePassword } 
                                            value={ password }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Re-Enter Password
                                    </td>
                                    <td>
                                        <Input 
                                            type="password"
                                            className="default-input my-10 width-80"
                                            onInput={ updateRePassword } 
                                            value={ rePassword }
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <Button className="default-button my-10 width-30">
                                Register
                            </Button>
                        </div>
                    </form>
            </DefaultLayout>
        </div>
    )
}

export default Register;