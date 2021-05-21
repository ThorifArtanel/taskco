import React, { useEffect, useState } from 'react';
import DefaultLayout from '../defaultLayout';

const UserLayout = (props) => {
    const [currentClass, setCurrentClass] = useState('');

    const menus = [
        {
            title: "Class",
            link: "/class/" + currentClass
        },
        {
            title: "Profile",
            link: "/profile"
        },
        {
            title: "Note",
            link: "/note"
        }
    ]
    
    return(
        <DefaultLayout menus={ menus }>
        </DefaultLayout>
    );
}

export default UserLayout;