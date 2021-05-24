import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import UserService from '../../services/User.service';
import Person from '../../assets/img/person.svg';
import TextArea from '../../components/textArea';

const Profile = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [userTemp, setUserTemp] = useState();
    console.log("prof");
    console.log(user);
    
    setUser(() => UserService.getCurrentUser());
    setUserTemp(() => user.userData);

    useEffect(() => {

    },[])
    console.log(user);

    const changePhoto = () => {

    }

    const changePassword = () => {

    }

    const saveUser = () => {

    }

    return(
        <div>
            <UserLayout>
                <div className="title px-10 py-10">Profile</div>
                <Card className="px-10 py-40 default-card flex-row justify-between flex-start">
                    {/* <Card className="default-card flex-row justify-between flex-center my-15"> */}
                        <div className="flex-col flex-center width-30">
                            <img src={ Person } alt="Person" height="100px" />
                            <div className="text-link my-10" onClick={() => changePhoto()}>
                                Ganti Foto
                            </div>
                            <hr className="width-60" height="2px" />
                            <div className="text-link my-10" onClick={() => changePassword()}>
                                Ganti Password
                            </div>
                        </div>
                        <div className="flex-col flex-start width-70">
                            <div className="mx-5 my-5">Nama</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.student_name }
                            />
                            <div className="mx-5 my-5">NIM</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.student_id }
                            />
                            <div className="mx-5 my-5">Program Studi</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.study_program_id }
                            />
                            <div className="mx-5 my-5">Tempat Lahir</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.student_place_of_birth }
                            />
                            <div className="mx-5 my-5">Tanggal Lahir</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.student_date_of_birth }
                            />
                            <div className="mx-5 my-5">Jenis Kelamin</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.student_gender }
                            />
                            <div className="mx-5 my-5">Tahun Masuk</div>
                            <Input 
                                type="text"
                                className="default-input my-10 width-90"
                                value={ userTemp.student_entry_year }
                            />
                            <div className="mx-5 my-5">Bio</div>
                            <TextArea
                                className="default-input my-10 width-90"
                                rows="5"
                                value={ userTemp.student_bio }
                            />
                            <Button className="default-button self-end" onClick={() => saveUser()}>
                                Save
                            </Button>
                        </div>
                    {/* </Card> */}
                </Card>
            </UserLayout>
        </div>
    );
}

export default Profile;