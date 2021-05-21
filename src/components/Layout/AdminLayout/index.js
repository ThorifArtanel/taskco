import React, { useEffect, useState } from 'react';
import DefaultLayout from '../defaultLayout';

const AdminLayout = (props) => {
    const [currentClass, setCurrentClass] = useState('');

    const menus = [
        {
            title: "Class",
            link: "/class"
        },
        {
            title: "Class Representative",
            link: "/class-representative"
        },
        {
            title: "User",
            link: "/user"
        }
    ]
    
    return(
        <DefaultLayout menus={ menus }>
        </DefaultLayout>
    );
}

export default AdminLayout;