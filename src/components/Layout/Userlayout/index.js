import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar';
import DefaultLayout from '../defaultLayout';

const UserLayout = (props) => {
    const [currentClass, setCurrentClass] = useState('');
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

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
        <DefaultLayout>
            <Sidebar menus={ menus }/>
            <div
                className="px-20 py-20"
                style={{
                    width: "100%", 
                    marginLeft: width * 18/100 + "px"
                }}
            >
                { props.children }
            </div>
        </DefaultLayout>
    );
}

export default UserLayout;